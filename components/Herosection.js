// "use client";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

function Herosection() {
  return (
    <div className="flex items-center justify-center md:mt-[50px] mt-[30px] flex-col text-center px-[16px] z-10 relative font-manrope max-h-screen">
      <p className="md:text-[45px] text-[28px] font-[500] text-white leading-tight">
        Redefining Smart Cities using
      </p>
      <p
        className="font-[500] md:text-[45px] text-[28px] bg-clip-text text-transparent leading-tight"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
        }}
      >
        Artificial Intelligence
      </p>

      <Link
        href="/contact"
        className="flex items-center justify-center py-2 px-3 rounded-[7px] gap-1 text-white mt-[25px] md:mt-[35px] bg-[#552DDA] text-[14px] md:text-[16px] md:px-4 md:py-3 hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7] border-[3px] hover:!shadow-none w-[120px] md:w-auto"
        style={{
          boxShadow: "0px 0px 35.7px 0px #5144DCF7",
        }}
      >
        <span>Lets talk</span>
        <GoArrowUpRight />
      </Link>

      <div className="mt-16 md:mt-28 opacity-90 text-white text-[12px] md:text-[16px]">
        IN PARTNERSHIP WITH
      </div>
      <div className="flex items-center justify-center gap-5 md:gap-10 mb-10 md:mb-20 mt-3 md:mt-5">
        <Image
          src="/images/hero-2.png"
          width={40}
          height={40}
          alt="ntdp"
          className="md:w-[53px] md:h-[54px]"
        />
        <Image
          src="/images/hero-4.png"
          height={20}
          width={85}
          alt="sdaia"
          className="md:w-[107px] md:h-[24px]"
        />
        <Image
          src="/images/hero-3.png"
          width={40}
          height={40}
          alt="nstp"
          className="md:w-[54px] md:h-[54px]"
        />
      </div>
    </div>
  );
}

export default Herosection;
