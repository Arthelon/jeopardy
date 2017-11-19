import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1.5rem;
  width: 16%;
`;

const Header = styled.div.attrs({
  className: "pt-card"
})`
    width: 100%;
    text-align: center;
`;

export default class CategorySection extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <Container>
        <Header>{name}</Header>
      </Container>
    );
  }
}
CategorySection.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  cards: PropTypes.object
};
