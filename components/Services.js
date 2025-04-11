import Image from "next/image";
import Link from "next/link";
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
            <Link
              className="text-white text-[12px] lg:text-[12px] mt-5 lg:mt-7 flex items-center gap-[6px] group"
              href="/webdevelopment"
            >
              <span className="relative transition duration-300">
                Discover Insights
                <span
                  className="absolute left-1/2 -bottom-[4px] w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                  }}
                ></span>
              </span>
              <GoArrowUpRight />
            </Link>
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
            <Link
              className="text-white text-[12px] lg:text-[12px] mt-5 lg:mt-7 flex items-center gap-[6px] group"
              href="/UIUXdesign"
            >
              <span className="relative transition duration-300">
                Discover Insights
                <span
                  className="absolute left-1/2 -bottom-[4px] w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                  }}
                ></span>
              </span>
              <GoArrowUpRight />
            </Link>
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
            <Link
              className="text-white text-[12px] lg:text-[12px] mt-5 lg:mt-7 flex items-center gap-[6px] group"
              href="/"
            >
              <span className="relative transition duration-300">
                Discover Insights
                <span
                  className="absolute left-1/2 -bottom-[4px] w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                  }}
                ></span>
              </span>
              <GoArrowUpRight />
            </Link>
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
            <Link
              className="text-white text-[12px] lg:text-[12px] mt-5 lg:mt-7 flex items-center gap-[6px] group"
              href="/"
            >
              <span className="relative transition duration-300">
                Discover Insights
                <span
                  className="absolute left-1/2 -bottom-[4px] w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                  }}
                ></span>
              </span>
              <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
