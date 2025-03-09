import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
function PortfolioCard() {
  return (
    <div
      className="flex items-center p-[15px] gap-5 bg-[#050919] rounded-2xl shadow-lg "
      style={{
        boxShadow: " 0px 0px 30px 0px #1A36A3CC",
      }}
    >
      {/* <!-- Left Section (Image) --> */}
      <div className="relative   overflow-hidden rounded-lg ">
        <Image
          src="/images/bg-success2.png"
          alt="Manufacturing"
          className="object-cover"
          height={189}
          width={285}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">
            Manufacturing
          </span>
        </div>
      </div>

      {/* <!-- Right Section (Content) --> */}
      <div className="flex flex-col justify-between w-[80%]">
        {/* <!-- Title and Description --> */}
        <div>
          <h3 className="text-white text-[20px] mb-2 flex items-center justify-between">
            YouTube Video Analyst Bot
            <MdArrowOutward />
          </h3>
          <p className="text-gray-400 text-sm">
            An AI-powered tool that transforms YouTube video content into
            insights by automatically extracting, summarizing, and generating
            multi-format scripts with advanced natural language processing
            technologies.
          </p>
        </div>

        {/* <!-- Footer (Technologies and Type) --> */}
        <div className="flex items-center justify-between mt-4">
          {/* <!-- Technologies --> */}
          <div className="flex items-center gap-3 ">
            <span>
              <FaNode className="w-[32px] h-[32px]" />
            </span>
            <span className="text-lg">
              <SiMongodb className="w-[32px] h-[32px]" />
            </span>
            <span className="text-lg">
              <FaReact className="w-[32px] h-[32px]" />
            </span>
          </div>

          {/* <!-- Type --> */}
          <div className="text-gray-400 text-sm">AI</div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
