import React from "react";
import PropTypes from "prop-types";
import { Container, CategoryIcon, ActionContainer } from "./styledComponents";
import { Icon } from "@blueprintjs/core";

const categoryIcons = {
  default: "pt-icon-star-empty",
  sports: "pt-icon-walk",
  history: "book",
  television: "desktop",
  art: "edit"
};

export default class CategoryCard extends React.Component {
  render() {
    const { name, onClick, active, type } = this.props;
    console.log(name);

    return (
      <Container>
        <CategoryIcon
          iconName={categoryIcons[type] || categoryIcons.default}
        />{" "}
        {name}
        <ActionContainer active={active} onClick={onClick}>
          <Icon iconName={active ? "tick" : "plus"} />
        </ActionContainer>
      </Container>
    );
  }
}
CategoryCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
};
