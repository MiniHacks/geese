import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
