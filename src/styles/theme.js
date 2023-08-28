import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeight: 400,
    htmlFontSize: 16,
    h1: {
      fontSize: "80px",
      lineHeight: "110%",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Old Standard TT",
      fontSize: "72px",
      lineHeight: "110%",
      fontWeight: 400,
      fontStyle: "italic",
    },
    h3: {
      fontFamily: "Old Standard TT",
      fontSize: "56px",
      lineHeight: "115%",
      fontWeight: 400,
      fontStyle: "italic",
    },
    h4: {
      fontSize: "48px",
      lineHeight: "115%",
      fontWeight: 600,
    },
    h5: {
      fontSize: "40px",
      lineHeight: "120%",
      fontWeight: 600,
    },
    caption: {
      fontSize: "12px",
    },
    button: {
      fontSize: "18px",
      fontWeight: 600,
    },
    title: {
      fontSize: "20px",
      fontWeight: 600,
      color: "var(--sertis-grey-grey-800)",
    },
    body2: {
      fontSize: "14px",
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#FF5454",
          borderColor: "#FF5454",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontWeight: 600,
          textTransform: "initial",
          borderRadius: 30,
          borderColor: "var(--sertis-grey-grey-800)",
          color: "var(--sertis-grey-grey-800)",
          "&:hover": {
            color: "#fff",
            borderColor: "var(--sertis-primary-scooter-500)",
            background: "var(--sertis-primary-scooter-500, #25CDD9)",
            boxShadow: "0px 0px 10px 0px rgba(37, 205, 217, 0.70)",
          },
        },
      },
    },
  },
});

export default theme;
