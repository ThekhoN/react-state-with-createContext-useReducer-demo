import React from "react";
import styled from "styled-components";
import { UIConsumer } from "../context-state-modules/ui/context";

const ToggleSwitchInput = styled.div`
  margin-bottom: 4.6rem;

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 100px;
    height: 50px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
  }
  label:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 3px;
    width: 45px;
    height: 45px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
  input:checked + label {
    background: #bada55;
  }
  input:checked + label:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
  label:active:after {
    width: 130px;
  }
  /* credit ~ "All-CSS Toggle Swtich" https://codepen.io/mburnette/pen/LxNxNg */
`;

const ThemeSelector = ({ theme, setLightTheme, setDarkTheme }) => {
  const updateUITheme = () => {
    if (theme === "light") {
      return setDarkTheme();
    } else {
      return setLightTheme();
    }
  };
  return (
    <ToggleSwitchInput onClick={updateUITheme}>
      <h4>UI theme: {theme}</h4>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={updateUITheme}
      />
      <label htmlFor="switch">Toggle</label>
    </ToggleSwitchInput>
  );
};

const ConnectedThemeSelector = () => {
  return (
    <UIConsumer>
      {props => {
        return <ThemeSelector {...props} />;
      }}
    </UIConsumer>
  );
};

export default ConnectedThemeSelector;
