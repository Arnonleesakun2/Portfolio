import Link from "next/link";
import React from "react";
import profile from "../../../public/img/profiles.png";
import { contact } from "@/utils/contact";
import Image from "next/image";
import { Link2 } from "lucide-react";

const About = () => {
  return (
    <div className="md:grid md:grid-cols-2 items-center mt-20 gap-10">
      <div className="space-y-6">
        <div className="text-[75px] font-semibold leading-tight">
          Hello I am
          <span className="text-highlight"> Pop!</span>
        </div>
        <div className="font-thai text-[19px] font-medium leading-relaxed text-gray-700 max-w-[600px]">
          ผมเป็นจบใหม่สนใจในการทำเว็บไซต์ในสายงาน
          <span className="text-highlight"> Fullstack Developer </span>
          งานในด้าน <span className="text-highlight">Frontend</span> และ
          <span className="text-highlight"> Backend </span>
          ผมมีความตั้งใจที่จะเรียนรู้สิ่งใหม่ ๆ
          และพร้อมที่จะพัฒนาทักษะอย่างต่อเนื่อง
          เพื่อให้สามารถสร้างสรรค์ผลงานที่มีคุณภาพ
          และเติบโตไปพร้อมกับทีมในงานที่ท้าทายครับ!
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
              <div className="bg-black">
                <div className="py-6 px-8">
                  <div className="text-[40px] text-white font-semibold mb-4">
                    Contact...
                  </div>
                  <div className="space-y-4">
                    {contact.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="font-shortstack flex items-center gap-3 text-white"
                        >
                          <div className="text-pink-400">{item.icon}</div>
                          {item.link ? (
                            <div className="flex items-center gap-1 hover:translate-x-1 duration-300">
                              <Link
                                target="_blank"
                                href={item.link}
                                className="hover:text-pink-400 transition-colors"
                              >
                                {item.data}
                              </Link>
                              <Link2 className="text-pink-400" />
                            </div>
                          ) : (
                            <span className="">{item.data}</span>
                          )}
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
          <div className="absolute top-[230px] z-0 text-[120px] font-extrabold leading-[120px] text-gray-50/50">
            <div className="">RESUME</div>
            <div className="">RESUME</div>
            <div className="">RESUME</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
