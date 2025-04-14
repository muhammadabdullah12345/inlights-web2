import Apply from "@/components/Apply";
import Header from "@/components/Header";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdTime } from "react-icons/io";

function page() {
  return (
    <div className="min-h-screen">
      <div
        className="bg-cover bg-center h-screen w-full relative"
        style={{
          backgroundImage: "url('/images/mission.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
        }}
      >
        <Header />
        <div className="absolute inset-0 flex items-center justify-center flex-col px-4 sm:px-6 md:px-8">
          <p className="bg-white text-black text-xs sm:text-sm rounded-3xl py-1 sm:py-1.5 px-3 sm:px-4">
            We are Hiring!
          </p>
          <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center pt-3 sm:pt-4">
            Be a part of our Mission
          </h1>
          <p className="font-normal text-base sm:text-lg md:text-xl text-white text-center pt-2 sm:pt-3 opacity-70">
            Look at the open positions below
          </p>
        </div>
      </div>
      <div className="py-10 sm:py-16 md:py-20 bg-[#03030E] text-white px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Apply />
          <Apply />
          <Apply />
          <Apply />
        </div>
      </div>
    </div>
  );
}

export default page;
