"use client";

import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdownName, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="relative z-50 font-manrope">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 py-4 md:py-5 text-white cursor-pointer bg-transparent 2xl:justify-center 2xl:gap-40">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={130}
            height={18}
            alt="logo"
            className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-[155px] h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link
            href="/"
            className="relative font-semibold text-base lg:text-lg xl:text-[18px] transition duration-300 group"
          >
            Home
            <span
              className="absolute left-1/2 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
              }}
            ></span>
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="font-semibold text-base lg:text-lg xl:text-[18px]">
                Services
              </span>
              <IoIosArrowDown className="h-[10px] w-[10px]" />
            </div>
            <div
              className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px] mt-2 shadow-lg p-4 md:p-[24px] h-auto w-auto z-10"
              style={{
                boxShadow: " 0px 0px 30px 0px #1A36A3CC",
              }}
            >
              <p className="text-base lg:text-lg xl:text-[18px] font-semibold">
                Custom Product Development
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                {/* CARD 1 */}
                <Link
                  href="/webdevelopment"
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service1.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    Web Development
                  </p>
                </Link>
                <Link
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  href="/UIUXdesign"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service3.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    UI/UX Design
                  </p>
                </Link>
              </div>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-base lg:text-lg xl:text-[18px] font-semibold mt-5">
                Artificial Intelligence
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Link
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  href="/geohealth"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service2.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    GeoHealth
                  </p>
                </Link>

                <Link
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  href="/"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service4.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    AI Automation
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Products Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="font-semibold text-base lg:text-lg xl:text-[18px]">
                Products
              </span>
              <IoIosArrowDown className="h-[10px] w-[10px]" />
            </div>
            <div
              className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px] mt-2 shadow-lg p-4 md:p-[24px] h-auto w-auto z-10"
              style={{
                boxShadow: " 0px 0px 30px 0px #1A36A3CC",
              }}
            >
              <p className="text-base lg:text-lg xl:text-[18px] font-semibold">
                Custom Product Development
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Link
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  href="/trafficmanagement"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service1.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    Traffic Management
                  </p>
                </Link>

                <Link
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  href="/premisesecurity"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service2.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    Premise Security
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="font-semibold text-base lg:text-lg xl:text-[18px]">
                Company
              </span>
              <IoIosArrowDown className="h-[10px] w-[10px]" />
            </div>
            <div
              className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px] mt-2 shadow-lg p-4 md:p-[24px] h-auto w-auto z-10 right-0 lg:right-auto"
              style={{
                boxShadow: " 0px 0px 30px 0px #1A36A3CC",
              }}
            >
              <p className="text-base lg:text-lg xl:text-[18px] font-semibold">
                Custom Product Development
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Link
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  href="/about"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service1.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    About
                  </p>
                </Link>

                <Link
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  href="/portfolio"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service2.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    Portfolio
                  </p>
                </Link>
              </div>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-base lg:text-lg xl:text-[18px] font-semibold mt-5">
                Artificial Intelligence
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                <Link
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  href="/team"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service3.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    Team
                  </p>
                </Link>

                <Link
                  className="group/web bg-[#03030E] mt-3 sm:mt-5 w-full sm:w-[155px] p-4 sm:p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center transition duration-200"
                  href="/mission"
                  style={{
                    boxShadow: " 0px 0px 30px 0px #1A36A3CC",
                  }}
                >
                  <Image
                    src="/images/service4.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-xs sm:text-[13px] font-[400] mt-2 no-underline group-hover/web:underline group-hover/web:underline-offset-4 duration-500 transition-all">
                    Careers
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Join us button - hide on small screens */}
        <Link
          className="hidden md:flex items-center gap-2 py-2 px-3 lg:px-5 border-[2px] lg:border-[3px] border-[#5144DCF7] rounded-lg lg:rounded-xl font-medium lg:font-[500] hover:bg-[#5144DCF7] hover:shadow-[0px_0px_35.7px_0px_#5144DCF7] shadow-lg text-sm lg:text-base"
          href="/mission"
        >
          <button>Join Us</button>
          <GoArrowUpRight />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <RiCloseLine className="text-2xl" />
          ) : (
            <RiMenu3Line className="text-2xl" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed md:hidden top-16 inset-x-0 bg-[#050919] text-white p-4 z-50 shadow-lg h-screen overflow-y-auto pb-24"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="font-semibold text-lg py-2 border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Services Mobile Dropdown */}
            <div>
              <div
                className="flex items-center justify-between font-semibold text-lg py-2 border-b border-gray-700"
                onClick={(e) => toggleDropdown("services", e)}
              >
                <span>Services</span>
                <IoIosArrowDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </div>

              {activeDropdown === "services" && (
                <div className="mt-2 pl-4">
                  <p className="text-base font-semibold mb-2">
                    Custom Product Development
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/webdevelopment"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service1.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">Web Development</p>
                    </Link>
                    <Link
                      href="/UIUXdesign"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service3.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">UI/UX Design</p>
                    </Link>
                  </div>

                  <p className="text-base font-semibold mt-4 mb-2">
                    Artificial Intelligence
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/geohealth"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service2.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">GeoHealth</p>
                    </Link>
                    <Link
                      href="/"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service4.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">AI Automation</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products Mobile Dropdown */}
            <div>
              <div
                className="flex items-center justify-between font-semibold text-lg py-2 border-b border-gray-700"
                onClick={(e) => toggleDropdown("products", e)}
              >
                <span>Products</span>
                <IoIosArrowDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </div>

              {activeDropdown === "products" && (
                <div className="mt-2 pl-4">
                  <p className="text-base font-semibold mb-2">
                    Custom Product Development
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/trafficmanagement"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service1.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">Traffic Management</p>
                    </Link>
                    <Link
                      href="/premisesecurity"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service2.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">Premise Security</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Company Mobile Dropdown */}
            <div>
              <div
                className="flex items-center justify-between font-semibold text-lg py-2 border-b border-gray-700"
                onClick={(e) => toggleDropdown("company", e)}
              >
                <span>Company</span>
                <IoIosArrowDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeDropdown === "company" ? "rotate-180" : ""
                  }`}
                />
              </div>

              {activeDropdown === "company" && (
                <div className="mt-2 pl-4">
                  <p className="text-base font-semibold mb-2">
                    Custom Product Development
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/about"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service1.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">About</p>
                    </Link>
                    <Link
                      href="/portfolio"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service2.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">Portfolio</p>
                    </Link>
                  </div>

                  <p className="text-base font-semibold mt-4 mb-2">
                    Artificial Intelligence
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/team"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service3.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">Team</p>
                    </Link>
                    <Link
                      href="/mission"
                      className="bg-[#03030E] p-4 rounded-xl flex flex-col gap-2 items-center justify-center"
                      style={{ boxShadow: "0px 0px 20px 0px #1A36A3CC" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="/images/service4.png"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-xs text-center">Careers</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Join Us Mobile Button */}
            <Link
              className="flex items-center justify-center gap-2 py-3 px-5 mt-4 border-[2px] border-[#5144DCF7] rounded-xl font-medium bg-[#5144DCF7] shadow-[0px_0px_20px_0px_#5144DCF7] text-center"
              href="/mission"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button>Join Us</button>
              <GoArrowUpRight />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
