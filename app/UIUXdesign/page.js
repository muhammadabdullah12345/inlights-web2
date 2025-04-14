import Header from "@/components/Header";
import Image from "next/image";

function page() {
  return (
    <div className="font-manrope">
      <div
        style={{
          backgroundImage: "url('/images/about.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
        className="min-h-screen"
      >
        <Header />
        <div className="text-white px-6 md:px-[70px] py-10 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="font-medium text-3xl sm:text-4xl md:text-[50px]">
              UI/UX Design
            </h1>
            <p className="font-normal text-base md:text-[18px] pt-4 md:pt-5 opacity-70">
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
          <div className="pt-6 md:pt-20 flex justify-center">
            <Image
              src="/images/uiux.png"
              alt="design"
              height={545}
              width={741}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div
        className="bg-black text-white px-6 md:px-[175px] py-12 flex justify-center flex-col gap-8 md:gap-16"
        style={{
          backgroundImage: "url('/images/statsback.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <h1 className="font-normal text-3xl md:text-[44px] text-center md:text-left">
          Process that moves things forward
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-5">
          <div className="flex justify-center">
            <Image
              src="/images/grp1.png"
              alt="design"
              height={201}
              width={271}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/grp2.png"
              alt="design"
              height={201}
              width={271}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/grp3.png"
              alt="design"
              height={201}
              width={271}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/grp3.png"
              alt="design"
              height={201}
              width={271}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
