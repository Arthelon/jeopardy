import styled from "styled-components";
import { Button, Intent } from "@blueprintjs/core";

export const Title = styled.h2`text-align: center;`;

export const StartButton = styled(Button).attrs({
  intent: Intent.PRIMARY,
  className: "pt-large",
  rightIconName: "pt-icon-arrow-right"
})`
  margin: 0 auto;
  margin-top: 2rem;
  display: block;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
`;
