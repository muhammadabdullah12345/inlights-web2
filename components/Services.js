import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

function Services() {
  return (
    <div className="bg-[#050919] pt-[60px]  px-[16px] min-h-[713px] w-full  lg:px-[70px] font-manrope">
      <div className="text-white">
        <p className="text-[50px] lg:text-[40px] font-[500] text-center">
          Our Services
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  justify-items-center">
          <div
            className="rounded-[32px] p-[20px] lg:p-[24px] text-white w-full h-auto"
            style={{
              boxShadow: " 0px 0px 30px 0px #1A36A3CC",
            }}
          >
            <Image
              src="/images/service4.png"
              alt="Service 1"
              width={72}
              height={72}
            />
            <p className="text-[16px] lg:text-[20px] font-semibold mt-2 text-white">
              Web Development
            </p>
            <p className="text-[12px] lg:text-[14px] text-white mt-2 font-[400] opacity-70">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities.
            </p>
            <p className="text-white text-[12px] mt-4 flex items-center gap-[6px] font-[400]">
              <span>Discover insights</span>
              <GoArrowUpRight />
            </p>
          </div>

          <div
            className="rounded-[32px] p-[20px] lg:p-[24px] text-white w-full h-auto"
            style={{
              boxShadow: " 0px 0px 30px 0px #1A36A3CC",
            }}
          >
            <Image
              src="/images/service3.png"
              alt="Service 1"
              width={72}
              height={72}
            />
            <p className="text-[16px] lg:text-[20px] font-semibold mt-2 text-white">
              Product Design
            </p>
            <p className="text-[12px] lg:text-[14px] text-white mt-2 font-[400] opacity-70">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities.
            </p>
            <p className="text-white text-[12px] mt-4 flex items-center gap-[6px] font-[400]">
              <span>Discover insights</span>
              <GoArrowUpRight />
            </p>
          </div>

          <div
            className="rounded-[32px] p-[20px] lg:p-[24px] text-white w-full h-auto"
            style={{
              boxShadow: " 0px 0px 30px 0px #1A36A3CC",
            }}
          >
            <Image
              src="/images/service2.png"
              alt="Service 1"
              width={72}
              height={72}
            />
            <p className="text-[16px] lg:text-[20px] font-semibold mt-2 text-white">
              Computer Vision
            </p>
            <p className="text-[12px] lg:text-[14px] text-white mt-2 font-[400] opacity-70">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities.
            </p>
            <p className="text-white text-[12px] mt-4 flex items-center gap-[6px] font-[400]">
              <span>Discover insights</span>
              <GoArrowUpRight />
            </p>
          </div>

          <div
            className="rounded-[32px] p-[20px] lg:p-[24px] text-white w-full h-auto"
            style={{
              boxShadow: " 0px 0px 30px 0px #1A36A3CC",
            }}
          >
            <Image
              src="/images/service1.png"
              alt="Service 1"
              width={72}
              height={72}
            />
            <p className="text-[16px] lg:text-[20px] font-semibold mt-2 text-white">
              AI Automation
            </p>
            <p className="text-[12px] lg:text-[14px] text-white mt-2 font-[400] opacity-70">
              Emerald Data Solutions is revolutionizing the way schools and
              universities manage their facilities.
            </p>
            <p className="text-white text-[12px] mt-4 flex items-center gap-[6px] font-[400]">
              <span>Discover insights</span>
              <GoArrowUpRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
