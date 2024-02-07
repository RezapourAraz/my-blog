import { createTheme } from "@mui/material";

const useTheme = () => {
  return createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: "smooth",
          },
          body: {
            fontFamily: "Samim, sans-serif",
            ".Toastify__toast ": {
              fontFamily: "Samim, sans-serif",
              background: "#313338",
            },
          },
          "input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
            {
              WebkitBoxShadow: "0 0 0 30px #28243d inset !important",
            },
        },
      },
    },
    palette: {
      mode: "dark",
      background: {
        default: "#313338",
        paper: "#1E1F22",
      },
      primary: {
        main: "#9B95FF",
        light: "#FFE3DF",
      },
      secondary: {
        main: "#2F3239",
        light: "##EAEAEB",
      },
      text: {
        primary: "rgba(231, 227, 252, 0.87)",
      },

      //@ts-ignore
      modalClose: { main: "rgba(231, 227, 252, 0.87)" },
      grey: {
        700: "#333333",
        600: "#4F4F4F",
        500: "#a4a4a4",
        400: "#828282",
        300: "#E0E0E0",
        200: "#F2F2F2",
        100: "#FFFFFF",
      },
      success: {
        main: "#3CB933",
        light: "#3B4748",
      },
      error: {
        main: "#EB5757",
        light: "#FFCCCC",
      },
      warning: {
        main: "#F28F32",
        light: "#FFD2A9",
      },
      info: {
        main: "#2F80ED",
        light: "#8CC8EA",
      },
      disable: {
        main: "rgb(138, 141, 147)",
        light: "rgba(138, 141, 147, 0.12)",
      },
      divider: "rgba(231, 227, 252, 0.12)",
      imgInputBg: "#ffffff14",
    },
    typography: {
      fontFamily: "Samim, sans-serif",
      fontSize: 16,
      h1: {
        fontSize: 32,
        fontWeight: 700,
        lineHeight: "37.5px",
        color: "#000",
      },
      h2: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: "28px",
        color: "#000",
      },
      h3: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: "23px",
        color: "#000",
      },
      h4: {
        fontSize: 18,
        fontWeight: 500,
        lineHeight: "19px",
        color: "#000",
      },
      h5: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "23.87px",
        letterSpacing: "0.38px",
        color: "#000",
      },
      h6: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "14px",
        color: "#000",
      },
      button: {
        textTransform: "none",
      },
    },
  });
};

export default useTheme;
