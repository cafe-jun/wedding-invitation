import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
};

const theme = extendTheme({
  config,
  breakpoints,
  fonts: {
    heading: `'Noto Serif KR', serif`,
    body: `'Noto Sans KR', sans-serif`,
  },
  colors: {
    brand: {
      50: "#ffe4e6",
      100: "#fecdd3",
      200: "#fda4af",
      300: "#fb7185",
      400: "#f43f5e",
      500: "#e11d48",
      600: "#be123c",
      700: "#9f1239",
      800: "#881337",
      900: "#701a2e",
    },
  },
  styles: {
    global: {
      body: {
        bg: "linear-gradient(to bottom, #fff5f7, #fffbeb)",
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "lg",
        },
      },
    },
  },
});

export default theme;
