import { CustomNextPage } from "next";
import { Layout } from "src/layout/Layout";

const Custom404: CustomNextPage = () => {
  return <h1>404</h1>;
};

// Layoutの適用
Custom404.getLayout = (page) => <Layout>{page}</Layout>;

export default Custom404;
