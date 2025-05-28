import { education } from "@/utils/education";
import { experince } from "@/utils/experince";
import React from "react";
import MotionMain from "../motions/MotionMain";

const Journey = () => {
  return (
    <div className="bg-[#6D80C7] h-screen flex jutify-center items-center">
      <div className="md:grid md:grid-cols-2 gap-10  maincontainer">
        <MotionMain>
          <div className="border p-5 rounded-xl border-white/20 hover:border-gray-300 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 backdrop-blur-md shadow-2xl">
            <div className="text-4xl text-highlight font-semibold">
              Experience
            </div>
            <div>
              {experince.map((item, index) => {
                return (
                  <div key={index} className="p-2 rounded-lg text-gray-200">
                    <div className="font-thai text-[22px] leading-[25px] font-semibold">
                      {item.position}
                    </div>
                    <div className="font-thai text-[20px] mt-1leading-[25px] font-medium">
                      {item.company}
                    </div>
                    <div>
                      {item.description.map((des, index) => {
                        return (
                          <div
                            key={index}
                            className="font-thai mt-1 text-[17px] leading-[23px]"
                          >
                            • {des}
                          </div>
                        );
                      })}
                    </div>
                    <div className="font-thai text-[16px] mt-1 text-amber-400 leading-[20px] font-medium">
                      {item.date}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionMain>
        <MotionMain>
          <div className="border p-5 rounded-xl border-white/20 hover:border-gray-300 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 backdrop-blur-md shadow-2xl ">
            <div>
              <div className="text-4xl text-highlight font-semibold">
                Education
              </div>
            </div>
            <div>
              {education.map((item, index) => {
                return (
                  <div key={index} className="p-2 rounded-lg text-gray-200">
                    <div className="font-thai text-[22px] leading-[25px] font-semibold">
                      {item.title}
                    </div>
                    <div className="font-thai text-[16px] mt-2 leading-[25px]">
                      {item.des}
                    </div>
                    <div className="font-thai text-[16px] mt-2 leading-[20px] text-amber-400">
                      {item.year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionMain>
      </div>
    </div>
  );
};

export default Journey;
