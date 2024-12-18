function Feedback() {
  return (
    <div className="py-[160px] px-[70px] bg-[#050919] font-manrope">
      <p className="text-white text-center text-[50px] font-[500]">
        Don’t take our word, see what
      </p>
      <p className="text-white text-center text-[50px] font-[500]">
        customers say about us
      </p>
      <div
        className="py-[80px] px-5 lg:px-[70px] rounded-[32px] mt-16"
        style={{
          boxShadow: " 0px 0px 30px 0px #1A36A3CC",
        }}
      >
        <div className="text-white text-[20px] lg:text-[24px] text-center opacity-70 font-[300]">
          <p>
            InLights Solution has transformed our campus management. With
            real-time
          </p>
          <p>
            tracking and automated scheduling, our facilities are always in top
            condition,
          </p>
          <p> allowing us to focus on educating our students.</p>
        </div>

        <div className="flex lg:flex-row items-center md:justify-between justify-center gap-4">
          <img
            src="/images/feedback1.png"
            className="w-[44px] h-[44px] "
            alt="Feedback 1"
          />
          <img
            src="/images/feedback2.png"
            className="w-[44px] h-[44px] "
            alt="Feedback 2"
          />
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <img
            src="/images/feedback3.png"
            className="w-[32px] md:w-[42px] h-[32px] md:h-[42px]"
            alt="Cameron Williamson"
          />
          <p className="text-[14px] lg:text-[16px] text-white pt-[4px]">
            Cameron Williamson
          </p>
          <p className="text-[12px] text-white opacity-50">CEO</p>
        </div>

        <div className="flex items-center justify-center mt-8">
          <img src="/images/feedback4.png" className="" alt="Feedback 4" />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
