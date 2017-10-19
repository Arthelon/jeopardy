import React from "react";
import { Title, StartButton, ContentContainer } from "./styledComponents";
import CategoryCard from "components/CategoryCard";
import firebase from "utils/firebase";
import { Spinner } from "@blueprintjs/core";

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
    console.log(this.state);
    return (
      <div>
        <Title>Choose 6 categories</Title>
        <ContentContainer>
          {!this.state.categories.length && <Spinner />}
          {this.state.categories.map(category => (
            <CategoryCard
              active={this.state.chosenCategories.indexOf(category.id) !== -1}
              onClick={this.handleCategoryClick(category.id)}
              name={category.name}
              type={category.type}
              key={category.id}
            />
          ))}
        </ContentContainer>
        <StartButton text="Start" />
      </div>
    );
  }
}
