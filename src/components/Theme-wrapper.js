import React from "react";
import { UIConsumer } from "../context-state-modules/ui/context";
import styled from "styled-components";

const ThemeWrapperDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2.6rem;
`;

const ThemeWrapper = ({ theme, textColor, bgColor, children }) => {
  const style = {
    backgroundColor: bgColor,
    color: textColor
  };
  return <ThemeWrapperDiv style={style}>{children}</ThemeWrapperDiv>;
};

const ConnectedThemeWrapper = ({ children }) => {
  return (
    <UIConsumer>
      {({ theme, textColor, bgColor }) => {
        return (
          <ThemeWrapper theme={theme} textColor={textColor} bgColor={bgColor}>
            {children}
          </ThemeWrapper>
        );
      }}
    </UIConsumer>
  );
};

export default ConnectedThemeWrapper;
