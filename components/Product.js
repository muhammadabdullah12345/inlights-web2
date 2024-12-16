import { GoArrowUpRight } from "react-icons/go";

function Product() {
  return (
    <div className="bg-[#050919]">
      <div className="px-5 lg:px-[70px]  py-[130px] font-manrope">
        <div className=" lg:text-left">
          <p className="text-[40px]  font-[500] text-center text-white">
            Our Products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center sm:gap-[24px] sm:mt-10 mt-5 gap-[5px]">
          <div
            className="px-5 lg:px-[34px] pt-5 lg:pt-[34px] pb-0 bg-[#13171C] my-5 rounded-[20px] lg:rounded-[34px] relative w-full  lg:w-[50%] h-[591px] shadow-xl "
            style={{
              boxShadow: " 0px 0px 30px 0px #1A36A3CC",
            }}
          >
            <span className="bg-white text-[#414C5C] text-[10px] lg:text-[12px] rounded-[24px] lg:rounded-[48px] py-[4px] lg:py-[6px] px-2">
              Traffic Management
            </span>
            <div className="text-white text-[24px] lg:text-[34px] mt-5 lg:mt-10">
              <p>Manage City Traffic with AI</p>
            </div>
            <p className="text-white text-[14px] lg:text-[16px] mt-5 lg:mt-10 opacity-70">
              InLights revolutionizes your planning with advanced forecasting
              tools. Anticipate needs, schedule proactively, and optimize
              resources to keep operations running smoothly.
            </p>
            <p className="text-white text-[12px] lg:text-[12px] mt-5 lg:mt-7 flex items-center gap-[6px] opacity-70">
              <span>Discover Insights</span>
              <GoArrowUpRight />
            </p>
            <img
              src="/images/product1.png"
              alt="product1"
              //   className="w-full lg:w-[80%] h-auto mt-5 lg:mt-10"
              className="w-full lg:w-[566px] h-auto mt-[98px] absolute bottom-0 mx-[-25px]"
            />
          </div>

          <div
            className="px-5 lg:px-[34px] pt-5 lg:pt-[34px] pb-0 bg-[#13171C] my-5 rounded-[20px] lg:rounded-[34px] relative w-full  lg:w-[50%] h-[591px] shadow-xl shadow-[#1A36A3CC]"
            style={{
              boxShadow: " 0px 0px 30px 0px #1A36A3CC",
            }}
          >
            <span className="bg-white text-[#414C5C] text-[10px] lg:text-[12px] rounded-[24px] lg:rounded-[48px] py-[4px] lg:py-[6px] px-2">
              Premise Security
            </span>
            <div className="text-white text-[24px] lg:text-[34px] mt-5 lg:mt-10">
              <p>Manage who Enters your Premises</p>
            </div>
            <p className="text-white text-[14px] lg:text-[16px] mt-5 lg:mt-10 opacity-70">
              InLights revolutionizes your planning with advanced forecasting
              tools. Anticipate needs, schedule proactively, and optimize
              resources to keep operations running smoothly.
            </p>
            <p className="text-white text-[12px] lg:text-[12px] mt-5 lg:mt-7 flex items-center gap-[6px] opacity-70">
              <span>Discover Insights</span>
              <GoArrowUpRight />
            </p>
            <img
              src="/images/product2.png"
              alt="product1"
              //   className="w-full lg:w-[80%] h-auto mt-5 lg:mt-10"
              className="w-full lg:w-[561px] h-auto mt-5 lg:mt-11 absolute bottom-0 mx-[-15px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
