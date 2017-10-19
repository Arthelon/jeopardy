import styled from "styled-components";
import { Button } from "@blueprintjs/core";

export const PageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

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
