import styled from "styled-components";
import { Button, Intent } from "@blueprintjs/core";

export const Title = styled.h2`text-align: center;`;

export const StartButton = styled(Button).attrs({
  intent: Intent.SUCCESS,
  className: "pt-large",
  rightIconName: "pt-icon-arrow-right"
})`
  margin: 0 auto;
  margin-top: 2rem;
  display: block;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
