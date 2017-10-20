import React from "react";
import { injectState } from "freactal";
import { PageContainer } from "../../styledComponents";

class GameContainer extends React.Component {
  // persist game state to localStorage

  render() {
    return <PageContainer>I'm a game</PageContainer>;
  }
}
export default injectState(GameContainer);
