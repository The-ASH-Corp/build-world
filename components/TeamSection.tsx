"use client";

import { motion } from "framer-motion";
import { homeData } from "@/data/homeData";

export default function TeamSection() {
  const { team } = homeData;

  return (
    <section className="relative w-full bg-[#050505] py-24 xl:py-32 overflow-hidden">
      <div className="max-w-[1533px] mx-auto px-0 md:px-6 xl:px-24">
        
        {/* Header */}
        <div className="flex flex-col items-start md:items-center mb-10 md:mb-16 xl:mb-24 text-left md:text-center px-6 md:px-0">
          <h2 className="font-['Menbere'] text-[36px] md:text-[85px] font-bold text-white capitalize leading-none mb-4 md:mb-6">
            {team.title}
          </h2>
          <p className="font-['Menbere'] text-[14px] md:text-[18px] text-[#b0b0b0] max-w-2xl mx-0 md:mx-auto">
            {team.subtitle}
          </p>
        </div>

        {/* Team Members */}
        <div className="flex flex-col gap-16">
          {team.members.map((member, index) => (
            <div 
              key={index}
              className="relative w-full flex flex-col-reverse xl:flex-row items-center xl:items-stretch bg-[#0e374f] rounded-none md:rounded-t-[60px] md:rounded-b-[30px] xl:rounded-b-none min-h-[500px]"
            >

              {/* Content Container (Left Side) */}
              <div className="relative z-10 w-full xl:w-[60%] p-6 md:p-16 xl:p-20 flex flex-col justify-center">
                
                <div className="hidden xl:flex flex-col gap-1 mb-8">
                  <h3 className="font-['Menbere'] font-bold text-[28px] md:text-[32px] text-white capitalize">
                    {member.name}
                  </h3>
                  <p className="font-['Menbere'] font-medium text-[14px] text-[#719cb3] uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>

                <p className="font-['Menbere'] text-[14px] md:text-[16px] text-[#cfcfcf] md:text-white leading-[1.8] text-left md:text-justify mb-8 xl:mb-12 font-medium">
                  {member.description}
                </p>

                {/* Carousel Dots */}
                <div className="flex items-center justify-center xl:justify-start gap-2 mt-auto pb-4 md:pb-0">
                   <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white"></div>
                   <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/40"></div>
                </div>
              </div>

              {/* Image Container (Right Side) */}
              <div className="relative z-0 w-full xl:w-[40%] h-[400px] xl:h-auto min-h-[400px] xl:min-h-[500px] flex items-end justify-center xl:justify-end overflow-hidden pt-12 xl:pt-0 bg-[#072436] rounded-tr-[120px] rounded-tl-none md:rounded-t-[60px]">
                {/* Background "D" Letter or Graphic - Simplified to a massive D */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0a1e2b] font-['Menbere'] text-[300px] xl:text-[500px] font-black leading-none select-none pointer-events-none">
                  D
                </div>
                
                {/* Actual Person Image */}
                <div className="relative z-10 w-full h-full max-w-[500px] flex items-end justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-[85%] xl:w-[90%] h-[85%] xl:h-[90%] object-contain object-bottom"
                  />
                  
                  {/* Name tag overlaid on image */}
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center">
                     <div className="w-1 h-10 bg-[#2991ce] mr-4"></div>
                     <div className="flex flex-col">
                       <span className="font-['Menbere'] font-bold text-[18px] md:text-[20px] text-white leading-tight">{member.name}</span>
                       <span className="font-['Menbere'] text-[11px] md:text-[12px] text-[#719cb3] uppercase">{member.role}</span>
                     </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
