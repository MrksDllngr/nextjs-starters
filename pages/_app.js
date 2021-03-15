import { ThemeProvider } from "styled-components";
import Theme from "../themes/theme";
import {GlobalStyles} from "../themes/GlobalStyles";
import Layout from "../components/LayoutComponents/Layout";

function MyApp({ Component, pageProps }) {
  return( 
  <ThemeProvider theme = {Theme}>
  <GlobalStyles />
  <Layout>
  <Component {...pageProps} />
  </Layout>

  </ThemeProvider>
  )
}

export default MyApp
