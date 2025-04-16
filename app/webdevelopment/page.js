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
        <div className="text-white px-6 md:px-[70px] py-10 lg:py-28 flex flex-col lg:flex-row items-center justify-between md:gap-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex items-center justify-center flex-col">
            <h1 className="font-medium text-xl lg:text-[50px]">
              Web Development
            </h1>
            <p className="font-normal text-base lg:text-[18px] pt-4 md:pt-5 opacity-70">
              Attracting and retaining customers in todays digital age requires
              a strong online presence. A website that is visually appealing,
              easy to navigate, and optimized for search engines is essential to
              building your brand and reaching your target audience. Our web
              development services can help you achieve all of these goals and
              more. Our web development services include everything from initial
              planning and design to development, testing, and deployment. We
              use the latest web technologies to create websites that are
              responsive, fast-loading, and optimized for search engines. We
              also offer ongoing maintenance and support to ensure that your
              website remains up-to-date and secure.
            </p>
          </div>
          <div className="flex justify-center h-[200px] w-[230px] lg:h-auto lg:w-auto">
            <Image
              src="/images/webdev.png"
              alt="web"
              height={395}
              width={407}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div
        className="bg-black text-white flex items-center justify-center flex-col gap-6 md:gap-10 py-12 px-4"
        style={{
          backgroundImage: "url('/images/statsback.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <h1 className="font-normal text-3xl md:text-[44px] text-center">
          Our Tech Stack
        </h1>

        <div className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-between gap-4 md:gap-16 px-7 md:px-0">
          <div className="flex justify-center">
            <Image
              src="/images/nodejs1.png"
              alt="Node.js"
              height={156}
              width={205}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/express.png"
              alt="Express"
              height={156}
              width={205}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/react.png"
              alt="React"
              height={156}
              width={205}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/mongodb.png"
              alt="MongoDB"
              height={156}
              width={205}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-between gap-4 md:gap-16 px-7 md:px-0">
          <div className="flex justify-center">
            <Image
              src="/images/nodejs1.png"
              alt="Node.js"
              height={156}
              width={205}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/express.png"
              alt="Express"
              height={156}
              width={205}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/react.png"
              alt="React"
              height={156}
              width={205}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/mongodb.png"
              alt="MongoDB"
              height={156}
              width={205}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
