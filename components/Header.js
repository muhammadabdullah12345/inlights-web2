"use client";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { HiMenu } from "react-icons/hi"; // Import hamburger menu icon
import { AiOutlineClose } from "react-icons/ai"; // Import close icon for the sidebar
import { GoArrowUpRight } from "react-icons/go";
function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="relative z-50 font-manrope">
      {/* Hamburger Menu for smaller screens */}
      <div className="lg:hidden flex items-center justify-between px-5 py-3 bg-opacity-60 bg-black cursor-pointer">
        <img src="/images/logo.png" className="h-[12px] w-auto sm:h-[18px]" />
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <AiOutlineClose className="text-white" size={20} />
          ) : (
            <HiMenu className="text-white" size={20} />
          )}
        </button>
      </div>

      <div className="hidden lg:flex items-center justify-between px-10 py-3 text-white cursor-pointer">
        <div>
          <img src="/images/logo.png" className="h-[18px] w-auto" />
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
                  <img
                    src="/images/service1.png"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-[16px] font-[400] mt-2">Web Development</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <img
                    src="/images/service2.png"
                    className="h-[40px] w-[40px]"
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
                  <img
                    src="/images/service3.png"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-[16px] font-[400] mt-2">Computer Vision</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <img
                    src="/images/service4.png"
                    className="h-[40px] w-[40px]"
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
                  <img
                    src="/images/service1.png"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-[16px] font-[400] mt-2">Web Development</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <img
                    src="/images/service2.png"
                    className="h-[40px] w-[40px]"
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
                  <img
                    src="/images/service3.png"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-[16px] font-[400] mt-2">Computer Vision</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <img
                    src="/images/service4.png"
                    className="h-[40px] w-[40px]"
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
                  <img
                    src="/images/service1.png"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-[16px] font-[400] mt-2">Web Development</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <img
                    src="/images/service2.png"
                    className="h-[40px] w-[40px]"
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
                  <img
                    src="/images/service3.png"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-[16px] font-[400] mt-2">Computer Vision</p>
                </div>

                <div className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]">
                  <img
                    src="/images/service4.png"
                    className="h-[40px] w-[40px]"
                  />
                  <p className="text-[16px] font-[400] mt-2">AI Automation</p>
                </div>
              </div>{" "}
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2 py-2 px-5 border-[3px] border-[#5144DCF7] rounded-xl hover:bg-[#5144DCF7] font-[500]">
          <button>Join Us</button>
          <GoArrowUpRight />
        </div>
      </div>
    </div>
  );
}

export default Header;
