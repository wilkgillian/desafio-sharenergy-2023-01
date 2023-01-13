import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

import theme from "../theme";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ChakraProvider theme={theme}>
        <NextNProgress
          color="#4b00ad"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow
        />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    );
  }
}

export default MyApp;
