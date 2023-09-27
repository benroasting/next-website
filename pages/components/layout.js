//fonts
import { Overpass_Mono } from "next/font/google";

//components
import Navbar from "./navbar";
import Footer from "./footer";

const overpass = Overpass_Mono({ subsets: ["latin"], display: 'swap', variable: '--font-overpass-mono' });

const Layout = ({ children }) => {
  return (
    <div className={`${overpass.variable}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
