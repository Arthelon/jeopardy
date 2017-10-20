import React from "react";
import { PageContainer } from "../../styledComponents";
import { Tabs2, Tab2, Button, Intent } from "@blueprintjs/core";
import CreateCategoryForm from "components/forms/CreateCategoryForm";
import QuestionsForm from "components/forms/QuestionsForm";
import firebase from "utils/firebase";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: ${props => (props.end ? "flex-end" : "space-between")};
`;

export default class CategoryCreatorContainer extends React.Component {
  state = {
    selectedTabId: "questions" // change back to category later
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

  handleCategorySubmit = () => {
    this.setState({
      selectedTabId: "questions"
    });
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
            panel={<QuestionsForm />}
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
