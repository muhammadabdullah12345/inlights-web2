import { MdOutlineQueryStats } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { MdOutlineAddReaction } from "react-icons/md";

function Stats() {
  return (
    <div
      className="bg-black text-white py-10 lg:py-[81px] flex flex-col lg:flex-row font-manrope justify-between lg:pr-28 lg:items-center 2xl:h-screen"
      style={{
        backgroundImage: "url('/images/statsback.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Main CO2 Stats Card */}
      <div
        className="w-full max-w-[95%] lg:w-[516px] h-[130px] lg:h-[410px] bg-gradient-to-r from-[#1A36A3E5] to-[#020F12] rounded-tr-[40px] rounded-br-[40px] lg:rounded-tr-[150px] lg:rounded-br-[150px] p-6 lg:p-[48px] shadow-2xl shadow-[#1A36A3E5] mb-3 lg:mb-0 flex items-center justify-center"
        style={{
          boxShadow: "0px 0px 50px 0px #1A36A3CC",
        }}
      >
        <div>
          <div className="font-[700] text-[14px] lg:text-[32px] text-center opacity-70">
            CO2
          </div>
          <div className="font-[600] text-[40px] lg:text-[120px] text-center lg:text-left">
            32.5MT
          </div>
          <div className="font-[400] text-[10px] lg:text-[26px] opacity-70 text-center">
            Emissions Reduced
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 lg:gap-[100px] mt-8 lg:mt-0 px-4 lg:px-0">
        {/* Years of Growth Stat */}
        <div
          className="flex flex-col gap-[10px] items-center justify-center bg-[#050919] w-[180px] h-[120px] lg:w-[200px] lg:h-[200px] rounded-full shadow-lg shadow-[#1A36A3E5] hover:scale-110 transition-all mx-auto"
          style={{
            boxShadow: "0px 0px 20px 0px #1A36A3CC",
          }}
        >
          <MdOutlineQueryStats className="opacity-70 h-[20px] w-[20px] lg:h-[35px] lg:w-[35px]" />
          <span className="text-[16px] lg:text-[30px] font-semibold">03+</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Years of Growth
          </span>
        </div>

        {/* Products Cultivated Stat */}
        <div
          className="flex flex-col gap-[10px] items-center justify-center bg-[#050919] w-[180px] h-[120px] lg:w-[200px] lg:h-[200px] rounded-full shadow-lg shadow-[#1A36A3E5] hover:scale-110 transition-all mx-auto"
          style={{
            boxShadow: "0px 0px 20px 0px #1A36A3CC",
          }}
        >
          <MdOutlineEmojiObjects className="opacity-70 h-[20px] w-[20px] lg:h-[35px] lg:w-[35px]" />
          <span className="text-[16px] lg:text-[30px] font-semibold">06</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Products Cultivated
          </span>
        </div>

        {/* Global Offices Stat */}
        <div
          className="flex flex-col gap-[10px] items-center justify-center bg-[#050919] w-[180px] h-[120px] lg:w-[200px] lg:h-[200px] rounded-full shadow-lg shadow-[#1A36A3E5] hover:scale-110 transition-all mx-auto"
          style={{
            boxShadow: "0px 0px 20px 0px #1A36A3CC",
          }}
        >
          <MdOutlineHomeWork className="opacity-70 h-[20px] w-[20px] lg:h-[35px] lg:w-[35px]" />
          <span className="text-[16px] lg:text-[30px] font-semibold">03</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Global Offices
          </span>
        </div>

        {/* Customer Satisfaction Stat */}
        <div
          className="flex flex-col gap-[10px] items-center justify-center bg-[#050919] w-[180px] h-[120px] lg:w-[200px] lg:h-[200px] rounded-full shadow-lg shadow-[#1A36A3E5] hover:scale-110 transition-all mx-auto"
          style={{
            boxShadow: "0px 0px 20px 0px #1A36A3CC",
          }}
        >
          <MdOutlineAddReaction className="opacity-70 h-[20px] w-[20px] lg:h-[35px] lg:w-[35px]" />
          <span className="text-[16px] lg:text-[30px] font-semibold">92%</span>
          <span className="opacity-70 text-[12px] lg:text-[14px] text-center">
            Customer Satisfaction
          </span>
        </div>
      </div>
    </div>
  );
}

export default Stats;
