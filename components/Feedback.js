"use client";
import Image from "next/image";
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
    <div className="py-[40px] px-[70px] bg-[#050919] font-manrope">
      <div
        className="py-[80px] px-5 lg:px-[70px] rounded-[32px] mt-16"
        style={{
          boxShadow: " 0px 0px 30px 0px #1A36A3CC",
        }}
      >
        <div className="text-white text-[20px] lg:text-[24px] text-center opacity-70 font-[300]">
          <p>{testimonials[currentIndex].text}</p>
        </div>

        <div className="flex items-center justify-between">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className=" bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className=" bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <Image
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className=" rounded-full"
            width={42}
            height={42}
          />
          <p className="text-[14px] lg:text-[16px] text-white pt-[4px]">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-[12px] text-white opacity-50">
            {testimonials[currentIndex].role}
          </p>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex
                  ? "bg-white w-5 rounded-md"
                  : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GeoFeedback;
