import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button, Intent } from "@blueprintjs/core";
import toast from "utils/toast";

const dailyDoubleChance = 5; // percent

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
    CLICK: function() {
      if (this.state.isDailyDouble) {
        toast.show({
          intent: Intent.PRIMARY,
          message: "Daily Double activated!"
        });
        this.setState(prevState => ({
          price: prevState.price * 2
        }));
      }
      return "answer";
    }
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
    cardState: "price",
    isDailyDouble: false,
    price: this.props.price
  };

  // Initializes daily double flag
  componentDidMount() {
    this.setState({
      isDailyDouble: Math.ceil(Math.random() * 100) < dailyDoubleChance // 5 percent chance
    });
  }

  computeState = action => {
    const stateActions = stateTree[this.state.cardState];
    if (stateActions[action]) {
      let nextState = stateTree[this.state.cardState][action];
      if (typeof nextState === "function") {
        nextState = stateTree[this.state.cardState][action].call(this);
      }
      this.setState(prevState => ({
        cardState: nextState
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
    const { cardState, price } = this.state;
    const { answerText, questionText } = this.props;

    return (
      <Container
        completed={cardState === "completed"}
        onClick={this.handleClick}
        interactive={cardState === "question" || cardState === "price"}
      >
        {`$${price}`}
        {cardState === "answer" && (
          <div>
            <p>{answerText}</p>
            <Button
              intent={Intent.PRIMARY}
              text="Show question"
              onClick={this.handleButtonClick}
            />
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
