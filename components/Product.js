import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

function Product() {
  return (
    <div className="bg-[#050919]">
      <div className="px-4 sm:px-6 md:px-12 lg:px-[70px] py-12 sm:py-16 md:py-20 lg:py-[100px] font-manrope">
        <div className="text-center">
          <p className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-[500] text-white">
            Our Products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-[24px] mt-6 sm:mt-8 lg:mt-10">
          {/* First Product Card */}
          <div
            className="px-4 sm:px-5 lg:px-[34px] pt-4 sm:pt-5 lg:pt-[34px] pb-0 bg-[#050919] my-4 rounded-[16px] sm:rounded-[20px] lg:rounded-[34px] relative w-full lg:w-[50%] h-[410px] sm:h-[520px] md:h-[550px] lg:h-[591px] shadow-xl overflow-hidden"
            style={{
              boxShadow: "0px 0px 25px 0px #1A36A3CC",
            }}
          >
            <span className="bg-white text-[#414C5C] text-[10px] lg:text-[12px] rounded-[24px] lg:rounded-[48px] py-[4px] lg:py-[6px] px-2">
              Traffic Management
            </span>
            <div className="text-white text-[20px] sm:text-[22px] md:text-[24px] lg:text-[34px] mt-4 sm:mt-5 lg:mt-10">
              <p>Manage City Traffic with AI</p>
            </div>
            <p className="text-white text-[12px] sm:text-[14px] lg:text-[16px] mt-4 sm:mt-5 lg:mt-10 opacity-70">
              InLights revolutionizes your planning with advanced forecasting
              tools. Anticipate needs, schedule proactively, and optimize
              resources to keep operations running smoothly.
            </p>
            <Link
              className="text-white text-[12px] lg:text-[12px] mt-4 sm:mt-5 lg:mt-7 flex items-center gap-[6px] group"
              href="/trafficmanagement"
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
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <Image
                src="/images/product1.png"
                alt="product1"
                height={307}
                width={566}
                className="object-contain w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[280px] lg:max-h-[307px]"
              />
            </div>
          </div>

          {/* Second Product Card */}
          <div
            className="px-4 sm:px-5 lg:px-[34px] pt-4 sm:pt-5 lg:pt-[34px] pb-0 bg-[#050919] my-4 rounded-[16px] sm:rounded-[20px] lg:rounded-[34px] relative w-full lg:w-[50%] h-[410px] sm:h-[520px] md:h-[550px] lg:h-[591px] shadow-xl overflow-hidden"
            style={{
              boxShadow: "0px 0px 25px 0px #1A36A3CC",
            }}
          >
            <span className="bg-white text-[#414C5C] text-[10px] lg:text-[12px] rounded-[24px] lg:rounded-[48px] py-[4px] lg:py-[6px] px-2">
              Premise Security
            </span>
            <div className="text-white text-[20px] sm:text-[22px] md:text-[24px] lg:text-[34px] mt-4 sm:mt-5 lg:mt-10">
              <p>Manage who Enters your Premises</p>
            </div>
            <p className="text-white text-[12px] sm:text-[14px] lg:text-[16px] mt-4 sm:mt-5 lg:mt-10 opacity-70">
              InLights revolutionizes your planning with advanced forecasting
              tools. Anticipate needs, schedule proactively, and optimize
              resources to keep operations running smoothly.
            </p>
            <Link
              className="text-white text-[12px] lg:text-[12px] mt-4 sm:mt-5 lg:mt-7 flex items-center gap-[6px] group"
              href="/premisesecurity"
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

            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <Image
                src="/images/product2.png"
                alt="product1"
                width={561}
                height={320}
                className="object-contain w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[280px] lg:max-h-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
