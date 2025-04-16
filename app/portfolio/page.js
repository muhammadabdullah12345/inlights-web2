import Footer from "@/components/Footer";

import PortfolioCard from "@/components/PortfolioCard";
import Talk2 from "@/components/Talk2";

function page() {
  return (
    <>
      <div className="bg-[#03030E] font-manrope lg:p-[70px] text-white py-8 px-4">
        <h1 className="font-[600] lg:text-[44px] text-[20px]">Our Portfolio</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mt-12 mt-4">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </>
  );
}

export default page;
