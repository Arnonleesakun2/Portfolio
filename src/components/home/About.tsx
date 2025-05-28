import Link from "next/link";
import React from "react";
import profile from "../../../public/img/profiles.png";
import Image from "next/image";
import MotionMain from "../motions/MotionMain";
import { PanelsTopLeft, Database } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#6D80C7] h-screen flex jutify-center items-center">
      <div className="maincontainer md:grid md:grid-cols-2 items-center gap-10">
        <div className="">
          <MotionMain>
            <div className="space-y-3 text-gray-200">
              <div className="text-[75px] font-semibold leading-tight">
                Hello I am
                <span className="text-highlight"> Pop!</span>
              </div>
              <div className="text-[19px] font-medium leading-relaxed max-w-[600px]">
                ผมเป็นจบใหม่สนใจในการทำเว็บไซต์ในสายงาน
                <span className="text-highlight"> Fullstack Developer </span>
                งานในด้าน <span className="text-highlight">Frontend</span> และ
                <span className="text-highlight"> Backend </span>
                ผมตั้งใจจะสร้างผลงานใหม่ ๆ และพร้อมอย่างต่อเนื่อง
                เลือกให้สามารถสร้างสรรค์ผลงาน และไปพร้อมในงานท้าทาย!
              </div>
              <div className="">
                <Link
                  href="/files/resume.pdf"
                  target="_blank"
                  className="font-shortstack text-white"
                >
                  <div className="btn rounded-full bg-gradient-to-r from-[#FBBF24] to-orange-400 border-none text-white hover:opacity-90 transition-all shadow-md hover:shadow-lg">
                    View Resume
                  </div>
                </Link>
              </div>
            </div>
          </MotionMain>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <MotionMain>
              <div className="border border-white/20 hover:border-gray-300 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 backdrop-blur-md rounded-xl p-6 shadow-2xl">
                <div className="flex flex-col justify-center items-center space-y-2 text-gray-200">
                  <div className="p-2 rounded-full bg-highlight">
                    <PanelsTopLeft />
                  </div>
                  <h1 className="font-bold">Web Developer</h1>
                  <p className="text-center">
                    React, Next.js, Html, Javascript, Css
                  </p>
                </div>
              </div>
            </MotionMain>
            <MotionMain>
              <div className="border border-white/20 hover:border-gray-300 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 backdrop-blur-md rounded-xl p-6 shadow-2xl">
                <div className="flex flex-col justify-center items-center space-y-2 text-gray-200">
                  <div className="p-2 rounded-full bg-highlight ">
                    <Database />
                  </div>
                  <h1 className="font-bold">Database</h1>
                  <p className="text-center">
                    Mysql, Postgresql, SQLite, MongoDB
                  </p>
                </div>
              </div>
            </MotionMain>
          </div>
        </div>
        <MotionMain>
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
                </div>
              </div>
              <div className="animate-bounce absolute z-10 left-0 top-[100px] font-shortstack py-3 px-5 bg-black text-white rounded-full shadow-lg">
                Name: Arnon Leesakun
              </div>
              <div className="animate-bounce absolute z-10 left-0 top-[155px] font-shortstack py-3 px-5 bg-black text-white rounded-full shadow-lg">
                Nickname: Pop
              </div>
              <div className="animate-bounce absolute z-10 left-0 top-[210px] font-shortstack py-3 px-5 bg-black text-white rounded-full shadow-lg">
                Age: 23
              </div>
              <div className="animate-bounce absolute z-10 right-0 top-[300px] font-shortstack py-3 px-5 bg-black text-white rounded-full shadow-lg">
                Thailand
              </div>
            </div>
          </div>
        </MotionMain>
      </div>
    </div>
  );
};

export default About;
