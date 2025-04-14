"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

function SuccessStories() {
  // Original card data
  const successStories = [
    {
      id: 1,
      category: "GeoHealth",
      image: "/images/bg-success1.png",
      title: "AI-Powered Physical Exercise Coach",
      description:
        "AI-powered exercise monitoring system for real-time pose detection, angle measurements, and form correction feedback for various exercises.",
      link: "/geohealth",
    },
    {
      id: 2,
      category: "Retrofarm",
      image: "/images/retro.png",
      title: "Retro & Vinatage E-commerce Store",
      description:
        "RetroFam offers a seamless shopping experience with advanced search, customization, and secure payment integration.",
      link: "/",
    },
    {
      id: 3,
      category: "Smart Traffic Lights",
      image: "/images/trafficsig.png",
      title: "Smart Traffic Lights System",
      description:
        "This system, deployed at F9 Park Islamabad, significantly reduces waiting times at intersections through automated, data-driven decision-making.",
      link: "/trafficmanagement",
    },
  ];

  // State to track the starting index of visible cards
  const [startIndex, setStartIndex] = useState(0);
  // State for transition effect
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle next navigation
  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % successStories.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Function to handle previous navigation
  const handlePrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setStartIndex(
        (prevIndex) =>
          (prevIndex - 1 + successStories.length) % successStories.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  // Get current visible cards in the right order
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < successStories.length; i++) {
      const index = (startIndex + i) % successStories.length;
      visibleCards.push(successStories[index]);
    }
    return visibleCards;
  };

  return (
    <div className="md:py-[80px] px-5 lg:px-[70px] md:pt-[120px] py-[30px] md:pb-[160px] font-manrope bg-[#050919]">
      <div className="text-white flex items-center justify-between">
        <p className="text-[22px] sm:text-[30px] lg:text-[40px] font-semibold text-white">
          Our Success Stories
        </p>
        <div className="flex gap-3 items-center justify-center">
          <button
            className="border border-[#B4BBC6] rounded-[900px] p-[8px] text-[#B4BBC6]"
            onClick={handlePrevious}
            aria-label="Previous slide"
          >
            <FaArrowLeftLong />
          </button>
          <button
            className="border border-[#B4BBC6] rounded-[900px] p-[8px] text-[#B4BBC6]"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Mobile view (stacked cards) */}
      <div className="mt-8 lg:hidden flex flex-col gap-6">
        {getVisibleCards().map((story, index) => (
          <div
            key={`${story.id}-${index}-mobile`}
            className={`rounded-2xl bg-[#050919] overflow-hidden transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{
              boxShadow: "0px 0px 30px 0px #1A36A3CC",
            }}
          >
            <div className="relative">
              <p className="flex items-center justify-center text-white z-[5] absolute inset-0">
                {story.category}
              </p>
              <Image
                src={story.image}
                className="w-full rounded-t-[18px] object-cover blur-[2px]"
                alt={`${story.category} Project`}
                width={414}
                height={174}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="h-auto rounded-b-[18px] text-white px-[16px] pt-[16px] pb-[20px]">
              <p className="text-[16px] font-semibold">{story.title}</p>
              <p className="opacity-70 pt-[12px] text-[12px] line-clamp-3">
                {story.description}
              </p>
              <Link
                className="text-white text-[12px] mt-[16px] flex items-center gap-[6px] group"
                href={story.link}
              >
                <span className="relative transition duration-300">
                  Read More
                  <span
                    className="absolute left-1/2 -bottom-[4px] w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%, white 31%)",
                    }}
                  ></span>
                </span>
                <GoArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet view (3-column grid) */}
      <div className="mt-14 hidden lg:grid grid-cols-3 gap-6">
        {getVisibleCards().map((story, index) => (
          <div
            key={`${story.id}-${index}-desktop`}
            className={`rounded-2xl bg-[#050919] overflow-hidden transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{
              boxShadow: "0px 0px 30px 0px #1A36A3CC",
            }}
          >
            <div className="relative flex items-center justify-center">
              <p className="flex items-center justify-center text-white z-[5] absolute">
                {story.category}
              </p>
              <Image
                src={story.image}
                className="rounded-[18px] object-cover blur-[2px]"
                alt={`${story.category} Project`}
                width={414}
                height={174}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="h-auto rounded-b-[18px] text-white px-[24px] pt-[24px] pb-[40px]">
              <p className="text-[18px] font-semibold">{story.title}</p>
              <p className="line-clamp-3 opacity-70 pt-[15px] text-[14px]">
                {story.description}
              </p>
              <Link
                className="text-white text-[12px] mt-[20px] flex items-center gap-[6px] group"
                href={story.link}
              >
                <span className="relative transition duration-300">
                  Explore More
                  <span
                    className="absolute left-1/2 -bottom-[4px] w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%, white 31%)",
                    }}
                  ></span>
                </span>
                <GoArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet view (2-column grid) */}
      <div className="mt-10 hidden sm:grid lg:hidden grid-cols-2 gap-4">
        {getVisibleCards().map((story, index) => (
          <div
            key={`${story.id}-${index}-tablet`}
            className={`rounded-2xl bg-[#050919] overflow-hidden transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{
              boxShadow: "0px 0px 30px 0px #1A36A3CC",
            }}
          >
            <div className="relative flex items-center justify-center">
              <p className="flex items-center justify-center text-white z-[5] absolute">
                {story.category}
              </p>
              <Image
                src={story.image}
                className="rounded-[18px] object-cover blur-[2px]"
                alt={`${story.category} Project`}
                width={414}
                height={174}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="h-auto rounded-b-[18px] text-white px-[16px] pt-[16px] pb-[30px]">
              <p className="text-[16px] font-semibold">{story.title}</p>
              <p className="line-clamp-3 opacity-70 pt-[15px] text-[12px]">
                {story.description}
              </p>
              <Link
                className="text-white text-[12px] mt-[16px] flex items-center gap-[6px] group"
                href={story.link}
              >
                <span className="relative transition duration-300">
                  Read More
                  <span
                    className="absolute left-1/2 -bottom-[4px] w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #552DDA 0%, #507BD0 100%, white 31%)",
                    }}
                  ></span>
                </span>
                <GoArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
