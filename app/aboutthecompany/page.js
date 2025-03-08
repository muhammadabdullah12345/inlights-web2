import Header from "@/components/Header";

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
        <div className="pt-[128px] text-white text-center px-[269px]">
          <h1 className="font-[500] text-[50px]">About the Company</h1>
          <p className="font-[400] text-[18px] pt-5 opacity-70">
            Founded in 2021, Inlights is a forward-thinking digital solutions
            company that specializes in web development, product design, and AI
            automation services. We are committed to transforming ideas into
            innovative digital experiences, helping businesses thrive in an
            ever-evolving digital landscape. Our team of experts blends
            creativity with cutting-edge technology to deliver customized
            solutions that are efficient, user-friendly, and scalable and
            streamline processes, enhance user experiences, and drive growth. At
            Inlights, we illuminate the path to success, empowering our clients
            with the tools they need to stand out and excel in today’s
            competitive market.
          </p>
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
        <h1 className="font-[500] text-[40px]">A Brief History</h1>
        <img src="/images/about1.png" alt="" className="" />
      </div>
    </div>
  );
}

export default page;
