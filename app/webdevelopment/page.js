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
        <div className=" text-white flex items-center justify-between px-[70px] py-28">
          <div className="w-1/2">
            <h1 className="font-[500] text-[50px]">Web Development</h1>
            <p className="font-[400] text-[18px] pt-5 opacity-70">
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
          <div>
            <Image
              src="/images/webdev.png"
              alt="web"
              height={395}
              width={497}
            />
          </div>
        </div>
      </div>
      <div
        className="bg-black text-white flex items-center justify-center flex-col gap-10"
        style={{
          backgroundImage: "url('/images/statsback.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          height: "100vh", // Full height of the viewport
          width: "100%", // Full width
        }}
      >
        <h1 className="font-[400] text-[44px]">Our Tech Stack</h1>
        <div className="flex items-center justify-between gap-16">
          <Image src="/images/nodejs1.png" alt="web" height={156} width={255} />
          <Image src="/images/express.png" alt="web" height={156} width={255} />
          <Image src="/images/react.png" alt="web" height={156} width={255} />
          <Image src="/images/mongodb.png" alt="web" height={156} width={255} />
        </div>
        <div className="flex items-center justify-between gap-16">
          <Image src="/images/nodejs1.png" alt="web" height={156} width={255} />
          <Image src="/images/express.png" alt="web" height={156} width={255} />
          <Image src="/images/react.png" alt="web" height={156} width={255} />
          <Image src="/images/mongodb.png" alt="web" height={156} width={255} />
        </div>
      </div>
    </div>
  );
}

export default page;
