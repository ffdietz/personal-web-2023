import { ThemeOverride, extendTheme } from '@chakra-ui/react'

export const theme: ThemeOverride = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    bgColor: "#000",
    txtColor: "#FFF",
    primaryColor: "#FE9901",
    secondaryColor: "#FFF",
    accentColor: "#FE9901",
  },
  styles: {
    global: {
      body: {
        bg: "bgColor",
        color: "txtColor",
        fontFamily: "body",
        overscrollBehavior: "none",
      },
    },
  },
});


/*
COLOR PALETTE GENERATOR
  https://realtimecolors.com/
*/