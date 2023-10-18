import { ThemeOverride, extendTheme } from '@chakra-ui/react'
import { openSans } from './fonts/fonts';

export const theme: ThemeOverride = extendTheme({
  fonts: {
    heading: openSans.style.fontFamily,
    body: openSans.style.fontFamily,
  },
  colors: {
    bgColor: "#000",
    textColor: "#C9FF00",
    primaryColor: "#C9FF00",
    secondaryColor: "#FF0DA4",
    accentColor: "#5B0DFF",
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