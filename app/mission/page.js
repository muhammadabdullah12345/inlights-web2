import Apply from "@/components/Apply";
import Header from "@/components/Header";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdTime } from "react-icons/io";

function page() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/images/mission.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          height: "100vh", // Full height of the viewport
          width: "100%", // Full width
        }}
      >
        <Header />
        <div className=" text-white flex items-center justify-center  flex-col py-44">
          <p className="bg-white text-black text-[12px] rounded-[24px] lg:rounded-[48px] py-[4px] lg:py-[6px] px-2">
            We are Hiring!
          </p>
          <p className="font-[500] text-[50px]  pt-3">
            Be a part of our Mission
          </p>
          <p className="font-[400] text-[18px]  pt-3 opacity-70">
            Look at the open positions below
          </p>
        </div>
      </div>
      <div className="pt-20 bg-[#03030E] text-white px-20 pb-52">
        <Apply />
        <Apply />
        <Apply />
        <Apply />
      </div>
    </div>
  );
}

export default page;
