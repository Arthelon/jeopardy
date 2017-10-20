import React from "react";
import {
  Dialog,
  Button,
  FormGroup,
  NumericInput,
  Intent
} from "@blueprintjs/core";
import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`padding: 1rem 1.5rem;`;

export default class SettingsModal extends React.Component {
  state = {
    timer: null
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  handleTimerChange = value => {
    this.setState({
      timer: value
    });
  };

  preventDefault(e) {
    e.preventDefault();
  }

  render() {
    const { isOpen, onClose } = this.props;
    const { timer } = this.state;

    return (
      <Dialog
        isOpen={isOpen}
        title="Game Setup"
        onClose={onClose}
        iconName="cog"
      >
        <Form onSubmit={this.preventDefault}>
          <FormGroup label="Enable Timer">
            <NumericInput
              min={30}
              value={timer}
              onValueChange={this.handleTimerChange}
              leftIconName="time"
              minorStepSize={1}
              placeholder="Optional"
            />
          </FormGroup>
          <Button
            text="Start"
            intent={Intent.PRIMARY}
            onClick={this.handleSubmit}
          />
        </Form>
      </Dialog>
    );
  }
}
SettingsModal.propTypes = {
  isOpen: PropTypes.bool,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
};
