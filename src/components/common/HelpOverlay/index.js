import React from "react";
import { Overlay } from "@blueprintjs/core";
import styled from "styled-components";

const HelpCard = styled.div.attrs({
  className: "pt-card pt-elevation-4"
})`
  margin: 4rem;
  display: block;
`;

export default props => (
  <Overlay {...props}>
    <HelpCard>
      <h3>Jeopardy Instructions</h3>
      <p>
        Play individually or in groups. Pick a category and a point value. Click
        on the chosen box for the question. Students must give the answer in the
        form of a question before clicking again. The teacher may want to set a
        time limit for answering the question. To see if a student or group is
        correct, click again for the answer. Click the “Back to Board” button on
        the slide to return to the main board. If the student or team is
        correct, they are awarded the point value of the question. (Click the
        “Score” button located on the main board to add the point value to the
        appropriate team score.) The dollar values disappear after each
        question. Continue until all questions have been answered. The team with
        the most points wins.
      </p>
    </HelpCard>
  </Overlay>
);
