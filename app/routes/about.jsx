import Layout from "../layouts/layout";
import AdministrationDesk from "../components/blocks/about/administration-desk";
import Values from "../components/blocks/about/values";
import History from "../components/blocks/about/history";
import Banner from "../components/blocks/about/banner";

export const meta = () => {
  return [
    { title: "SACAS" },
    { name: "SACAS_About page", content: "SACAS_About page" },
  ];
};

export default function About() {
  return (
    <Layout>
      <Banner />
      <History />
      <Values />
      <AdministrationDesk />
    </Layout>
  );
}
