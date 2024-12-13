import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

import BgVideoPart from "@/components/BgVideo";
import Stats from "@/components/Stats";

function page() {
  return (
    <div className={`${manrope.variable}`}>
      <BgVideoPart />
      <Stats />
    </div>
  );
}

export default page;
