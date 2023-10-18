import localFont from "next/font/local";
import { Open_Sans } from 'next/font/google'

export const relayLight = localFont({
  src: './Relay-Light.woff2',
  weight: '300',
})

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
});
