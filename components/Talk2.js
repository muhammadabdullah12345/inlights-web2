import { GoArrowUpRight } from "react-icons/go";

function Talk2() {
  return (
    <div className="p-[120px] relative flex items-center justify-center bg-[#03030E] font-manrope  text-white ">
      <img
        src="/images/Calltoaction.png"
        alt=""
        className="h-[209px] w-[1200px] "
      />
      <div className="absolute flex items-center justify-center flex-col">
        <p className="font-[700] text-[45px] ">
          Enough talk, let’s get to work
        </p>
        <button
          className="flex items-center justify-center py-2 px-3 sm:rounded-xl gap-1 sm:gap-2 text-white mt-[35px] bg-[#552DDA] rounded-[7px] text-[14px] sm:text-[16px] sm:px-4 sm:py-3 hover:bg-transparent border-[#552DDA] shadow-xl shadow-[#5144DCF7]  border-[3px] hover:!shadow-none"
          style={{
            boxShadow: "0px 0px 35.7px 0px #5144DCF7",
          }}
        >
          <span>Lets get in touch</span>
          <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
}

export default Talk2;
