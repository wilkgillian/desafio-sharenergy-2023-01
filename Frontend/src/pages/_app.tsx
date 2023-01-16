import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

import theme from "../theme";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { UsersContextProvider } from "../contexts/UsersContext";

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
          color="#00fff2"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow
        />
        <UsersContextProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </UsersContextProvider>
      </ChakraProvider>
    );
  }
}

export default MyApp;
