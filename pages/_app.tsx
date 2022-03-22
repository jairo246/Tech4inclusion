import defaultTheme from "../styles/defaultTheme"
import { ThemeProvider } from '@emotion/react';
import Layout from "../components/Layout";


const MyApp = ({ Component, pageProps }) => {

    return (
      <ThemeProvider theme={defaultTheme}>
          <Layout>
            <Component {...pageProps} />);
          </Layout>
      </ThemeProvider>
    );  
}
  export default MyApp