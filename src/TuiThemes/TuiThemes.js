// import { transparentize, darken } from "@theme-ui/color"

export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  fonts: {
    body:
      'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: .8,
  },
  colors: {
    // Main colors
    primary: "#1D3557",
    secondary: "#38b249",

    // Text and Backgrounds
    text: "#3E3F42",
    secondaryText: "#6B6C6F",
    grey: "#95989A",
    lightgrey: "#0000000D",
    highlight: "#0000000D",
    white: "#FFFFFF",
    background: "#FFFFFF",
    secondaryBackground: "#FBFBFD",
    sidebarBackground: "#2C2E3E",
    sidebarHighlighted: "#5493F51A",
    border: "#DDDDDD",
    error: "#E6492d",
    warning: "#F6AB2F",
    muted: "#9EA0A5",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  styles: {
    a: {
      color: "primary",
      fontSize: "14px",
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      boxSizing: "border-box",
      fontSize: 1,
    },
    h1: {
      variant: "text.heading",
      fontSize: 8,
    },
    h2: {
      variant: "text.heading",
      fontSize: 7,
    },
    h3: {
      variant: "text.heading",
      fontSize: 6,
    },
    h4: {
      variant: "text.heading",
      fontSize: 5,
    },
    h5: {
      variant: "text.heading",
      fontSize: 4,
    },
    h6: {
      variant: "text.heading",
      fontSize: 3,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    hr: {
      color: "lightgrey",
    },
  },
}
