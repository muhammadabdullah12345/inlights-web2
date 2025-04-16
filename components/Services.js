import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

function Services() {
  // Service data for easier maintenance
  const services = [
    {
      icon: "/images/service4.png",
      title: "Web Development",
      description:
        "Crafting dynamic user-centric websites with cutting-edge design and seamless functionality to elevate your standards.",
      link: "/webdevelopment",
    },
    {
      icon: "/images/service3.png",
      title: "Product Design",
      description:
        "Transforming raw ideas into innovative, user-focused products with seamless design and unmatched functionality.",
      link: "/UIUXdesign",
    },
    {
      icon: "/images/service2.png",
      title: "Computer Vision",
      description:
        "Empowering businesses with advanced computer vision solutions that unlock insights and automate processes with",
      link: "/",
    },
    {
      icon: "/images/service1.png",
      title: "AI Automation",
      description:
        "Revolutionizing workflows with AI-driven automation, delivering efficiency, accuracy, and smarter decision-making.",
      link: "/",
    },
  ];

  return (
    <div className="bg-[#050919] py-[60px] px-[16px] min-h-[713px] w-full lg:px-[70px] font-manrope">
      <div className="text-white">
        <p className="text-[28px] md:text-[40px] lg:text-[50px] font-[500] text-center">
          Our Services
        </p>

        <div className="mt-8 md:mt-12 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-[32px] p-[24px] text-white w-full"
              style={{
                boxShadow: "0px 0px 30px 0px #1A36A3CC",
              }}
            >
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={72}
                height={72}
              />
              <p className="text-[20px] font-semibold mt-2 text-white">
                {service.title}
              </p>
              <p className="text-[12px] md:text-[14px] text-white mt-2 font-[400] opacity-70 line-clamp-3">
                {service.description}
              </p>
              <Link
                className="text-white text-[12px] mt-5 flex items-center gap-[6px] group"
                href={service.link}
              >
                <span className="relative transition duration-300">
                  Discover Insights
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
