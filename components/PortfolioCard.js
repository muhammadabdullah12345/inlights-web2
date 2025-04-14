import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

function PortfolioCard() {
  return (
    <div
      className="flex flex-col md:flex-row items-stretch p-4 gap-5 bg-[#050919] rounded-2xl shadow-lg"
      style={{
        boxShadow: "0px 0px 30px 0px #1A36A3CC",
      }}
    >
      {/* Image Section - Full width on mobile, half width on desktop */}
      <div className="relative w-full md:w-1/2 h-48 md:h-auto overflow-hidden rounded-lg py-2">
        <div className="h-full">
          <Image
            src="/images/bg-success2.png"
            alt="Manufacturing"
            className="h-full w-full rounded-lg object-cover"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">
              Manufacturing
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1">
        {/* Title and Description */}
        <div>
          <h3 className="text-white text-[16px] mb-2 flex items-center justify-between font-semibold">
            YouTube Video Analyst Bot
            <MdArrowOutward />
          </h3>
          <p className="text-gray-400 text-[12px]">
            An AI-powered tool that transforms YouTube video content into
            insights by automatically extracting, summarizing, and generating
            multi-format scripts with advanced natural language processing
            technologies.
          </p>
        </div>

        {/* Footer (Technologies and Type) */}
        <div className="flex items-center justify-between mt-4">
          {/* Technologies */}
          <div className="flex items-center gap-3">
            <span>
              <FaNode className="w-8 h-8" />
            </span>
            <span className="text-lg">
              <SiMongodb className="w-8 h-8" />
            </span>
            <span className="text-lg">
              <FaReact className="w-8 h-8" />
            </span>
          </div>

          {/* Type */}
          <div className="text-gray-400 text-sm">AI</div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
