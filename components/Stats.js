import { MdOutlineQueryStats } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { MdOutlineEmojiObjects } from "react-icons/md";
import { MdOutlineAddReaction } from "react-icons/md";

function Stats() {
  return (
    <div
      className="bg-black text-white py-10 md:py-[81px] relative flex flex-col md:flex-row items-center font-manrope justify-between md:pr-28 px-4 md:px-0"
      style={{
        backgroundImage: "url('/images/statsback.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Main CO2 Stats Card */}
      <div
        className="w-full max-w-[90%] md:w-[516px] h-auto md:h-[410px] bg-gradient-to-r from-[#1A36A3E5] to-[#020F12] rounded-tr-[100px] rounded-br-[100px] md:rounded-tr-[150px] md:rounded-br-[150px] p-6 md:p-[48px] shadow-2xl shadow-[#1A36A3E5] mb-10 md:mb-0"
        style={{
          boxShadow: "0px 0px 50px 0px #1A36A3CC",
        }}
      >
        <div>
          <div className="font-[700] text-[24px] md:text-[32px] text-center opacity-70">
            CO2
          </div>
          <div className="font-[600] text-[80px] md:text-[120px] text-center md:text-left">
            32.5MT
          </div>
          <div className="font-[400] text-[20px] md:text-[26px] opacity-70 text-center">
            Emissions Reduced
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-[100px] items-center justify-center mt-8 md:mt-0">
        {/* Years of Growth Stat */}
        <div
          className="flex flex-col gap-[10px] items-center justify-center bg-[#050919] w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full shadow-lg shadow-[#1A36A3E5] hover:scale-110 transition-all mx-auto"
          style={{
            boxShadow: "0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <MdOutlineQueryStats className="opacity-70 h-[30px] w-[30px] md:h-[35px] md:w-[35px]" />
          <span className="text-[28px] md:text-[30px] font-semibold">03+</span>
          <span className="opacity-70 text-[12px] md:text-[14px] text-center">
            Years of Growth
          </span>
        </div>

        {/* Products Cultivated Stat */}
        <div
          className="flex flex-col gap-[10px] items-center justify-center bg-[#050919] w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full shadow-lg shadow-[#1A36A3E5] hover:scale-110 transition-all mx-auto"
          style={{
            boxShadow: "0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <MdOutlineEmojiObjects className="opacity-70 h-[30px] w-[30px] md:h-[35px] md:w-[35px]" />
          <span className="text-[28px] md:text-[30px] font-semibold">06</span>
          <span className="opacity-70 text-[12px] md:text-[14px] text-center">
            Products Cultivated
          </span>
        </div>

        {/* Global Offices Stat */}
        <div
          className="flex flex-col gap-[10px] items-center justify-center bg-[#050919] w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full shadow-lg shadow-[#1A36A3E5] hover:scale-110 transition-all mx-auto"
          style={{
            boxShadow: "0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <MdOutlineHomeWork className="opacity-70 h-[30px] w-[30px] md:h-[35px] md:w-[35px]" />
          <span className="text-[28px] md:text-[30px] font-semibold">03</span>
          <span className="opacity-70 text-[12px] md:text-[14px] text-center">
            Global Offices
          </span>
        </div>

        {/* Customer Satisfaction Stat */}
        <div
          className="flex flex-col gap-[10px] items-center justify-center bg-[#050919] w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full shadow-lg shadow-[#1A36A3E5] hover:scale-110 transition-all mx-auto"
          style={{
            boxShadow: "0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <MdOutlineAddReaction className="opacity-70 h-[30px] w-[30px] md:h-[35px] md:w-[35px]" />
          <p className="text-[28px] md:text-[30px] font-semibold">92%</p>
          <p className="opacity-70 text-[12px] md:text-[14px] text-center">
            Customer Satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
