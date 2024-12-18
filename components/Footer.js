import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div className="pt-[80px] pb-[30px] px-5 lg:px-[120px] bg-[#0D0D1D] text-white font-manrope">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <img src="/images/logo.png" alt="InLights Logo" />
          <div className="text-[#B5B5B5] text-[14px]">
            <p className="mt-4">INLIGHTS</p>
            <p>HQ - The Garage, KACST, Riyadh, Saudi Arabia</p>
            <p>NSTP, NUST, H-12, Islamabad, Pakistan</p>
            <p>NASTP, Nur Khan Airbase, Rawalpindi, Pakistan</p>
          </div>
        </div>
        <div className="flex  gap-16 mt-10 lg:mt-0">
          <div className="flex flex-col gap-4 text-[#B5B5B5] text-[14px]">
            <span className="text-[16px] text-white">Quick Links</span>
            <span>About Us</span>
            <span>Inlights Security</span>
            <span>Inlights Traffic</span>
            <span>Careers</span>
          </div>
          <div className="flex flex-col gap-4 text-[#B5B5B5] text-[14px]">
            <span className="text-[16px] text-white">Solutions</span>
            <span>Web Development</span>
            <span>Product Design</span>
            <span>AI Automation</span>
            <span>Computer Vision</span>
          </div>
        </div>
      </div>
      <div className="text-[#B5B5B5] text-[14px] mt-10 md:mt-0">
        <p className="text-[16px] font-semibold text-white mb-1">Lets Talk</p>
        <p>Enter your e-mail and our </p>
        <p>representatives will reach out to you.</p>
        <div className="flex items-center gap-2 mt-4 mb-8">
          <input
            placeholder="Email"
            className="rounded-[8px] py-[8px] px-[16px] border border-[#FFFFFF80] bg-[#13171C] w-full max-w-[250px] text-white"
          />
          <button className="bg-white h-[40px] w-[40px] rounded-[12px] flex items-center justify-center text-black">
            <GoArrowUpRight />
          </button>
        </div>
        <img src="/images/footer.png" alt="Footer Decoration" />
      </div>
      <div className="mt-[24px] bg-[#6b6a6a] h-[1px] w-full"></div>
      <div className="flex items-center justify-between text-[14px] mt-[24px]">
        <span>admin@inlights.com.pk</span>
        <span>&copy; 2024 Inlights. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
