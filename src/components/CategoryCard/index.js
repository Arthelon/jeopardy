import React from "react";
import PropTypes from "prop-types";
import { Container, CategoryIcon, ActionContainer } from "./styledComponents";
import { Icon } from "@blueprintjs/core";

const categoryIcons = {
  default: "pt-icon-star-empty"
};

export default class CategoryCard extends React.Component {
  render() {
    const { name, onClick, active } = this.props;

    return (
      <Container>
        <CategoryIcon
          iconName={categoryIcons[name] || categoryIcons.default}
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
