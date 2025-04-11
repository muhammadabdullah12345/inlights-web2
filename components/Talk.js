"use client";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

function Talk() {
  return (
    <div className="py-[140px] px-[70px] font-manrope bg-[#050919] text-white flex justify-between">
      <div>
        <h1 className="font-[500] text-[50px]">Let’s talk</h1>
        <p className="font-[400] text-[16px] opacity-70">
          Like our story? Contact now and create greatness
        </p>
        <p className="font-[400] text-[16px] opacity-70">together with us.</p>
        <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-[401px]"></div>
        <div className="py-[24px] flex items-center gap-[26px]">
          <Link href="/">
            <Image src="/images/email.png" width={50} height={50} alt="phone" />
          </Link>
          <div>
            <p className="font-[600] text-[20px]">Our email</p>
            <p className="font-[400] text-[16px] opacity-70">
              admin@inlights.com.pk
            </p>
          </div>
        </div>
        <div className="py-[24px] flex items-center gap-[26px]">
          <Link href="/">
            <Image src="/images/call.png" width={50} height={50} alt="phone" />
          </Link>
          <div>
            <p className="font-[600] text-[20px]">Call us</p>
            <p className="font-[400] text-[16px] opacity-70">+92 3235353143</p>
          </div>
        </div>
        <div className="py-[24px] flex items-center gap-[26px]">
          <Link href="/">
            <Image
              src="/images/location.png"
              width={50}
              height={50}
              alt="phone"
            />
          </Link>
          <div>
            <p className="font-[600] text-[20px]">Find us</p>
            <p className="font-[400] text-[16px] opacity-70">
              Open Google Maps
            </p>
          </div>
        </div>
        <div className="mt-[8px] bg-[#6b6a6a] h-[1px] w-[401px]"></div>
        <div className="flex gap-[40px] opacity-70 py-[24px] items-center">
          <Link href="/">
            <FiFacebook className="w-[23px] h-[23px]" />
          </Link>
          <Link href="/">
            <FiInstagram className="w-[23px] h-[23px]" />
          </Link>
          <Link href="/">
            <CiLinkedin className="w-[28px] h-[28px]" />
          </Link>
        </div>
      </div>
      <form
        className="p-[40px] rounded-[20px] w-[695px] h-[522px]"
        style={{
          boxShadow: "0px 0px 35.7px 0px #5144DCF7",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
      >
        <div className="flex gap-14">
          <div className="flex flex-col gap-[30px]">
            <label htmlFor="firstname" className="font-[400] text-[14px]">
              Firstname
            </label>
            <input
              type="text"
              className="w-[280px] bg-transparent border-b border-[#DFDFDF] outline-none text-white"
              required
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <label htmlFor="firstname" className="font-[400] text-[14px]">
              Lastname
            </label>
            <input
              required
              type="text"
              className="w-[280px] bg-transparent border-b border-[#DFDFDF] outline-none text-white"
            />
          </div>
        </div>
        <div className="flex gap-14 mt-14">
          <div className="flex flex-col gap-[30px]">
            <label htmlFor="firstname" className="font-[400] text-[14px]">
              Email
            </label>
            <input
              required
              type="text"
              className="w-[280px] bg-transparent border-b border-[#DFDFDF] outline-none text-white"
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <label htmlFor="firstname" className="font-[400] text-[14px]">
              Phone
            </label>
            <input
              required
              type="text"
              className="w-[280px] bg-transparent border-b border-[#DFDFDF] outline-none text-white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[30px] mt-16">
          <label htmlFor="firstname" className="font-[400] text-[14px]">
            Message
          </label>
          <input
            required
            type="text"
            className=" w-full bg-transparent border-b border-[#DFDFDF] outline-none text-white"
          />
        </div>
        <button
          className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white mt-[41px] bg-[#552DDA] rounded-[7px] text-[14px] sm:text-[16px] sm:px-4 sm:py-3 hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7]  border-[3px] hover:!shadow-none"
          style={{
            boxShadow: "0px 0px 35.7px 0px #5144DCF7",
          }}
          type="sumbit"
        >
          <span>Lets talk</span>
          <GoArrowUpRight />
        </button>
      </form>
    </div>
  );
}

export default Talk;
