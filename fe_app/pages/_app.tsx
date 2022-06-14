import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "reset-css";

import AppLayout from "@/layouts/appLayout";
import { MoralisProvider } from "react-moralis";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
  
      <AppLayout>
        <MoralisProvider
          appId="5dswsn9TVNh2cvI4QiLxxSVsXGLiLWlAMgyPYglA"
          serverUrl="https://tuiddhnu8ojx.usemoralis.com:2053/server"
    >
            <Component {...pageProps} />
        </MoralisProvider>
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
