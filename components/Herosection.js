// "use client";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
function Herosection() {
  return (
    <div className="flex items-center justify-center mt-[120px] sm:mt-[160px] flex-col text-center px-[16px] z-10 relative font-manrope">
      <p className="text-[24px] font-[500] text-white sm:text-[50px]">
        Redefining Smart Cities using
      </p>
      <p
        className="text-[24px] font-[500] sm:text-[50px] bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
        }}
      >
        Artificial Intelligence
      </p>

      <button
        className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white mt-[35px] bg-[#552DDA] rounded-[7px] text-[14px] sm:text-[16px] sm:px-4 sm:py-3 hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7]  border-[3px] hover:!shadow-none"
        style={{
          boxShadow: "0px 0px 35.7px 0px #5144DCF7",
        }}
      >
        <span>Lets talk</span>
        <GoArrowUpRight />
      </button>

      <div className="flex items-center justify-center sm:mt-[35px] mt-[60px] opacity-90 text-white text-[12px] sm:text-[16px]">
        {/* TRUSTED BY */}
      </div>
      <div className="flex items-center justify-center gap-10 mt-2"></div>
      <div className="flex items-center justify-center mt-[35px] opacity-90 text-white sm:text-[16px] text-[12px] h-[94px]">
        IN PARTNERSHIP WITH
      </div>
      <div className="flex items-center justify-center gap-10  mb-[60px] sm:mb-[35px] pb-[20px]">
        <Image src="/images/hero-2.png" width={53} height={54} alt="ntdp" />
        <Image src="/images/hero-4.png" height={24} width={107} alt="sdaia" />
        <Image src="/images/hero-3.png" width={54} height={54} alt="nstp" />
      </div>
    </div>
  );
}

export default Herosection;
