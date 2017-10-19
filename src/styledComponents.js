import styled from "styled-components";
import { Button } from "@blueprintjs/core";

export const NavBar = styled.div`
  margin-top: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3rem;
  padding-left: 3rem;
  width: 100%;
`;

export const HelpIcon = styled(Button).attrs({
  className: "pt-minimal pt-large",
  iconName: "pt-icon-help"
})`
`;

export const HelpCard = styled.div.attrs({
  className: "pt-card pt-elevation-4"
})`
  margin: 4rem;
  display: block;
`;
