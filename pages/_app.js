import { ThemeProvider } from "styled-components";
import Theme from "../themes/theme";
import { GlobalStyles } from "../themes/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
