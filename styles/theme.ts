import { Theme } from "theme-ui"

interface CustomTheme extends Omit<Theme, "colors"> {
  colors: any
}

/** raw colors */
export const defaultColorPalette = {
  primary: ["#120a10ff", "#22141eff", "#43263bff", "#643858ff", "#744266ff"],
  secondary: ["#d79f9dff", "#deb1afff", "#edd4d3ff", "#f4e6e5ff", "#fafafaff"],
}

export const theme: CustomTheme = {
  colors: defaultColorPalette,
  fonts: {
    body:
      '"Baloo 2", Roboto, "Segoe UI", -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", cursive, sans-serif',
  },
  text: {
    heading1: {
      color: "secondary.4",
      fontSize: "2.2rem",
      marginBottom: "1.6rem",
    },
    heading2: {
      color: "secondary.0",
      fontSize: "2.0rem",
      marginBottom: "1.6rem",
    },
    error: {
      color: "#b71c1c",
    },
    xsmall: {
      fontSize: 13,
    },
  },
  sizes: {
    container: "1180px",
  },
  buttons: {
    primary: {
      color: "primary.1",
      bg: "secondary.3",
      "&:hover": {
        bg: "secondary.2",
      },
      cursor: "pointer",
    },
    secondary: {
      color: "primary.1",
      bg: "secondary.2",
    },
  },
  forms: {
    input: {
      backgroundColor: "primary.1",
      "&:focus": {
        outline: "none",
      },

      /** override browser agent */
      "&:-webkit-autofill": {
        boxShadow: (theme) => `0 0 0 50px ${theme.colors.primary[1]} inset`,
        border: (theme) => `1px solid ${theme.colors.secondary[3]} !important`,
        color: (theme) => `${theme.colors.secondary[3]} !important`,
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: 1.45,
      color: "secondary.0",
      minHeight: "100%",
      background: (theme) => theme.colors.primaryGradient,
    },
    h1: {
      variant: "text.heading",
      fontSize: 1,
      fontWeight: "normal",
    },
    h2: {
      variant: "text.heading",
      fontSize: 1,
    },
    p: {
      margin: 0,
    },
    img: {
      maxWidth: "100%",
    },
    a: {
      color: "secondary.3",
      cursor: "pointer",
      "&:hover": {
        color: "secondary.4",
      },
      "&:any-link": {
        color: "secondary.3",
        textDecoration: "none",
      },
    },
  },
}

export default theme
