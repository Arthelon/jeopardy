import React from "react";
import { Title, StartButton, ContentContainer } from "./styledComponents";
import CategoryCard from "components/common/CategoryCard";
import SettingsModal from "components/common/SettingsModal";
import firebase from "utils/firebase";
import { Spinner, Button, Intent, Text } from "@blueprintjs/core";
import { PageContainer } from "../../styledComponents";
import { injectState } from "freactal";

class IndexContainer extends React.Component {
  state = {
    categories: [],
    chosenCategories: [],
    showSettingsModal: false
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
      categories: Object.keys(categories || []).map(key => categories[key])
    }));
  }

  handleSubmit = settings => {
    this.props.effects.setSettings({
      timer: settings.timer
    });
    this.props.effects.setCategories(
      this.state.categories.filter(
        category => this.state.chosenCategories.indexOf(category.id) !== -1
      )
    );
    console.log(
      this.state.categories.filter(
        category => this.state.chosenCategories.indexOf(category) !== -1
      )
    );
    this.props.history.push("/game");
  };

  toggleSettingsModal = () => {
    this.setState(state => ({
      showSettingsModal: !state.showSettingsModal
    }));
  };

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
      if (state.chosenCategories.length === 6) {
        // remove first item and append latest
        return {
          chosenCategories: state.chosenCategories.concat(chosenId).slice(1)
        };
      }
      return {
        chosenCategories: state.chosenCategories.concat(chosenId)
      };
    });
  };

  render() {
    const { chosenCategories, categories, showSettingsModal } = this.state;

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
          <StartButton
            text="Start"
            disabled={chosenCategories.length < 6}
            onClick={this.toggleSettingsModal}
          />
        )}
        <SettingsModal
          isOpen={showSettingsModal}
          onClose={this.toggleSettingsModal}
          onSubmit={this.handleSubmit}
        />
      </PageContainer>
    );
  }
}

export default injectState(IndexContainer);
