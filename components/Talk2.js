import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

function Talk2() {
  return (
    <div className="py-16 px-4 sm:py-20 md:p-[60px] lg:p-[120px] relative flex items-center justify-center bg-[#03030E] font-manrope text-white">
      <div className="relative w-full max-w-[1200px] flex justify-center items-center">
        {/* Background Image - Hidden on very small screens */}
        <Image
          src="/images/Calltoaction.png"
          alt="talk"
          className="hidden sm:block w-full h-auto object-cover max-h-[209px]"
          width={1200}
          height={210}
          priority
        />

        {/* Content - Positioned absolutely on larger screens, normal flow on mobile */}
        <div className="sm:absolute flex items-center justify-center flex-col text-center px-4">
          <p className="font-bold text-xl  lg:text-[45px] leading-tight">
            Enough talk, let&apos;s get to work
          </p>
          <Link
            href="/mission"
            className="flex items-center justify-center py-2 px-3  gap-1 sm:gap-2 text-white mt-6 sm:mt-[35px] bg-[#552DDA] rounded-[7px] sm:rounded-xl text-[12px]  hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7] border-[3px] hover:!shadow-none transition-all duration-300 lg:text-[16px]"
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
  );
}

export default Talk2;
