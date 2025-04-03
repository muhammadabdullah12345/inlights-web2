import Header from "@/components/Header";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

function page() {
  return (
    <div>
      <div
        className="font-manrope"
        style={{
          backgroundImage: "url('/images/geohealth.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          // height: "100vh", // Full height of the viewport
          width: "100%", // Full width
        }}
      >
        <Header />
        <div className=" py-[176px] pl-[70px] grid grid-cols-2 ">
          <div>
            <div className="w-[93px] h-[34px] bg-white rounded-[48px] text-[14px] py-[0.5px] px-[3px] flex items-center justify-center text-[#414C5C]">
              GeoHealth
            </div>
            <p className="text-white font-[700] text-[66px] my-5">GeoHealth</p>
            <p className="text-[18px] font-[400] text-white opacity-70">
              An AI-powered advanced exercise monitoring system that helps users
              maintain proper form during workouts through advanced computer
              vision and machine learning techniques.
            </p>
            <button
              className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white mt-16 bg-[#552DDA] rounded-[8px] text-[14px] sm:text-[16px] sm:px-[20px] sm:py-[12px] hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7]  border-[3px] hover:!shadow-none"
              style={{
                boxShadow: "0px 0px 35.7px 0px #5144DCF7",
              }}
            >
              <span>Lets talk</span>
              <GoArrowUpRight />
            </button>
          </div>
          <div className="pt-10 px-12 relative">
            <Image
              src="/images/geohealth1.png"
              alt="geohealth"
              height={349}
              width={511}
            />
            <div className="absolute top-0 left-8">
              <Image
                src="/images/geohealth2.png"
                alt="geohealth"
                width={165}
                height={90}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-black flex items-center justify-center px-[70px]  gap-10 text-white"
        style={{
          backgroundImage: "url('/images/statsback.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          height: "100vh", // Full height of the viewport
          width: "100%", // Full width
        }}
      >
        <div className="w-[600px] space-y-10">
          <p className="font-[500] text-[52px] ">Significance</p>
          <div className="font-[500] text-[18px] opacity-80 space-y-5">
            <p>90%+ Accuracy in Pose Detection</p>
            <p>4+ Exercise Variations Covered </p>
            <p>2X Faster Form Correction Compared to Traditional Methods </p>
            <p>Seamless Integration with Dashboards</p>
            <p>Real-Time Feedback in Under 1 Second</p>
          </div>
        </div>
        <div>
          <Image
            src="/images/geoupdate.png"
            alt="geohealth"
            height={489}
            width={655}
          />
        </div>
      </div>

      {/* /// stack used */}
      <div className="py-[50px] px-[70px] bg-[#050919] text-white">
        <h1 className="font-[500] text-[50px] text-center mb-8">Stacks Used</h1>
        <div className="flex items-center justify-center gap-32">
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="font-[600] text-[20px] mb-6">Frontend Architecture</p>
            <Image
              src="/images/html.png"
              alt="geohealth"
              height={112}
              width={112}
            />
            <Image
              src="/images/nextjs.png"
              alt="geohealth"
              height={112}
              width={112}
            />
            <Image
              src="/images/html.png"
              alt="geohealth"
              height={112}
              width={112}
            />
            <Image
              src="/images/nextjs.png"
              alt="geohealth"
              height={112}
              width={112}
            />
          </div>
          <div className="bg-white opacity-50 h-[544px] w-[1px]"></div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="font-[600] text-[20px] mb-6">Frontend Architecture</p>
            <Image
              src="/images/html.png"
              alt="geohealth"
              height={112}
              width={112}
            />
            <Image
              src="/images/nextjs.png"
              alt="geohealth"
              height={112}
              width={112}
            />
            <Image
              src="/images/html.png"
              alt="geohealth"
              height={112}
              width={112}
            />
            <Image
              src="/images/nextjs.png"
              alt="geohealth"
              height={112}
              width={112}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
