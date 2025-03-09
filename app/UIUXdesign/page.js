import Header from "@/components/Header";
import Image from "next/image";

function page() {
  return (
    <div className="font-manrope">
      <div
        style={{
          backgroundImage: "url('/images/about.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          height: "100vh", // Full height of the viewport
          width: "100%", // Full width
        }}
      >
        <Header />
        <div className=" text-white flex items-center justify-between px-[70px] ">
          <div className="w-1/2">
            <h1 className="font-[500] text-[50px]">UI/UX Design</h1>
            <p className="font-[400] text-[18px] pt-5 opacity-70">
              Our product design services cover the entire cycle from
              conceptualization to the development of successful products,
              including strategic development, technical engineering, and
              aesthetic performance. We can assist you at every step of the
              product development process through our comprehensive UI/UX design
              services and integrated approach. Our ability to design innovative
              mobile and web user experiences ensures that your product will
              appeal to its intended audience.
            </p>
          </div>
          <div className="pt-20">
            <Image
              src="/images/uiux.png"
              alt="design"
              height={545}
              width={741}
            />
          </div>
        </div>
      </div>

      <div
        className="bg-black text-white flex px-[175px] justify-center flex-col gap-16"
        style={{
          backgroundImage: "url('/images/statsback.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          height: "100vh", // Full height of the viewport
          width: "100%", // Full width
        }}
      >
        <h1 className="font-[400] text-[44px]">
          Process that moves things forward
        </h1>
        <Image src="/images/uiux2.png" alt="design" height={202} width={1137} />
      </div>
    </div>
  );
}

export default page;
