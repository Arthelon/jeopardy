import React from "react";
import { Title, StartButton, ContentContainer } from "./styledComponents";
import CategoryCard from "components/CategoryCard";
import firebase from "utils/firebase";
import { Spinner, Button, Intent, Text } from "@blueprintjs/core";
import { PageContainer } from "../../styledComponents";

export default class IndexContainer extends React.Component {
  state = {
    categories: [],
    chosenCategories: []
  };

  async componentDidMount() {
    const db = firebase.database().ref();
    const categories = await db
      .child("categories")
      .once("value")
      .then(snapshot => {
        return snapshot.val();
      });
    this.setState(() => ({
      categories: Object.keys(categories).map(key => categories[key])
    }));
  }

  handleCreateCategoryClicked = () => {
    this.props.history.push("/create");
  };

  handleCategoryClick = chosenId => () => {
    this.setState(state => {
      if (!(state.chosenCategories.indexOf(chosenId) === -1)) {
        return {
          chosenCategories: state.chosenCategories.filter(id => id !== chosenId)
        };
      }
      return {
        chosenCategories: state.chosenCategories.concat(chosenId)
      };
    });
  };

  render() {
    const { chosenCategories, categories } = this.state;

    return (
      <PageContainer>
        <Title>Choose 6 categories</Title>
        <ContentContainer>
          {!categories.length && <Spinner />}
          {categories.map(category => (
            <CategoryCard
              active={chosenCategories.indexOf(category.id) !== -1}
              onClick={this.handleCategoryClick(category.id)}
              name={category.name}
              type={category.type}
              key={category.id}
            />
          ))}
        </ContentContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Button
            text="Create category"
            rightIconName="add"
            intent={Intent.PRIMARY}
            onClick={this.handleCreateCategoryClicked}
          />
          <Text>Selected categories: {chosenCategories.length} / 6</Text>
        </div>
        {chosenCategories.length === 6 && (
          <StartButton text="Start" disabled={chosenCategories.length < 6} />
        )}
      </PageContainer>
    );
  }
}
