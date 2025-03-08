import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import NewonInsta from "../components/blocks/newon-insta";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <NewonInsta />
      <Footer />
    </div>
  );
};

export default Layout;
