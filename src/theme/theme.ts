import { ThemeOverride, extendTheme } from '@chakra-ui/react'
import { openSans, relayLight } from './fonts/fonts';

export const theme: ThemeOverride = extendTheme({
  fonts: {
    heading: openSans.style.fontFamily,
    body: relayLight.style.fontFamily,
  },
  colors: {
    primaryColor: "#C9FF00",
    secondaryColor: "#FF0DA4",
    accentColor: "#5B0DFF",
  },
  styles: {
    global: {
      body: {
        background: "black",
        color: "primaryColor",
        fontFamily: "body",
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