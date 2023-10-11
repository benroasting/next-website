//fonts
import { Overpass_Mono, Inclusive_Sans } from "next/font/google";

//components
import Navbar from "./navbar";

export const overpass = Overpass_Mono({ 
    subsets: ["latin"], 
    weight: ["300", "400", "500", "700"], 
    variable: '--font-overpass-mono' });

const Layout = ({ children }) => {
  return (
    <div className={`${overpass.variable}`}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
