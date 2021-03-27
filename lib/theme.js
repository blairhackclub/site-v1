import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    "red": "#ec3750",
    "orange": "#ff8c37",
    "yellow": "#f1c40f",
    "green": "#33d6a6",
    "cyan": "#5bc0de",
    "blue": "#338eda",
    "purple": "#a633d6",
    "muted": "#8492a6",
  },
  primary: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B",
  }
};

const fonts = {
  body: "Catamaran, system-ui, sans-serif",
  heading: "Catamaran, system-ui, sans-serif",
  mono: "Menlo, monospace",
};

const theme = extendTheme({ 
  config, 
  colors,
  fonts, 
});

export default theme;