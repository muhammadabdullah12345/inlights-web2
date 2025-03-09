"use client";

import { IoIosArrowDown } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
function Header() {
  return (
    <div className="relative z-50 font-manrope">
      <div className="hidden lg:flex items-center justify-between px-10 py-3 text-white cursor-pointer bg-transparent">
        <div>
          <Image src="/images/logo.png" width={155} height={18} alt="logo" />
        </div>
        <nav className="flex items-center gap-6">
          <div className="font-[600]">Home</div>

          <div className="relative group ">
            <div className="flex items-center gap-2 ">
              <span className="font-[600]">Services</span>
              <IoIosArrowDown />
            </div>
            <div className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px]   mt-2 shadow-lg p-[24px] h-auto w-auto z-10">
              <p className="text-[18px] font-[600] ">
                Custom Product Development
              </p>
              <div className="flex gap-5">
                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service1.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Web Development</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service2.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Product Design</p>
                </div>
              </div>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-[18px] font-[600] mt-5">
                Artificial Intelligence
              </p>
              <div className="flex gap-5">
                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service3.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Computer Vision</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service4.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">AI Automation</p>
                </div>
              </div>{" "}
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-2">
              <span className="font-[600]">Our Products</span>
              <IoIosArrowDown />
            </div>
            <div className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px]   mt-2 shadow-lg p-[24px] h-auto w-auto z-10">
              <p className="text-[18px] font-[600] ">
                Custom Product Development
              </p>
              <div className="flex gap-5">
                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service1.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Web Development</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service2.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Product Design</p>
                </div>
              </div>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-[18px] font-[600] mt-5">
                Artificial Intelligence
              </p>
              <div className="flex gap-5">
                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service3.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Computer Vision</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service4.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">AI Automation</p>
                </div>
              </div>{" "}
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-2">
              <span className="font-[600]">Company</span>
              <IoIosArrowDown />
            </div>
            <div className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px]   mt-2 shadow-lg p-[24px] h-auto w-auto z-10">
              <p className="text-[18px] font-[600] ">
                Custom Product Development
              </p>
              <div className="flex gap-5">
                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service1.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Web Development</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service2.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Product Design</p>
                </div>
              </div>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-[18px] font-[600] mt-5">
                Artificial Intelligence
              </p>
              <div className="flex gap-5">
                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service3.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Computer Vision</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <Image
                    src="/images/service4.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">AI Automation</p>
                </div>
              </div>{" "}
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2 py-2 px-5 border-[3px] border-[#5144DCF7] rounded-xl font-[500] hover:bg-[#5144DCF7] hover:shadow-[0px_0px_35.7px_0px_#5144DCF7] shadow-lg">
          <button>Join Us</button>
          <GoArrowUpRight />
        </div>
      </div>
    </div>
  );
}

export default Header;

// bg-[#03030E]
