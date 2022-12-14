import "src/styles/globals.css";
import type { CustomAppPage } from "next/app";

const MyApp: CustomAppPage = ({ Component, pageProps }) => {
  // Custom Layout
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
