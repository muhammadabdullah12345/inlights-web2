import Header from "@/components/Header";
import Image from "next/image";

function page() {
  return (
    <div className="font-manrope">
      <div
        className="w-full min-h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/images/about.png')",
        }}
      >
        <Header />

        <div className="pt-10 md:pt-32 px-4 sm:px-10 md:px-20 lg:px-48 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium">
            About the Company
          </h1>

          <p className="pt-6 pb-16 text-sm sm:text-base md:text-lg opacity-70 font-normal leading-relaxed">
            Founded in 2021, Inlights is a forward-thinking digital solutions
            company that specializes in web development, product design, and AI
            automation services. We are committed to transforming ideas into
            innovative digital experiences, helping businesses thrive in an
            ever-evolving digital landscape. Our team of experts blends
            creativity with cutting-edge technology to deliver customized
            solutions that are efficient, user-friendly, and scalable and
            streamline processes, enhance user experiences, and drive growth. At
            Inlights, we illuminate the path to success, empowering our clients
            with the tools they need to stand out and excel in today&apos;s
            competitive market.
          </p>
        </div>
      </div>
      <div
        className="bg-black text-white items-center justify-center flex-col gap-10 hidden md:flex"
        style={{
          backgroundImage: "url('/images/statsback.png')", // Path to your image
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          height: "100vh", // Full height of the viewport
          width: "100%", // Full width
        }}
      >
        <h1 className="font-[500] text-[40px]">A Brief History</h1>
        <Image src="/images/about1.png" alt="about" height={270} width={1143} />
      </div>
    </div>
  );
}

export default page;
