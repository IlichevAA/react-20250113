import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <hr />
      <Footer />
    </div>
  );
};
