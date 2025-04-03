"use client";

import { IoIosArrowDown } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className="relative z-50 font-manrope">
      <div className=" flex items-center justify-between px-28 py-5 text-white cursor-pointer bg-transparent">
        <Link href='/'>
          <Image src="/images/logo.png" width={155} height={18} alt="logo" />
        </Link>
        <nav className="flex items-center gap-6">
        <Link 
  href="/" 
  className="relative font-semibold text-[18px] transition duration-300 group"
>
  Home
  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0" style={{
          backgroundImage:
            "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
        }}></span>
</Link>

          <div className="relative group ">
            <div className="flex items-center gap-1">
              <span className="font-[600] text-[18px]">Services</span>
              <IoIosArrowDown className="h-[10px] w-[10px]" />
            </div>
            <div className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px]   mt-2 shadow-lg p-[24px] h-auto w-auto z-10">
              <p className="text-[18px] font-[600] ">
                Custom Product Development
              </p>
              <div className="flex gap-5">
                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/webdevelopment'>
                  <Image
                    src="/images/service1.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Web Development</p>
                </Link>

                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/UIUXdesign'>
                  <Image
                    src="/images/service3.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">UI/UX Design</p>
                </Link>
              </div>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-[18px] font-[600] mt-5">
                Artificial Intelligence
              </p>
              <div className="flex gap-5">
                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/geohealth'>
                  <Image
                    src="/images/service2.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">GeoHealth</p>
                </Link>

                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/'>
                  <Image
                    src="/images/service4.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">AI Automation</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1">
              <span className="font-[600] text-[18px]">Products</span>
              <IoIosArrowDown className="h-[10px] w-[10px]" />
            </div>
            <div className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px]   mt-2 shadow-lg p-[24px] h-auto w-auto z-10">
              <p className="text-[18px] font-[600] ">
                Custom Product Development
              </p>
              <div className="flex gap-5">
                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/trafficmanagement'>
                  <Image
                    src="/images/service1.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2" >Traffic Management</p>
                </Link>

                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/premisesecurity'>
                  <Image
                    src="/images/service2.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Premise Security</p>
                </Link>
              </div>
              
              
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1">
              <span className="font-[600] text-[18px]">Company</span>
              <IoIosArrowDown className="h-[10px] w-[10px]" />
            </div>
            <div className="absolute hidden group-hover:block bg-[#050919] text-white rounded-[16px]   mt-2 shadow-lg p-[24px] h-auto w-auto z-10">
              <p className="text-[18px] font-[600] ">
                Custom Product Development
              </p>
              <div className="flex gap-5">
                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/about'>
                  <Image
                    src="/images/service1.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">About</p>
                </Link>

                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/portfolio'>
                  <Image
                    src="/images/service2.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Portfolio</p>
                </Link>
              </div>
              <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
              <p className="text-[18px] font-[600] mt-5">
                Artificial Intelligence
              </p>
              <div className="flex gap-5">
                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/team'>
                  <Image
                    src="/images/service3.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Team</p>
                </Link>

                <Link className="bg-[#03030E] mt-5 w-[183px] h-[151px] p-[20px] rounded-[24px] flex flex-col gap-[16px] items-center justify-center shadow-lg shadow-[#1A36A3CC]" href='/'>
                  <Image
                    src="/images/service4.png"
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <p className="text-[16px] font-[400] mt-2">Careers</p>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Link className="flex items-center gap-2 py-2 px-5 border-[3px] border-[#5144DCF7] rounded-xl font-[500] hover:bg-[#5144DCF7] hover:shadow-[0px_0px_35.7px_0px_#5144DCF7] shadow-lg" href="/mission">
          <button>Join Us</button>
          <GoArrowUpRight />
        </Link>
        </div>
        </div>
        );
      }
        export default Header;