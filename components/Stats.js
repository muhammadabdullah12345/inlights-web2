import { MdOutlineQueryStats } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { MdOutlineAddReaction } from "react-icons/md";

function Stats() {
  return (
    <div
      className="bg-black text-white md:py-[81px] relative py-[51px] flex  items-center font-manrope justify-between pr-28"
      style={{
        backgroundImage: "url('/images/statsback.png')", // Path to your image
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        height: "100vh", // Full height of the viewport
        width: "100%", // Full width
      }}
    >
      <div
        className="w-[516px] h-[410px] bg-gradient-to-r from-[#1A36A3E5] to-[#020F12] rounded-tr-[150px] rounded-br-[150px] p-[48px] shadow-2xl shadow-[#1A36A3E5]"
        style={{
          boxShadow: " 0px 0px 50px 0px #1A36A3CC",
        }}
      >
        <div>
          <div className="font-[700] text-[32px] text-center opacity-70">
            CO2
          </div>
          <div className="font-[600] text-[120px]">32.5MT</div>
          <div className="font-[400] text-[26px] opacity-70 text-center">
            Emissions Reduced
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[85px]     items-center justify-center ">
        <div
          className="flex flex-col gap-[10px] items-center justify-center bg-[#050919] w-[240px] h-[240px]  rounded-[200px] shadow-lg shadow-[#1A36A3E5]"
          style={{
            boxShadow: " 0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <MdOutlineQueryStats className="opacity-70 h-[20px] w-[20px] lg:text-[46px] sm:h-[40px] sm:w-[40px]" />
          <span className="text-[20px] lg:text-[46px] font-semibold">03+</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Years of Growth
          </span>
        </div>
        <div
          className="flex flex-col gap-[10px] items-center  justify-center bg-[#050919] w-[240px] h-[240px]  rounded-[200px] shadow-lg shadow-[#1A36A3E5]"
          style={{
            boxShadow: " 0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <MdOutlineHomeWork className="opacity-70 h-[20px] w-[20px] lg:text-[46px] sm:h-[40px] sm:w-[40px]" />
          <span className="text-[20px] lg:text-[46px] font-semibold">03</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Global Offices
          </span>
        </div>
        <div
          className="flex flex-col gap-[10px] items-center  justify-center bg-[#050919] w-[240px] h-[240px]  rounded-[200px] shadow-lg shadow-[#1A36A3E5]"
          style={{
            boxShadow: " 0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <MdOutlineEmojiObjects className="opacity-70 h-[20px] w-[20px] lg:text-[46px] sm:h-[40px] sm:w-[40px]" />
          <span className="text-[20px] lg:text-[46px] font-semibold">06</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Products Cultivated
          </span>
        </div>
        <div
          className="flex flex-col gap-[10px] items-center  justify-center bg-[#050919] w-[240px] h-[240px]  rounded-[200px] shadow-lg shadow-[#1A36A3E5]"
          style={{
            boxShadow: " 0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <MdOutlineAddReaction className="opacity-70 h-[20px] w-[20px] lg:text-[46px] sm:h-[40px] sm:w-[40px]" />
          <p className="text-[20px] lg:text-[46px] font-semibold">92%</p>
          <p className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Customer Satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
