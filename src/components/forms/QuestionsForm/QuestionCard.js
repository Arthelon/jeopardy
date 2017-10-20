import React from "react";
import PropTypes from "prop-types";
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
    const { index, questionText, price, answerText } = this.props;
    console.log(this.props);

    return (
      <Container>
        <Header isOpen={isOpen}>
          {index + 1}. {answerText}
          <ToggleIcon open={isOpen} onClick={this.handleOpenToggle} />
        </Header>
        <Content isOpen={isOpen} transitionDuration={200}>
          <form>
            <label className="pt-label">
              Answer Text
              <span className="pt-text-muted">(required)</span>
              <TextArea
                placeholder="Answer text..."
                value={answerText || ""}
                onChange={this.handleAnswerChange}
              />
            </label>
            <label className="pt-label">
              Question Text
              <span className="pt-text-muted">(required)</span>
              <TextArea
                placeholder="Question text..."
                value={questionText || ""}
                onChange={this.handleQuestionChange}
              />
            </label>
            <label className="pt-label">
              Question Value
              <span className="pt-text-muted">(required)</span>
              <div className="pt-select">
                <select value={price || ""} onChange={this.handlePriceChange}>
                  <option value="">Choose a price value...</option>
                  <option value="100">$100</option>
                  <option value="200">$200</option>
                  <option value="300">$300</option>
                  <option value="400">$400</option>
                  <option value="500">$500</option>
                </select>
              </div>
            </label>
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
  onDelete: PropTypes.func
};
