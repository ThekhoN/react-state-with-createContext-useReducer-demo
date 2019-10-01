import { SET_LIGHT_THEME, SET_DARK_THEME } from "./actions";

const darkColor = "#1e272e";
const lightColor = "#d2dae2";

export const initialUI = {
  theme: "light",
  textColor: darkColor,
  bgColor: lightColor
};

const uiReducer = (state, action) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return {
        ...state,
        theme: "light",
        textColor: darkColor,
        bgColor: lightColor
      };
    case SET_DARK_THEME:
      return {
        ...state,
        theme: "dark",
        textColor: lightColor,
        bgColor: darkColor
      };
    default:
      return state;
  }
};

export default uiReducer;
