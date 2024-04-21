import { ThemeOverride, extendTheme } from '@chakra-ui/react'
import { openSans, relayLight } from './fonts/fonts';

export const theme: ThemeOverride = extendTheme({
  fonts: {
    heading: openSans.style.fontFamily,
    body: relayLight.style.fontFamily,
  },
  colors: {
    primaryColor: "#000",
    secondaryColor: "#FF0DA4",
    accentColor: "#5B0DFF",
  },
  styles: {
    global: {
      body: {
        background: "grey",
        color: "primaryColor",
        fontFamily: "body",
        overflowX:"hidden",
        overscrollBehavior: "none",
        "::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
  },
});


/*
COLOR PALETTE GENERATOR
  https://realtimecolors.com/
*/