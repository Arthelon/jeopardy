import React from "react";
import { injectState } from "freactal";
import { PageContainer } from "../../styledComponents";
import CategorySection from "components/game/CategorySection";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

class GameContainer extends React.Component {
  render() {
    const { categories } = this.props.state;
    console.log(categories);
    return (
      <PageContainer>
        {categories &&
          categories.map(category => {
            return (
              <CategorySection
                key={category.id}
                name={category.name}
                type={category.type}
                cards={category.cards}
              />
            );
          })}
      </PageContainer>
    );
  }
}
export default injectState(GameContainer);
