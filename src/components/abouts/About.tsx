import Link from "next/link";
import React from "react";
import profile from "../../../public/img/profiles.png";
import Image from "next/image";
import { profile as profileData } from "@/utils/profile";

const About = () => {
  return (
    <div className="md:grid md:grid-cols-2 items-center mt-20 gap-10">
      <div className="space-y-6">
        <div className="text-[75px] font-semibold leading-tight">
          Hello I am
          <span className="text-highlight"> Pop!</span>
        </div>
        <div className="font-thai text-[19px] font-medium leading-relaxed max-w-[600px]">
          ผมเป็นจบใหม่สนใจในการทำเว็บไซต์ในสายงาน
          <span className="text-highlight"> Fullstack Developer </span>
          งานในด้าน <span className="text-highlight">Frontend</span> และ
          <span className="text-highlight"> Backend </span>
          ผมตั้งใจจะสร้างผลงานใหม่ ๆ และพร้อมอย่างต่อเนื่อง
          เลือกให้สามารถสร้างสรรค์ผลงาน และไปพร้อมในงานท้าทาย!
        </div>
        <div className="flex gap-4 pt-4">
          <Link
            href="/files/resume.pdf"
            target="_blank"
            className="font-shortstack text-white"
          >
            <div className="btn rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 border-none text-white hover:opacity-90 transition-all shadow-md hover:shadow-lg">
              View Resume
            </div>
          </Link>
          <Link
            href="/files/cv.pdf"
            target="_blank"
            className="font-shortstack"
          >
            <div className="btn rounded-full bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 transition-all shadow-sm hover:shadow-md">
              View CV
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <div className="relative">
          <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full h-[450px] relative">
                <Image
                  src={profile}
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  priority
                  quality={100}
                  className="object-cover object-center"
                />
              </div>
              <div className="border theme-border rounded-b-xl">
                <div className="py-8 px-8">
                  <div className="text-[40px] font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent flex items-center gap-3">
                    <span>Profile</span>
                    <div className="h-1 flex-grow bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    {profileData.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="group flex items-center transition-all hover:translate-x-2 duration-300 border-b theme-border hover:border-pink-500/70"
                        >
                          <span className="text-white font-semibold min-w-[100px] bg-gradient-to-r from-pink-500/80 to-yellow-500/80 px-2 py-1 rounded-lg mr-4 shadow-md group-hover:shadow-pink-500/30 transition-all">
                            {item.title}
                          </span>
                          <span className=" font-medium text-lg group-hover:text-pink-200 transition-colors duration-300">
                            {item.data}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-bounce absolute z-10 left-0 top-[100px] font-shortstack py-3 px-5 bg-black text-white rounded-full shadow-lg">
            Arnon Leesakun
          </div>
          <div className="animate-bounce absolute z-10 right-0 top-[300px] font-shortstack py-3 px-5 bg-black text-white rounded-full shadow-lg">
            Thailand
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
