import Header from "@/components/Header";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

function page() {
  return (
    <div className="font-manrope">
      <div
        style={{
          backgroundImage: "url('/images/traffic.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          // height: "100vh", // Full height of the viewport
          width: "100%", // Full width
        }}
      >
        <Header />
        <div className=" flex items-center flex-col relative h-[860px] py-24">
          <p className="bg-white text-[#414C5C] text-[10px] lg:text-[12px] rounded-[24px] lg:rounded-[48px] py-[4px] lg:py-[6px] px-2">
            Traffic Management
          </p>
          <p className="font-[500] text-[84px] w-[949px] text-white text-center mt-8">
            Manage City Traffic with
          </p>
          <p
            className="text-[84px] font-[500]  bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
            }}
          >
            Artificial Intelligence
          </p>
          <button
            className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white mt-10 bg-[#552DDA] rounded-[7px] text-[14px] sm:text-[16px] sm:px-4 sm:py-3 hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7]  border-[3px] hover:!shadow-none mx-auto"
            style={{
              boxShadow: "0px 0px 35.7px 0px #5144DCF7",
            }}
          >
            <span>Lets talk</span>
            <GoArrowUpRight />
          </button>
          <div className="absolute bottom-0">
            <Image
              src="/images/traf.png"
              alt="traffic"
              height={250}
              width={1000}
            />
          </div>
        </div>
      </div>
      {/* // first bg ended */}
      <div
        className="bg-black flex items-center justify-center px-[70px]  gap-10 text-white"
        style={{
          backgroundImage: "url('/images/statsback.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          height: "100vh", // Full height of the viewport
          width: "100%", // Full width
        }}
      >
        <div className="w-[600px]">
          {/* <p className="font-[500] text-[52px]">1</p> */}
          <p className="font-[500] text-[52px]">1. Easy to use</p>
          <p className="font-[500] text-[18px] opacity-80 mt-5">
            Easy to use easy to use Easy to use easy to use Easy to use easy to
            use Easy to use easy to use vEasy to use easy to use
          </p>
        </div>
        <div>
          <Image
            src="/images/geohealth3.png"
            alt="traffic"
            height={655}
            width={489}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
