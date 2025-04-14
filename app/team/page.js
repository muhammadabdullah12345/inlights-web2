import Image from "next/image";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

function page() {
  return (
    <div className="bg-[#03030E] font-manrope text-white py-8 px-4 sm:py-12 sm:px-8 lg:py-[80px] lg:px-[120px]">
      <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-[500]">
        Our Team
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 pt-6 sm:pt-10 lg:pt-14 gap-4 sm:gap-6 lg:gap-[70px]">
        {/* Team Member 1 */}
        <div>
          <div className="relative">
            <Image
              src="/images/team1.png"
              alt="team"
              width={350}
              height={417}
              className="w-full h-auto"
            />
            <div className="absolute flex gap-1 sm:gap-2 right-1 sm:right-4 top-1 sm:top-3">
              <CiFacebook className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <FaInstagram className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <CiLinkedin className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
            </div>
          </div>
          <h2 className="text-base sm:text-[20px] font-[600] pt-2 sm:pt-[15px]">
            Esther Howards
          </h2>
          <h3 className="text-sm sm:text-[16px] font-[400] pt-1 sm:pt-[15px] text-white opacity-80">
            Founder & CEO
          </h3>
        </div>

        {/* Team Member 2 */}
        <div>
          <div className="relative">
            <Image
              src="/images/team2.png"
              alt="team"
              width={350}
              height={417}
              className="w-full h-auto"
            />
            <div className="absolute flex gap-1 sm:gap-2 right-1 sm:right-4 top-1 sm:top-3">
              <CiFacebook className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <FaInstagram className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <CiLinkedin className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
            </div>
          </div>
          <h2 className="text-base sm:text-[20px] font-[600] pt-2 sm:pt-[15px]">
            Cameron Williamson
          </h2>
          <h3 className="text-sm sm:text-[16px] font-[400] pt-1 sm:pt-[15px] text-white opacity-80">
            Marketing Head
          </h3>
        </div>

        {/* Team Member 3 */}
        <div>
          <div className="relative">
            <Image
              src="/images/team3.png"
              alt="team"
              width={350}
              height={417}
              className="w-full h-auto"
            />
            <div className="absolute flex gap-1 sm:gap-2 right-1 sm:right-4 top-1 sm:top-3">
              <CiFacebook className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <FaInstagram className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <CiLinkedin className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
            </div>
          </div>
          <h2 className="text-base sm:text-[20px] font-[600] pt-2 sm:pt-[15px]">
            Liam Cooper
          </h2>
          <h3 className="text-sm sm:text-[16px] font-[400] pt-1 sm:pt-[15px] text-white opacity-80">
            Marketing Head
          </h3>
        </div>

        {/* Team Member 4 */}
        <div>
          <div className="relative">
            <Image
              src="/images/team1.png"
              alt="team"
              width={350}
              height={417}
              className="w-full h-auto"
            />
            <div className="absolute flex gap-1 sm:gap-2 right-1 sm:right-4 top-1 sm:top-3">
              <CiFacebook className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <FaInstagram className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <CiLinkedin className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
            </div>
          </div>
          <h2 className="text-base sm:text-[20px] font-[600] pt-2 sm:pt-[15px]">
            Esther Howards
          </h2>
          <h3 className="text-sm sm:text-[16px] font-[400] pt-1 sm:pt-[15px] text-white opacity-80">
            Founder & CEO
          </h3>
        </div>

        {/* Team Member 5 */}
        <div>
          <div className="relative">
            <Image
              src="/images/team2.png"
              alt="team"
              width={350}
              height={417}
              className="w-full h-auto"
            />
            <div className="absolute flex gap-1 sm:gap-2 right-1 sm:right-4 top-1 sm:top-3">
              <CiFacebook className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <FaInstagram className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <CiLinkedin className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
            </div>
          </div>
          <h2 className="text-base sm:text-[20px] font-[600] pt-2 sm:pt-[15px]">
            Cameron Williamson
          </h2>
          <h3 className="text-sm sm:text-[16px] font-[400] pt-1 sm:pt-[15px] text-white opacity-80">
            Marketing Head
          </h3>
        </div>

        {/* Team Member 6 */}
        <div>
          <div className="relative">
            <Image
              src="/images/team3.png"
              alt="team"
              width={350}
              height={417}
              className="w-full h-auto"
            />
            <div className="absolute flex gap-1 sm:gap-2 right-1 sm:right-4 top-1 sm:top-3">
              <CiFacebook className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <FaInstagram className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <CiLinkedin className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
            </div>
          </div>
          <h2 className="text-base sm:text-[20px] font-[600] pt-2 sm:pt-[15px]">
            Liam Cooper
          </h2>
          <h3 className="text-sm sm:text-[16px] font-[400] pt-1 sm:pt-[15px] text-white opacity-80">
            Marketing Head
          </h3>
        </div>

        {/* Team Member 7 */}
        <div>
          <div className="relative">
            <Image
              src="/images/team1.png"
              alt="team"
              width={350}
              height={417}
              className="w-full h-auto"
            />
            <div className="absolute flex gap-1 sm:gap-2 right-1 sm:right-4 top-1 sm:top-3">
              <CiFacebook className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <FaInstagram className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <CiLinkedin className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
            </div>
          </div>
          <h2 className="text-base sm:text-[20px] font-[600] pt-2 sm:pt-[15px]">
            Esther Howards
          </h2>
          <h3 className="text-sm sm:text-[16px] font-[400] pt-1 sm:pt-[15px] text-white opacity-80">
            Founder & CEO
          </h3>
        </div>

        {/* Team Member 8 */}
        <div>
          <div className="relative">
            <Image
              src="/images/team2.png"
              alt="team"
              width={350}
              height={417}
              className="w-full h-auto"
            />
            <div className="absolute flex gap-1 sm:gap-2 right-1 sm:right-4 top-1 sm:top-3">
              <CiFacebook className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <FaInstagram className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <CiLinkedin className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
            </div>
          </div>
          <h2 className="text-base sm:text-[20px] font-[600] pt-2 sm:pt-[15px]">
            Cameron Williamson
          </h2>
          <h3 className="text-sm sm:text-[16px] font-[400] pt-1 sm:pt-[15px] text-white opacity-80">
            Marketing Head
          </h3>
        </div>

        {/* Team Member 9 */}
        <div>
          <div className="relative">
            <Image
              src="/images/team3.png"
              alt="team"
              width={350}
              height={417}
              className="w-full h-auto"
            />
            <div className="absolute flex gap-1 sm:gap-2 right-1 sm:right-4 top-1 sm:top-3">
              <CiFacebook className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <FaInstagram className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
              <CiLinkedin className="bg-white text-black w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-xl" />
            </div>
          </div>
          <h2 className="text-base sm:text-[20px] font-[600] pt-2 sm:pt-[15px]">
            Liam Cooper
          </h2>
          <h3 className="text-sm sm:text-[16px] font-[400] pt-1 sm:pt-[15px] text-white opacity-80">
            Marketing Head
          </h3>
        </div>
      </div>
    </div>
  );
}

export default page;
