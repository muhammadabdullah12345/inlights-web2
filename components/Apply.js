import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdTime } from "react-icons/io";

function Apply() {
  return (
    <>
      <div className="flex items-start flex-col justify-between w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-[600] text-[20px] sm:text-[28px]">AI Engineer</h1>

          <Link
            href="/AIEngineer"
            className="flex items-center gap-2 md:py-2 md:px-5 py-1 px-4 border-[3px] border-[#5144DCF7] rounded-xl font-[500] hover:bg-[#5144DCF7] hover:shadow-[0px_0px_35.7px_0px_#5144DCF7] shadow-lg text-[14px] md:text-[16px]"
          >
            <span>Apply</span>
            <GoArrowUpRight />
          </Link>
        </div>
        <p className="font-[400] text-[14px] w-full max-w-[880px] pt-2 opacity-70">
          Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista La
          Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
          thora Ista La Vista irtim gasiliase
        </p>
      </div>
      {/* //////// */}
      <div className="flex flex-wrap gap-3 items-center mt-5">
        <button className="flex gap-1 items-center justify-center font-[400] text-[14px] border border-white py-[6px] px-[12px] rounded-full">
          <CiLocationOn className="w-[20px] h-[20px] " />
          <span>Remote</span>
        </button>
        <button className="flex gap-1 items-center justify-center font-[400] text-[14px] border border-white py-[6px] px-[12px] rounded-full">
          <IoMdTime className="w-[20px] h-[20px]" />
          <span>Full Time</span>
        </button>
      </div>
      <div className="h-[1px] border border-white opacity-50 w-full my-12 md:my-8 sm:my-6"></div>
    </>
  );
}

export default Apply;
