"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const testimonials = [
  {
    text: "InLights Solution has transformed our campus management. With real-time tracking and automated scheduling, our facilities are always in top condition, allowing us to focus on educating our students.",
    name: "Cameron Williamson",
    role: "CEO",
    image: "/images/feedback3.png",
  },
  {
    text: "InLights Solution has transformed our campus management. With real-time tracking and automated scheduling, our facilities are always in top condition, allowing us to focus on educating our students.",
    name: "Cameron Williamson",
    role: "CEO",
    image: "/images/feedback3.png",
  },
  {
    text: "InLights Solution has transformed our campus management. With real-time tracking and automated scheduling, our facilities are always in top condition, allowing us to focus on educating our students.",
    name: "Cameron Williamson",
    role: "CEO",
    image: "/images/feedback3.png",
  },
  {
    text: "InLights Solution has transformed our campus management. With real-time tracking and automated scheduling, our facilities are always in top condition, allowing us to focus on educating our students.",
    name: "Cameron Williamson",
    role: "CEO",
    image: "/images/feedback3.png",
  },
  {
    text: "InLights Solution has transformed our campus management. With real-time tracking and automated scheduling, our facilities are always in top condition, allowing us to focus on educating our students.",
    name: "Cameron Williamson",
    role: "CEO",
    image: "/images/feedback3.png",
  },
];

function GeoFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    }, 300);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="pb-10 px-3 sm:px-5 lg:px-16 bg-[#050919] font-manrope pt-0 2xl:py-40">
      <div className="flex justify-center items-center">
        <div className="font-[400] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center max-w-4xl my-8 md:my-0">
          Don&apos;t take our word, see what customers say about us
        </div>
      </div>
      <div
        className="py-10 sm:py-14 md:py-16 lg:py-20 px-3 sm:px-5 lg:px-16 rounded-3xl mt-8 sm:mt-12 lg:mt-16 relative overflow-hidden"
        style={{
          boxShadow: "0px 0px 30px 0px #1A36A3CC",
        }}
      >
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center opacity-70 font-light">
            <p>{testimonials[currentIndex].text}</p>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center mt-6 sm:mt-8">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="rounded-full"
              width={42}
              height={42}
            />
            <p className="text-sm lg:text-base text-white pt-1">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-xs text-white opacity-50">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Mobile layout: navigation buttons appear side by side at the bottom */}
        <div className="flex items-center justify-center gap-4 mt-8 ">
          <button
            onClick={prevTestimonial}
            className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 disabled:opacity-50 lg:hidden"
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <FaArrowLeft size={16} className="sm:text-base md:text-lg" />
          </button>

          {/* Dots Navigation - only visible on mobile */}
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                  index === currentIndex
                    ? "bg-white w-4 sm:w-5 rounded-md"
                    : "bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 disabled:opacity-50 lg:hidden"
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <FaArrowRight size={16} className="sm:text-base md:text-lg" />
          </button>
        </div>

        {/* Desktop layout - this is invisible on mobile but shows at larger sizes 
             We're keeping both layouts to match your exact design */}
        <div className="hidden lg:flex items-center justify-between absolute left-5 right-5 top-1/2 -translate-y-1/2 pointer-events-none">
          <button
            onClick={prevTestimonial}
            className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 disabled:opacity-50 pointer-events-auto"
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 disabled:opacity-50 pointer-events-auto"
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GeoFeedback;
