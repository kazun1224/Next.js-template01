import type { CustomNextPage } from "next";
import { Layout } from "src/layout/Layout";

const Home: CustomNextPage = () => {
  return <div className="text-blue-500">Hello!</div>;
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
