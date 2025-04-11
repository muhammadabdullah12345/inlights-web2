import Header from "./Header";
import Herosection from "./Herosection";

// "use client";
function BgVideoPart() {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        preload="auto"
        className="w-full h-full absolute inset-0 object-cover"
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <Header />
      <Herosection />
      {/* <div className="">
        <Navbar />
        <Herosection />
      </div> */}
    </div>
  );
}

export default BgVideoPart;
