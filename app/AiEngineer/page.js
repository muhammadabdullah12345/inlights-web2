"use client";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";

function Page() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="bg-[#03030E] text-white font-manrope py-[80px] px-[70px]">
      <div className=" flex justify-between items-center">
        <h1 className="font-[500] text-[50px]">AI Engineer</h1>
      </div>
      <div className="flex items-start justify-between my-10">
        <div className="w-[770px] ">
          <h2 className="font-[500] text-[24px] pb-5">Description</h2>
          <p className="font-[400] text-[14px] opacity-80">
            Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista La
            Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
            thora Ista La Vista irtim gasiliaseLorem Ipsum thora Ista La Vista
            irtim gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum thora
            Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
            gasiliaseLorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora
            Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
            gasiliaseIpsum thora Ista La Vista irtim gasiliase Lorem Ipsum thora
            Ista La Vista irtim gasiliase Ipsum thora Ista La Vista irtim
            gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora Ista
            La Vista irtim gasiliase Lorem Ipsum thora Ista La Vista irtim
            gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum thora Ista
            La Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliase
            Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista La
            Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
            thora Ista La Vista irtim gasiliase Lorem Ipsum thora Ista La Vista
            irtim gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum thora
            Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
            gasiliase
          </p>
          <p className="font-[400] text-[14px] opacity-80 mt-5">
            Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista La
            Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
            thora Ista La Vista irtim gasiliaseLorem Ipsum thora Ista La Vista
            irtim gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum thora
            Ista La Vista irtim gasiliaseIpsum
          </p>
          <ul className="font-[400] text-[14px] opacity-80 mt-5 list-disc px-7 mb-44">
            <li>
              Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
              La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
              gasiliaseIpsum thora Ista La Vista irtim gasiliaseLorem Ipsum
              thora Ista La
            </li>
            <li>
              Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
              La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
              gasiliaseIpsum thora Ista La Vista irtim gasiliaseLorem Ipsum
              thora Ista La
            </li>
            <li>
              Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
              La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
              gasiliaseIpsum thora Ista La Vista irtim gasiliaseLorem Ipsum
              thora Ista La
            </li>
            <li>
              Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
              La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
              gasiliaseIpsum thora Ista La Vista irtim gasiliaseLorem Ipsum
              thora Ista La
            </li>
            <li>
              Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
              La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
              gasiliaseIpsum thora Ista La Vista irtim gasiliaseLorem Ipsum
              thora Ista La
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <div className="w-[1px] border border-white opacity-50 h-[590px]"></div>
          <div className="flex flex-col gap-5 pr-40">
            <h2 className="font-[500] text-[24px]">Job Info</h2>
            <div className="font-[400] text-[14px]">
              <h3>Department</h3>
              <span className="opacity-80">Engineering</span>
            </div>
            <div className="font-[400] text-[14px]">
              <h3>Experience</h3>
              <span className="opacity-80">2-4 years</span>
            </div>
            <div className="font-[400] text-[14px]">
              <h3>City</h3>
              <span className="opacity-80">Lahore</span>
            </div>
          </div>
        </div>
      </div>
      <form
        className="p-[40px] rounded-[20px] "
        style={{
          boxShadow: "0px 0px 35.7px 0px #5144DCF7",
        }}
      >
        <h2 className="font-[500] text-[22px]">Enter your details to Apply</h2>
        <div className="flex justify-between gap-10 mt-14">
          <div className="flex flex-col gap-[30px] ">
            <label htmlFor="firstname" className="font-[400] text-[14px] ">
              Firstname
            </label>
            <input
              required
              type="text"
              className="w-[520px] bg-transparent border-b border-[#DFDFDF] outline-none text-white"
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <label htmlFor="firstname" className="font-[400] text-[14px]">
              Lastname
            </label>
            <input
              required
              type="text"
              className="w-[520px] bg-transparent border-b border-[#DFDFDF] outline-none text-white"
            />
          </div>
        </div>
        <div className="flex justify-between mt-14 gap-10">
          <div className="flex flex-col gap-[30px]">
            <label htmlFor="firstname" className="font-[400] text-[14px]">
              Email
            </label>
            <input
              required
              type="text"
              className="w-[520px] bg-transparent border-b border-[#DFDFDF] outline-none text-white"
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <label htmlFor="firstname" className="font-[400] text-[14px]">
              Phone
            </label>
            <input
              required
              type="text"
              className="w-[520px] bg-transparent border-b border-[#DFDFDF] outline-none text-white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[30px] mt-16">
          <label htmlFor="firstname" className="font-[400] text-[14px]">
            Address
          </label>
          <input
            required
            type="text"
            className=" w-full bg-transparent border-b border-[#DFDFDF] outline-none text-white"
          />
        </div>
        <div className="flex flex-col gap-[30px] mt-16">
          <label htmlFor="firstname" className="font-[400] text-[14px]">
            LinkedIn Profile
          </label>
          <input
            required
            type="text"
            className=" w-full bg-transparent border-b border-[#DFDFDF] outline-none text-white"
          />
        </div>
        {/* upload div  */}
        <div className="flex flex-col items-start space-y-2 mt-14">
          <label className="font-[400] text-[14px] mb-3">Upload Resume</label>
          {/* Clickable Upload Box */}
          <div
            className="border-2 border-dashed border-gray-600 rounded-lg p-6 w-full  flex flex-col items-center justify-center text-gray-400 bg-[#0b0c1a] hover:bg-[#12142b] transition cursor-pointer"
            onClick={handleClick}
          >
            <MdOutlineFileUpload className="w-8 h-8 text-[#9F85F6] mb-2" />
            <p className="text-sm mb-1">
              <span className="text-[#9F85F6] cursor-pointer hover:underline">
                Click To Upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500">Max. File size: 5MB</p>
          </div>
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white mt-[41px] bg-[#552DDA] rounded-[7px] text-[14px] sm:text-[16px] sm:px-4 sm:py-2 hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7]  border-[3px] hover:!shadow-none"
          style={{
            boxShadow: "0px 0px 35.7px 0px #5144DCF7",
          }}
        >
          <span>Apply</span>
          <GoArrowUpRight />
        </button>
      </form>
    </div>
  );
}

export default Page;
