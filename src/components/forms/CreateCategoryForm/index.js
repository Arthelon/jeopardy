import React from "react";
import { Button, Intent } from "@blueprintjs/core";

export default class CreateCategoryForm extends React.Component {
  state = {
    name: "",
    type: ""
  };

  handleNextClick = () => {
    this.props.onSubmit(this.state.name, this.state.type);
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleTypeChange = e => {
    this.setState({
      type: e.target.value
    });
  };

  getValue() {
    return this.state;
  }

  render() {
    const { name, type } = this.state;
    console.log(type);

    return (
      <form>
        <label className="pt-label">
          Name
          <span className="pt-text-muted"> (required)</span>
          <input
            className="pt-input"
            type="text"
            placeholder="Category name..."
            dir="auto"
            value={name}
            onChange={this.handleNameChange}
          />
        </label>
        <label className="pt-label">
          Type
          <span className="pt-text-muted"> (required)</span>
          <div className="pt-select">
            <select value={type} onChange={this.handleTypeChange}>
              <option value="">Choose a category type...</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </label>
        <Button
          text="Next"
          intent={Intent.SUCCESS}
          rightIconName="arrow-right"
          disabled={!name && !type}
          onClick={this.handleNextClick}
        />
      </form>
    );
  }
}
