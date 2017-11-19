import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "@blueprintjs/core";
const Container = styled.div.attrs({
  className: props => `pt-card ${props.interactive && "pt-interactive"}`
})`
  width: 100%;
  text-align: center;
  margin-top: 1.5em;
  ${props => props.completed && "opacity: 0.4"};
`;

const stateTree = {
  price: {
    CLICK: "answer"
  },
  answer: {
    BUTTON_CLICK: "question"
  },
  question: {
    CLICK: "completed"
  },
  completed: {}
};

export default class QuestionCard extends React.Component {
  state = {
    cardState: "price" // answer, question, disabled
  };

  computeState = action => {
    const stateActions = stateTree[this.state.cardState];
    if (stateActions[action]) {
      this.setState(prevState => ({
        cardState: stateTree[prevState.cardState][action]
      }));
    }
  };

  handleButtonClick = () => {
    this.computeState("BUTTON_CLICK");
  };

  handleClick = () => {
    this.computeState("CLICK");
  };

  render() {
    const { cardState } = this.state;
    const { price, answerText, questionText } = this.props;

    return (
      <Container
        completed={cardState === "completed"}
        onClick={this.handleClick}
        interactive={cardState === "question" || cardState === "price"}
      >
        {(cardState === "price" || cardState === "completed") && `$${price}`}
        {cardState === "answer" && (
          <div>
            <p>{answerText}</p>
            <Button text="Show question" onClick={this.handleButtonClick} />
          </div>
        )}
        {cardState === "question" && <p>{questionText}</p>}
      </Container>
    );
  }
}
QuestionCard.propTypes = {
  price: PropTypes.number.isRequired,
  answerText: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
