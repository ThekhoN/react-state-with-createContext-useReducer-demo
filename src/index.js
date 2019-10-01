import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UIProvider } from "./context-state-modules/ui/context";
import { CounterProvider } from "./context-state-modules/counter/context";

ReactDOM.render(
  <UIProvider>
    <CounterProvider>
      <App />
    </CounterProvider>
  </UIProvider>,
  document.getElementById("root")
);
