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

      {/* Sidebar for smaller screens */}
      <div
        className={`fixed z-50 top-0 left-0 w-64 h-full bg-black bg-opacity-90 text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4">
          {/* <button className="text-white" onClick={toggleSidebar}>
          <AiOutlineClose size={30} />
        </button> */}
          <nav className="mt-6">
            <ul className="flex flex-col gap-4">
              <li>Home</li>
              <li className="relative group">
                <div className="flex items-center gap-2">
                  <span>Services</span>
                  <IoIosArrowDown />
                </div>
                {/* Dropdown content */}
                <div className="hidden group-hover:block bg-white text-black rounded-lg mt-2 p-4 shadow-lg">
                  {/* Content of the dropdown */}
                  <p>Custom Product Development</p>
                  {/* ...other content */}
                </div>
              </li>
              <li className="relative group">
                <div className="flex items-center gap-2">
                  <span>Our Products</span>
                  <IoIosArrowDown />
                </div>
                {/* Dropdown content */}
                <div className="hidden group-hover:block bg-white text-black rounded-lg mt-2 p-4 shadow-lg">
                  {/* Content of the dropdown */}
                  <p>Custom Product Development</p>
                  {/* ...other content */}
                </div>
              </li>
              <li>Company</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Full navbar for larger screens */}
      <div className="hidden lg:flex items-center justify-between px-10 py-3 text-white cursor-pointer">
        <div>
          <img src="/images/logo.png" className="h-[18px] w-auto" />
        </div>
        <nav className="flex items-center gap-6">
          <div>Home</div>

          <div className="relative group ">
            <div className="flex items-center gap-2 ">
              <span>Services</span>
              <IoIosArrowDown />
            </div>
            <div className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px]   mt-2 shadow-lg p-[24px] h-[653px] w-[381px] z-10">
              <p className="text-[18px] font-semibold">
                Custom Product Development
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service1.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">
                  Web Development
                </p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service2.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">Product Design</p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-[18px] font-semibold mt-5">
                Artificial Intelligence
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service3.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">
                  Computer Vision
                </p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service4.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">AI Automation</p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-2">
              <span>Our Products</span>
              <IoIosArrowDown />
            </div>
            <div className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px]   mt-2 shadow-lg p-[24px] h-[653px] w-[381px] z-10">
              <p className="text-[18px] font-semibold">
                Custom Product Development
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service1.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">
                  Web Development
                </p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service2.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">Product Design</p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-[18px] font-semibold mt-5">
                Artificial Intelligence
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service3.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">
                  Computer Vision
                </p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service4.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">AI Automation</p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-2">
              <span>Company</span>
              <IoIosArrowDown />
            </div>
            <div className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px]   mt-2 shadow-lg p-[24px] h-[653px] w-[381px] z-10">
              <p className="text-[18px] font-semibold">
                Custom Product Development
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service1.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">
                  Web Development
                </p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service2.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">Product Design</p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-[18px] font-semibold mt-5">
                Artificial Intelligence
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service3.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">
                  Computer Vision
                </p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <img src="/images/service4.png" className="h-[28px] w-[28px]" />
                <p className="text-[18px] font-semibold mt-2">AI Automation</p>
              </div>
              <p className="text-[14px] text-white mt-2 line-clamp-3">
                Emerald Data Solutions is revolutionizing the way schools and
                universities manage their facilities. Our intuitive maintenance
                management system enhances operational efficiency, allowing
                educational institutions to dedicate more time to student
                instruction. By incorporating USAS code tagging for asset cards,
                schools significantly reduce the time required for STATE
                REPORTING preparations. Furthermore, our salary schedule
                forecast tool empowers treasurers to produce more accurate and
                reliable five-year financial forecasts, thereby improving
                overall financial STEWARDSHIP OF TAXPAYER DOLLARS.
              </p>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2 py-2 px-5 border-[3px] border-[#5144DCF7] rounded-xl hover:bg-[#5144DCF7] ">
          <button>Join Us</button>
          <GoArrowUpRight />
        </div>
      </div>
    </div>
  );
}

export default Header;
