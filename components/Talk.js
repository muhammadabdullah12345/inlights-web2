"use client";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

function Talk() {
  return (
    <div className="py-8 px-4 md:py-16 lg:py-[140px] md:px-8 lg:px-[70px] font-manrope bg-[#050919] text-white flex flex-col lg:flex-row lg:justify-between">
      {/* Contact Information Section */}
      <div className="mb-10 lg:mb-0">
        <h1 className="font-[500] text-3xl md:text-4xl lg:text-[50px]">
          Let's talk
        </h1>
        <div className="font-[400] text-sm lg:text-[16px] opacity-70">
          <p>Like our story? Contact now and create greatness</p>
          <p>together with us.</p>
        </div>
        <div className="mt-4 lg:mt-[24px] bg-[#6b6a6a] h-[1px] w-full lg:w-[401px]"></div>

        {/* Contact Methods */}
        <div className="py-4 lg:py-[24px] flex items-center gap-4 lg:gap-[26px]">
          <Link href="/">
            <Image
              src="/images/email.png"
              width={40}
              height={40}
              alt="email"
              className="lg:w-[50px] lg:h-[50px]"
            />
          </Link>
          <div>
            <p className="font-[600] text-base lg:text-[20px]">Our email</p>
            <p className="font-[400] text-sm lg:text-[16px] opacity-70">
              admin@inlights.com.pk
            </p>
          </div>
        </div>

        <div className="py-4 lg:py-[24px] flex items-center gap-4 lg:gap-[26px]">
          <Link href="/">
            <Image
              src="/images/call.png"
              width={40}
              height={40}
              alt="phone"
              className="lg:w-[50px] lg:h-[50px]"
            />
          </Link>
          <div>
            <p className="font-[600] text-base lg:text-[20px]">Call us</p>
            <p className="font-[400] text-sm lg:text-[16px] opacity-70">
              +92 3235353143
            </p>
          </div>
        </div>

        <div className="py-4 lg:py-[24px] flex items-center gap-4 lg:gap-[26px]">
          <Link href="/">
            <Image
              src="/images/location.png"
              width={40}
              height={40}
              alt="location"
              className="lg:w-[50px] lg:h-[50px]"
            />
          </Link>
          <div>
            <p className="font-[600] text-base lg:text-[20px]">Find us</p>
            <p className="font-[400] text-sm lg:text-[16px] opacity-70">
              Open Google Maps
            </p>
          </div>
        </div>

        <div className="mt-2 lg:mt-[8px] bg-[#6b6a6a] h-[1px] w-full lg:w-[401px]"></div>

        {/* Social Media Links */}
        <div className="flex gap-6 lg:gap-[40px] opacity-70 py-4 lg:py-[24px] items-center">
          <Link href="/">
            <FiFacebook className="w-5 h-5 lg:w-[23px] lg:h-[23px]" />
          </Link>
          <Link href="/">
            <FiInstagram className="w-5 h-5 lg:w-[23px] lg:h-[23px]" />
          </Link>
          <Link href="/">
            <CiLinkedin className="w-6 h-6 lg:w-[28px] lg:h-[28px]" />
          </Link>
        </div>
      </div>

      {/* Contact Form Section */}
      <form
        className="p-6 md:p-8 lg:p-[40px] rounded-[20px] w-full lg:w-[695px] h-auto lg:h-[522px]"
        style={{
          boxShadow: "0px 0px 35.7px 0px #5144DCF7",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
      >
        {/* Form Inputs - Mobile layout is stacked, desktop has 2 columns */}
        <div className="flex flex-col lg:flex-row lg:gap-14">
          <div className="flex flex-col gap-4 lg:gap-[30px] mb-6 lg:mb-0">
            <label
              htmlFor="firstname"
              className="font-[400] text-xs lg:text-[14px]"
            >
              First name
            </label>
            <input
              type="text"
              className="w-full lg:w-[280px] bg-transparent border-b border-[#DFDFDF] outline-none text-white pb-2"
              required
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-[30px] mb-6 lg:mb-0">
            <label
              htmlFor="lastname"
              className="font-[400] text-xs lg:text-[14px]"
            >
              Last name
            </label>
            <input
              required
              type="text"
              className="w-full lg:w-[280px] bg-transparent border-b border-[#DFDFDF] outline-none text-white pb-2"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-14 lg:mt-14">
          <div className="flex flex-col gap-4 lg:gap-[30px] mb-6 lg:mb-0">
            <label
              htmlFor="email"
              className="font-[400] text-xs lg:text-[14px]"
            >
              Email
            </label>
            <input
              required
              type="email"
              className="w-full lg:w-[280px] bg-transparent border-b border-[#DFDFDF] outline-none text-white pb-2"
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-[30px] mb-6 lg:mb-0">
            <label
              htmlFor="phone"
              className="font-[400] text-xs lg:text-[14px]"
            >
              Phone
            </label>
            <input
              required
              type="text"
              className="w-full lg:w-[280px] bg-transparent border-b border-[#DFDFDF] outline-none text-white pb-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-[30px] mt-4 lg:mt-16 mb-8">
          <label
            htmlFor="message"
            className="font-[400] text-xs lg:text-[14px]"
          >
            Message
          </label>
          <input
            required
            type="text"
            className=" w-full bg-transparent border-b border-[#DFDFDF] outline-none text-white pb-2"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center lg:justify-start">
          <button
            className="flex items-center justify-center py-2 px-6 rounded-lg gap-2 text-white bg-[#552DDA] text-sm lg:text-[14px] shadow-lg hover:bg-transparent border-[#552DDA] border-2 hover:shadow-none transition-all"
            style={{
              boxShadow: "0px 0px 20px 0px #5144DCF7",
            }}
            type="submit"
          >
            <span>Lets Talk</span>
            <GoArrowUpRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Talk;
