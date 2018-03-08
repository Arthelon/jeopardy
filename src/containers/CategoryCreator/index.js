import React from "react";
import { PageContainer } from "../../styledComponents";
import { Tabs2, Tab2, Button, Intent } from "@blueprintjs/core";
import CreateCategoryForm from "components/forms/CreateCategoryForm";
import QuestionsForm from "components/forms/QuestionsForm";
import firebase from "utils/firebase";
import styled from "styled-components";
import toast from "utils/toast";

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: ${props => (props.end ? "flex-end" : "space-between")};
`;

export default class CategoryCreatorContainer extends React.Component {
  state = {
    selectedTabId: "category", // change back to category later
    category: {}
  };

  handleBackClick = () => {
    this.setState({
      selectedTabId: "category"
    });
  };

  handleCancelClick = () => {
    this.props.history.push("/");
  };

  handleTabChange = newTabId => {
    newTabId !== this.state.selectedTabId &&
      this.setState({
        selectedTabId: newTabId
      });
  };

  handleCategorySubmit = category => {
    this.setState({
      selectedTabId: "questions",
      category
    });
  };

  handleQuestionsSubmit = async questions => {
    try {
      const database = firebase.database();
      const { category } = this.state;
      // creates new blank category record
      const newCategory = database
        .ref()
        .child("categories")
        .push();
      // assigns fields to category record
      await newCategory.set({
        name: category.name,
        type: category.type,
        id: newCategory.key
      });
      // add cards
      await Promise.all(
        questions.map(async question => {
          await newCategory
            .child("cards")
            .push()
            .set(question);
        })
      );
      toast.show({
        intent: Intent.SUCCESS,
        message: `Created category: ${category.name}`
      });
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
      toast.show({
        intent: Intent.DANGER,
        message: "Something went wrong, please try again."
      });
    }
  };

  render() {
    const { selectedTabId } = this.state;

    return (
      <PageContainer>
        <Tabs2 id="categoryCreator" selectedTabId={selectedTabId}>
          <Tab2
            id="category"
            title="Create Category"
            panel={<CreateCategoryForm onSubmit={this.handleCategorySubmit} />}
          />
          <Tab2
            id="questions"
            title="Add Questions"
            panel={<QuestionsForm onSubmit={this.handleQuestionsSubmit} />}
          />
        </Tabs2>
        <ButtonContainer end={selectedTabId === "category"}>
          {selectedTabId === "questions" && (
            <Button
              text="Back"
              intent={Intent.WARNING}
              iconName="arrow-left"
              onClick={this.handleBackClick}
            />
          )}
          <Button
            text="Cancel"
            intent={Intent.DANGER}
            onClick={this.handleCancelClick}
          />
        </ButtonContainer>
      </PageContainer>
    );
  }
}
