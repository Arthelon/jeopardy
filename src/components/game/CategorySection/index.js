import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import QuestionCard from "../QuestionCard";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1.5rem;
  width: 16%;
`;

const Header = styled.div.attrs({
  className: "pt-card"
})`
  font-size: 1.2em;
  font-style: bold;
  width: 100%;
  text-align: center;
`;

export default class CategorySection extends React.Component {
  render() {
    const { name, cards } = this.props;
    const cardList = Object.keys(cards)
      .map(cardId => ({
        id: cardId,
        ...cards[cardId]
      }))
      .sort((first, sec) => first.price > sec.price);

    return (
      <Container>
        <Header>{name}</Header>
        {cardList.map(card => <QuestionCard {...card} />)}
      </Container>
    );
  }
}
CategorySection.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  cards: PropTypes.object
};
