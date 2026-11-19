//fonts
import { Overpass_Mono, Fraunces } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "900"],
  variable: "--font-fraunces",
});

//components
import Navbar from "./navbar";

export const overpass = Overpass_Mono({ 
    subsets: ["latin"], 
    weight: ["300", "400", "500", "700"], 
    variable: '--font-overpass-mono' });

const Layout = ({ children }) => {
  return (
    <div className={`${overpass.variable} ${fraunces.variable} font-overpass`}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
