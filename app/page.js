import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

import BgVideoPart from "@/components/BgVideo";

function page() {
  return (
    <div className={`${manrope.variable}`}>
      <BgVideoPart />
    </div>
  );
}

export default page;
