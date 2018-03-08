import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

export const Container = styled.div.attrs({
  className: "pt-card"
})`
  padding: 0;
  margin-top: 1em;
  min-height: 60px;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const CategoryIcon = styled(Icon)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const ActionContainer = styled.div`
  cursor: pointer;
  height: 100%;
  display: inline-flex;
  align-items: center;
  border-left: 1px solid grey;
  padding: 1rem 1rem;
  margin-left: 1rem;
  ${props => props.active && "background-color: #46D753"};
`;
