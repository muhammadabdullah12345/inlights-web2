import Header from "./Header";
import Herosection from "./Herosection";

// "use client";
function BgVideoPart() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full absolute inset-0 object-cover"
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 flex flex-col h-full">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <Herosection />
        </div>
      </div>
    </div>
  );
}

export default BgVideoPart;
