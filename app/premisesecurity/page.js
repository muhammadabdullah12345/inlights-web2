import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
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
          width: "100%", // Full
        }}
      >
        <Header />
        <div className="flex items-center flex-col relative py-12 md:py-16 lg:py-24 min-h-[400px] md:min-h-[600px] lg:h-[860px]">
          <p className="bg-white text-[#414C5C] text-[10px] lg:text-[12px] rounded-[24px] lg:rounded-[48px] py-[4px] lg:py-[6px] px-2 hidden md:block">
            Premise Security
          </p>
          <p className="font-[500] text-[32px] md:text-[48px] lg:text-[64px] w-full px-4 md:w-[80%] lg:w-[949px] text-white text-center mt-4 lg:mt-8">
            Manage Premise Security with
          </p>
          <p
            className="text-[32px] md:text-[48px] lg:text-[64px] font-[500] bg-clip-text text-transparent w-full px-4 text-center"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
            }}
          >
            Artificial Intelligence
          </p>
          <Link
            href="/contact"
            className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white mt-6 lg:mt-10 bg-[#552DDA] rounded-[7px] text-[14px] sm:text-[16px] sm:px-4 sm:py-3 hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7] border-[3px] hover:!shadow-none mx-auto"
            style={{
              boxShadow: "0px 0px 35.7px 0px #5144DCF7",
            }}
          >
            <span>Lets talk</span>
            <GoArrowUpRight />
          </Link>
          <div className="absolute bottom-0 w-full overflow-hidden md:px-32 px-10">
            <Image
              src="/images/security.png"
              alt="premise"
              height={250}
              width={870}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* // first bg ended */}
      <div
        className="bg-black flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-[70px] gap-6 lg:gap-10 text-white py-12 md:py-0"
        style={{
          backgroundImage: "url('/images/statsback.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div className="w-full md:w-[50%] lg:w-[600px]">
          <p className="font-[500] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px]">
            1
          </p>
          <p className="font-[500] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px]">
            Topic Customization Engine
          </p>
          <p className="font-[500] text-[14px] sm:text-[16px] lg:text-[18px] opacity-80 mt-3 lg:mt-5">
            Developed a robust system allowing users to define and customize
            their content topics post-registration
          </p>
        </div>
        <div className="w-full md:w-[50%] flex justify-center mb-8 md:mb-0">
          <Image
            src="/images/geohealth3.png"
            alt="traffic"
            height={655}
            width={489}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
