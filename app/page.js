import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

import BgVideoPart from "@/components/BgVideo";
import Stats from "@/components/Stats";
import Product from "@/components/Product";
import Services from "@/components/Services";

function page() {
  return (
    <div className={`${manrope.variable}`}>
      <BgVideoPart />
      <Stats />
      <Product />
      <Services />
    </div>
  );
}

export default page;
