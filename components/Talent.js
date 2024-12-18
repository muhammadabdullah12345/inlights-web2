import { GoArrowUpRight } from "react-icons/go";

function Talent() {
  return (
    <div className="py-10 px-10 bg-[#050919]">
      <div
        className="rounded-[32px] font-manrope flex items-center justify-between px-[60px]"
        style={{
          backgroundImage: "url('/images/Talent.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          height: "371px", // Full height of the viewport
          width: "100%", // Full width
          //   top: "-39px",
        }}
      >
        <div className="text-white text-[50px] font-[500]">
          We Are Looking for Exceptional Talent
        </div>
        <button
          className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white bg-[#552DDA] rounded-[7px] text-[14px] sm:text-[16px] sm:px-4 sm:py-3 hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7]  border-[3px] hover:!shadow-none"
          style={{
            boxShadow: "0px 0px 35.7px 0px #5144DCF7",
          }}
        >
          <span>Lets talk</span>
          <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
}

export default Talent;
