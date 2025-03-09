import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

function SuccessStories() {
  return (
    <div className="md:py-[80px] px-5 lg:px-[70px] md:pt-[120px] py-[30px] md:pb-[160px] font-manrope bg-[#050919]">
      <div className="text-white flex items-center justify-between">
        <p className="text-[30px] lg:text-[40px] font-semibold text-white">
          Our Success Stories
        </p>
        <div className="flex gap-3 items-center justify-center">
          <button className="border border-[#B4BBC6] rounded-[900px] p-[8px] text-[#B4BBC6]">
            <FaArrowLeftLong />
          </button>
          <button className="border border-[#B4BBC6] rounded-[900px] p-[8px] text-[#B4BBC6]">
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div
          className="rounded-2xl bg-[#050919] overflow-hidden"
          style={{
            boxShadow: " 0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <div className="relative flex items-center justify-center">
            <p className="flex items-center justify-center text-white z-[5] absolute">
              GeoHealth
            </p>
            <Image
              src="/images/bg-success1.png"
              className=" rounded-[18px] object-cover blur-[2px]"
              alt="Education Project"
              width={414}
              height={174}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className=" h-auto rounded-b-[18px] text-white px-[16px] pt-[16px] pb-[30px] lg:p-[24px] lg:pb-[40px]">
            <p className="text-[16px] lg:text-[18px] font-semibold">
              AI-Powered Physical Exercise Coach
            </p>
            <p className="line-clamp-3 opacity-70 pt-[15px] text-[12px] lg:text-[14px]">
              AI-powered exercise monitoring system for real-time pose
              detection, angle measurements, and form correction feedback for
              various exercises.
            </p>
            <p className="text-[white] text-[12px] mt-[20px] flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-2xl bg-[#050919] overflow-hidden"
          style={{
            boxShadow: " 0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <div className="relative flex items-center justify-center">
            <p className="flex items-center justify-center text-white z-[5] absolute">
              Manufacturing
            </p>
            <Image
              src="/images/bg-success2.png"
              className=" rounded-[18px]  object-cover blur-[2px]"
              alt="Manufacturing Project"
              width={414}
              height={174}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className=" h-auto rounded-b-[18px] text-white px-[16px] pt-[16px] pb-[30px] lg:p-[24px] lg:pb-[40px]">
            <p className="text-[16px] lg:text-[18px] font-semibold">
              Project 2
            </p>
            <p className="line-clamp-3 opacity-70 pt-[15px] text-[12px] lg:text-[14px]">
              Manufacturers are achieving remarkable gains in productivity and
              efficiency with Emerald’s innovative solutions. Our preventive
              maintenance system has notably increased equipment uptime...
            </p>
            <p className="text-[white] text-[12px] mt-[20px] flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="rounded-2xl bg-[#050919] overflow-hidden"
          style={{
            boxShadow: " 0px 0px 30px 0px #1A36A3CC",
          }}
        >
          <div className="relative flex items-center justify-center">
            <p className="flex items-center justify-center text-white z-[5] absolute">
              Health Care
            </p>
            <Image
              src="/images/bg-success3.png"
              className=" rounded-[18px]  object-cover blur-[2px]"
              alt="Health Care Project"
              width={414}
              height={174}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className=" h-auto rounded-b-[18px] text-white px-[16px] pt-[16px] pb-[30px] lg:p-[24px] lg:pb-[40px]">
            <p className="text-[16px] lg:text-[18px] font-semibold">
              Project 3
            </p>
            <p className="line-clamp-3 opacity-70 pt-[15px] text-[12px] lg:text-[14px]">
              Healthcare providers are witnessing notable enhancements in
              service quality and operational efficiency with Emerald’s
              cutting-edge platform. Our asset card system empowers healthcare
              facilities...
            </p>
            <p className="text-[white] text-[12px] mt-[20px] flex items-center gap-[6px]">
              <span>Explore More</span>
              <GoArrowUpRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
