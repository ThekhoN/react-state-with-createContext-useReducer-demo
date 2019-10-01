import React from "react";
import ConnectedCounter from "./components/Counter";
import ConnectedThemeSelector from "./components/Theme-selector";
import ConnectedThemeWrapper from "./components/Theme-wrapper";

const App = () => {
  return (
    <ConnectedThemeWrapper>
      <ConnectedThemeSelector />
      <ConnectedCounter />
    </ConnectedThemeWrapper>
  );
};

export default App;
