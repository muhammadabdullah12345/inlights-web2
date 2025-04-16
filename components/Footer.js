import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div className="pt-[80px] pb-[30px] px-5 lg:px-[70px] bg-[#0D0D1D] text-white font-manrope">
      {/* Logo and Address Section */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-10 lg:mb-0">
          <Image src="/images/logo.png" alt="Logo" height={18} width={155} />
          <div className="text-[#B5B5B5] text-[14px] mt-4">
            <p>INLIGHTS</p>
            <p className="mt-1">HQ - The Garage, KACST, Riyadh, Saudi Arabia</p>
            <p className="mt-1">NSTP, NUST, H-12, Islamabad, Pakistan</p>
            <p className="mt-1">
              NASTP, Nur Khan Airbase, Rawalpindi, Pakistan
            </p>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-row gap-16 sm:gap-16 mb-10 lg:mb-0">
          <div className="flex flex-col gap-4 text-[#B5B5B5] text-[14px]">
            <span className="text-[16px] text-white font-medium">
              Quick Links
            </span>
            <Link
              href="/about"
              className="relative transition duration-300 group inline-block"
            >
              <span>About Us</span>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-[58%]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                }}
              ></span>
            </Link>
            <Link
              href="/premisesecurity"
              className="relative transition duration-300 group inline-block"
            >
              <span>Inlights Security</span>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                }}
              ></span>
            </Link>
            <Link
              href="/trafficmanagement"
              className="relative transition duration-300 group inline-block"
            >
              <span>Inlights Traffic</span>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-[88%]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                }}
              ></span>
            </Link>
            <Link
              href="/mission"
              className="relative transition duration-300 group inline-block"
            >
              <span>Careers</span>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-[50%]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                }}
              ></span>
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-[#B5B5B5] text-[14px]">
            <span className="text-[16px] text-white font-medium">
              Solutions
            </span>
            <Link
              href="/webdevelopment"
              className="relative transition duration-300 group inline-block"
            >
              <span>Web Development</span>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                }}
              ></span>
            </Link>
            <Link
              href="/UIUXdesign"
              className="relative transition duration-300 group inline-block"
            >
              <span>Product Design</span>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-[88%]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                }}
              ></span>
            </Link>
            <Link
              href="/"
              className="relative transition duration-300 group inline-block"
            >
              <span>AI Automation</span>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-[80%]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                }}
              ></span>
            </Link>
            <Link
              href="/"
              className="relative transition duration-300 group inline-block"
            >
              <span>Computer Vision</span>
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-[92%]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%,white 31%)",
                }}
              ></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="text-[#B5B5B5] text-[14px] mb-10">
        <p className="text-[16px] font-semibold text-white mb-1">Lets Talk</p>
        <p>Enter your e-mail and our</p>
        <p>representatives will reach out to you.</p>
        <div className="flex items-center gap-2 mt-4 mb-8">
          <input
            placeholder="Email"
            className="rounded-[8px] py-[8px] px-[16px] border border-[#FFFFFF80] bg-[#13171C] w-full max-w-[250px] text-white"
          />
          <button className="bg-white h-[40px] w-[40px] rounded-[12px] flex items-center justify-center text-black">
            <GoArrowUpRight />
          </button>
        </div>
        <div className="flex gap-5">
          <a href="" aria-label="YouTube">
            <div className="w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] rounded-full border border-white flex items-center justify-center">
              <FaYoutube className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] text-white" />
            </div>
          </a>
          <a href="" aria-label="LinkedIn">
            <div className="w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] rounded-full border border-white flex items-center justify-center">
              <FaLinkedin className="w-[20px] h-[20px] text-white" />
            </div>
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
      <div className="flex flex-row items-center justify-between text-[12px] lg:text-[14px] mt-[24px] gap-2">
        <span>support@inlights.com</span>
        <span>
          &copy; {new Date().getFullYear()} Inlights. All rights reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
