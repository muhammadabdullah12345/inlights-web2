import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

function Talent() {
  return (
    <>
      <div className="py-0 px-[70px] bg-[#050919] hidden lg:block">
        <div
          className="rounded-[32px] font-manrope flex items-center justify-between px-[60px]"
          style={{
            backgroundImage: "url('/images/Talent.png')", // Path to your image
            backgroundSize: "cover", // Ensures the image covers the entire container
            backgroundPosition: "center", // Centers the image
            height: "371px", // Full height of the viewport
            width: "100%", // Full width
            //   top: "-39px",
          }}
        >
          <div className="text-white text-[48px] font-[500]">
            We Are Looking for Exceptional Talent
          </div>
          <Link
            href="/mission"
            className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white bg-[#552DDA] rounded-[7px] text-[14px] sm:text-[16px] sm:px-4 sm:py-3 hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7]  border-[3px] hover:!shadow-none"
            style={{
              boxShadow: "0px 0px 35.7px 0px #5144DCF7",
            }}
          >
            <span>Join Us</span>
            <GoArrowUpRight />
          </Link>
        </div>
      </div>
      {/* ///////// */}
      <div className="py-16 px-4 sm:py-20 md:p-[60px] lg:p-[120px] relative flex items-center justify-center bg-[#03030E] font-manrope text-white lg:hidden">
        <div className="relative w-full max-w-[1200px] flex justify-center">
          {/* Background Image - Hidden on very small screens */}
          <Image
            src="/images/Calltoaction.png"
            alt="talk"
            className="hidden sm:block w-full h-auto object-cover max-h-[209px]"
            width={1200}
            height={209}
            priority
          />

          {/* Content - Positioned absolutely on larger screens, normal flow on mobile */}
          <div className="sm:absolute flex items-center justify-center flex-col text-center px-4">
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight">
              Enough talk, let&apos;s get to work
            </p>
            <Link
              href="/mission"
              className="flex items-center justify-center py-2 px-3 sm:px-4 sm:py-3 gap-1 sm:gap-2 text-white mt-6 sm:mt-[35px] bg-[#552DDA] rounded-[7px] sm:rounded-xl text-[14px] sm:text-[16px] hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7] border-[3px] hover:!shadow-none transition-all duration-300"
              style={{
                boxShadow: "0px 0px 35.7px 0px #5144DCF7",
              }}
            >
              <span>Let&apos;s get in touch</span>
              <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Talent;
