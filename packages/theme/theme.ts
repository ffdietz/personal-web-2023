import { ThemeOverride, extendTheme } from '@chakra-ui/react'

export const theme: ThemeOverride = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    bgColor: "#000",
    textColor: "#C9FF00",
    primaryColor: "#C9FF00",
    secondaryColor: "#FF0DA4",
    accentColor: "#290DFF",
  },
  styles: {
    global: {
      body: {
        bg: "bgColor",
        color: "textColor",
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