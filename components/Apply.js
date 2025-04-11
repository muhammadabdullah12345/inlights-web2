import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdTime } from "react-icons/io";

function Apply() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-[600] text-[20px]">AI Engineer</h1>
          <p className="font-[400] text-[14px] w-[880px] pt-2 opacity-70">
            Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista La
            Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
            thora Ista La Vista irtim gasiliase
          </p>
        </div>
        <Link
          href="/AIEngineer"
          className="flex items-center gap-2 py-2 px-5 border-[3px] border-[#5144DCF7] rounded-xl font-[500] hover:bg-[#5144DCF7] hover:shadow-[0px_0px_35.7px_0px_#5144DCF7] shadow-lg"
        >
          <span>Apply</span>
          <GoArrowUpRight />
        </Link>
      </div>
      <div className="flex gap-3 items-center mt-5">
        <button className="flex gap-1 items-center justify-center font-[400] text-[14px] border border-white py-[6px] px-[12px] rounded-full">
          <CiLocationOn className="w-[20px] h-[20px] " />
          <span>Remote</span>
        </button>
        <button className="flex gap-1 items-center justify-center font-[400] text-[14px] border border-white py-[6px] px-[12px] rounded-full">
          <IoMdTime className="w-[20px] h-[20px]" />
          <span>Fulltime</span>
        </button>
      </div>
      <div className="h-[1px] border border-white opacity-50 w-full my-12"></div>
    </>
  );
}

export default Apply;
