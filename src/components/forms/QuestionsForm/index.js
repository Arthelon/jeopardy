import React from "react";
import PropTypes from "prop-types";
import QuestionCard from "./QuestionCard";
import update from "immutability-helper";
import { Button, Intent, Text } from "@blueprintjs/core";
import styled from "styled-components";

const MissingText = styled(Text).attrs({
  className: "pt-ui-text-large"
})`
  text-align: center;
  margin: 2rem;
`;

export default class QuestionsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: props.questions
    };
    this.refs = new Map();
  }
  handleSubmit = () => {};

  handleQuestionDelete = idx => () => {
    this.setState(state => ({
      questions: update(state.questions, {
        $splice: [[idx, 1]]
      })
    }));
  };

  addQuestion = () => {
    this.setState(state => ({
      questions: state.questions.concat({})
    }));
  };

  onQuestionChange = idx => question => {
    this.setState(state => ({
      questions: update(state.questions, {
        [idx]: {
          $merge: question
        }
      })
    }));
  };

  render() {
    const { questions } = this.state;

    return (
      <div>
        {!questions.length && <MissingText>No Questions Found!</MissingText>}
        {questions.map((question, idx) => (
          <QuestionCard
            key={idx}
            index={idx}
            price={question.price}
            answerText={question.answerText}
            questionText={question.questionText}
            onChange={this.onQuestionChange(idx)}
            onDelete={this.handleQuestionDelete(idx)}
          />
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem"
          }}
        >
          <Button
            text="Submit"
            onClick={this.handleSubmit}
            intent={Intent.SUCCESS}
          />
          <Button
            text="Add question"
            iconName="add"
            onClick={this.addQuestion}
            intent={Intent.PRIMARY}
          />
        </div>
      </div>
    );
  }
}
QuestionsForm.defaultProps = {
  questions: [
    { price: 100 },
    { price: 200 },
    { price: 300 },
    { price: 400 },
    { price: 500 }
  ]
};
QuestionsForm.propTypes = {
  onSubmit: PropTypes.func,
  questions: PropTypes.array
};
