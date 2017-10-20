import styled from "styled-components";
import { fadeFromTop } from "utils/animation";
import { Collapse, Icon, Button, Intent } from "@blueprintjs/core";

export const TextArea = styled.textarea.attrs({
  className: "pt-fill pt-input",
  type: "text",
  dir: "auto"
})`
  height: 60px !important;
`;

export const Container = styled.div.attrs({
  className: "pt-card"
})`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;
  ${props => fadeFromTop(0.1)};
`;

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  ${props => props.isOpen && "border-bottom: 1px solid grey"};
`;
export const Content = styled(Collapse)`
  transition: 0.3s ease all;
  padding: 1rem 1.5rem;
  overflow: auto;
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  ${props =>
    !props.isOpen && "visibility: none; height: 0; padding: 0 1.5rem;"};
`;
export const ToggleIcon = styled(Icon).attrs({
  iconName: "pt-icon-caret-down"
})`
      cursor: pointer;
      transition: 0.3s ease all;
      transform: rotateZ(${props => (props.open ? 180 : 0)}deg);
  `;

export const DeleteButton = styled(Button).attrs({
  intent: Intent.DANGER,
  text: "Delete Question",
  iconName: "cross"
})`float:right`;
