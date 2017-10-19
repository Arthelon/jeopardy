import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import GameContainer from "containers/Game";
import IndexContainer from "containers/Index";
import { NavBar, HelpIcon, HelpCard } from "./styledComponents";
import { Overlay } from "@blueprintjs/core";

class App extends Component {
  state = {
    showHelp: false
  };

  toggleHelpOverlay = () => {
    this.setState(state => ({
      showHelp: !state.showHelp
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar>
            <HelpIcon onClick={this.toggleHelpOverlay} />
          </NavBar>
          <Route path="/" component={IndexContainer} />
          <Route path="/game" component={GameContainer} />
          <Overlay
            isOpen={this.state.showHelp}
            onClose={this.toggleHelpOverlay}
          >
            <HelpCard>
              <h3>Jeopardy Instructions</h3>
              <p>
                Play individually or in groups. Pick a category and a point
                value. Click on the chosen box for the question. Students must
                give the answer in the form of a question before clicking again.
                The teacher may want to set a time limit for answering the
                question. To see if a student or group is correct, click again
                for the answer. Click the “Back to Board” button on the slide to
                return to the main board. If the student or team is correct,
                they are awarded the point value of the question. (Click the
                “Score” button located on the main board to add the point value
                to the appropriate team score.) The dollar values disappear
                after each question. Continue until all questions have been
                answered. The team with the most points wins.
              </p>
            </HelpCard>
          </Overlay>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
