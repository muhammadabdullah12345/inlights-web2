"use client";
import { useState } from "react";
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-[160px] px-[70px] bg-[#050919] font-manrope">
      <div
        className="py-[80px] px-5 lg:px-[70px] rounded-[32px] mt-16"
        style={{
          boxShadow: " 0px 0px 30px 0px #1A36A3CC",
        }}
      >
        <div className="text-white text-[20px] lg:text-[24px] text-center opacity-70 font-[300]">
          <p>{testimonials[currentIndex].text}</p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center mt-6">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-[32px] md:w-[42px] h-[32px] md:h-[42px] rounded-full"
          />
          <p className="text-[14px] lg:text-[16px] text-white pt-[4px]">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-[12px] text-white opacity-50">
            {testimonials[currentIndex].role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GeoFeedback;
