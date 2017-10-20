import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Intent } from "@blueprintjs/core";
import {
  Container,
  Content,
  ToggleIcon,
  Header,
  TextArea,
  DeleteButton
} from "./styledComponents";

export default class QuestionCard extends React.Component {
  state = {
    isOpen: !!this.props.isOpen
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.showErrors && !this.props.showErrors) {
      this.setState({
        isOpen: true
      });
    }
  }

  handleOpenToggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  handleAnswerChange = e => {
    this.props.onChange({ answerText: e.target.value });
  };

  handleQuestionChange = e => {
    this.props.onChange({ questionText: e.target.value });
  };

  handlePriceChange = e => {
    const price = e.target.value;
    this.props.onChange({
      price: !!price ? parseInt(price, 10) : null
    });
  };

  validate() {}

  render() {
    const { isOpen } = this.state;
    const { index, questionText, price, answerText, showErrors } = this.props;
    const answerTextError = showErrors && !answerText;
    const questionTextError = showErrors && !questionText;
    const priceError = showErrors && !price;

    return (
      <Container>
        <Header isOpen={isOpen} onClick={this.handleOpenToggle}>
          {index + 1}. {answerText}
          <ToggleIcon open={isOpen} />
        </Header>
        <Content isOpen={isOpen} transitionDuration={200}>
          <form>
            <FormGroup
              label="Answer Text "
              requiredLabel
              helperText={answerTextError && "Required"}
              intent={answerTextError && Intent.DANGER}
            >
              <TextArea
                className={answerTextError && "pt-intent-danger"}
                placeholder="Answer text..."
                value={answerText || ""}
                onChange={this.handleAnswerChange}
              />
            </FormGroup>
            <FormGroup
              label="Question Text "
              requiredLabel
              helperText={questionTextError && "Required"}
              intent={questionTextError && Intent.DANGER}
            >
              <TextArea
                className={questionTextError && "pt-intent-danger"}
                placeholder="Question text..."
                value={questionText || ""}
                onChange={this.handleQuestionChange}
              />
            </FormGroup>
            <FormGroup
              label="Question Price "
              requiredLabel
              helperText={priceError && "Required"}
              intent={priceError && Intent.DANGER}
            >
              <div className={`pt-select ${priceError && "pt-intent-danger"}`}>
                <select value={price || ""} onChange={this.handlePriceChange}>
                  <option value="">Choose a price value...</option>
                  <option value="100">$100</option>
                  <option value="200">$200</option>
                  <option value="300">$300</option>
                  <option value="400">$400</option>
                  <option value="500">$500</option>
                </select>
              </div>
            </FormGroup>
            <DeleteButton onClick={this.props.onDelete} />
          </form>
        </Content>
      </Container>
    );
  }
}
QuestionCard.propTypes = {
  isOpen: PropTypes.bool,
  index: PropTypes.number,
  price: PropTypes.number,
  answerText: PropTypes.string,
  questionText: PropTypes.string,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  showErrors: PropTypes.bool
};
