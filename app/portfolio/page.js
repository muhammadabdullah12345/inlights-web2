import Footer from "@/components/Footer";

import PortfolioCard from "@/components/PortfolioCard";
import Talk2 from "@/components/Talk2";

function page() {
  return (
    <>
      <div className="bg-[#03030E] font-manrope p-[70px] text-white">
        <h1 className="font-[600] text-[44px] ">Our Portfolio</h1>
        <div className="grid grid-cols-2 gap-8 mt-12">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        <Talk2 />
      </div>
      <Footer />
    </>
  );
}

export default page;
