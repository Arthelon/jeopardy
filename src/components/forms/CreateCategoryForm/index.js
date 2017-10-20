import React from "react";
import { Button, Intent, FormGroup } from "@blueprintjs/core";

const categories = [{ value: "sports", label: "Sports" }];

export default class CreateCategoryForm extends React.Component {
  state = {
    name: "",
    type: ""
  };

  handleNextClick = () => {
    this.props.onSubmit({ name: this.state.name, type: this.state.type });
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
        <FormGroup label="Name " requiredLabel>
          <input
            className="pt-input"
            type="text"
            placeholder="Category name..."
            dir="auto"
            value={name}
            onChange={this.handleNameChange}
          />
        </FormGroup>
        <FormGroup label="Type " requiredLabel>
          <div className="pt-select">
            <select value={type} onChange={this.handleTypeChange}>
              <option value="">Choose a category type...</option>
              {categories.map(({ label, value }) => (
                <option value={value}>{label}</option>
              ))}
            </select>
          </div>
        </FormGroup>
        <Button
          text="Next"
          intent={Intent.SUCCESS}
          rightIconName="arrow-right"
          disabled={!name || !type}
          onClick={this.handleNextClick}
        />
      </form>
    );
  }
}
