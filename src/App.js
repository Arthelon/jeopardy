import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import GameContainer from "containers/Game";
import IndexContainer from "containers/Index";
import CategoryCreatorContainer from "containers/CategoryCreator";
import { NavBar, HelpIcon } from "./styledComponents";
import HelpOverlay from "components/common/HelpOverlay";
import { provideState, update } from "freactal";

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
          {<Route exact path="/" component={IndexContainer} />}
          <Route exact path="/game" component={GameContainer} />
          <Route exact path="/create" component={CategoryCreatorContainer} />
          <HelpOverlay
            isOpen={this.state.showHelp}
            onClose={this.toggleHelpOverlay}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default provideState({
  initialState: () => ({
    categories: null,
    settings: {
      timer: false
    },
    players: {}
  }),
  effects: {
    setCategories: update((state, categories) => ({ categories })),
    setSettings: update((state, settings) => ({
      settings: Object.assign({}, state.settings, settings)
    }))
  }
})(App);
