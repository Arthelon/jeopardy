import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

export const Container = styled.div.attrs({
  className: "pt-card"
})`
  padding: 0;
`;

export const CategoryIcon = styled(Icon)`padding-left: 1rem;`;

export const ActionContainer = styled.div`
  cursor: pointer;
  height: 100%;
  display: inline-block;
  border-left: 1px solid grey;
  padding: 1rem 1rem;
  margin-left: 1rem;
`;
