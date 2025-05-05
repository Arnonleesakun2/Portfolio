import { education } from "@/utils/education";
import { experince } from "@/utils/experince";
import React from "react";

const Journey = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-10 items-center mt-[100px]">
      <div className="border p-5 rounded-xl border-black/10 hover:border-pink-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/20">
        <div className="text-4xl text-highlight font-semibold">Experience</div>
        <div className="space-y-6">
          {experince.map((item, index) => {
            return (
              <div key={index} className="p-4 rounded-lg">
                <div className="font-thai text-[22px] text-black/90 leading-[25px] font-semibold">
                  {item.position}
                </div>
                <div className="font-thai text-[20px] mt-1 text-black/60 leading-[25px] font-medium">
                  {item.company}
                </div>
                <div className="mt-3">
                  {item.description.map((des, index) => {
                    return (
                      <div
                        key={index}
                        className="font-thai mt-2 text-[17px] leading-[23px] text-black/60"
                      >
                        • {des}
                      </div>
                    );
                  })}
                </div>
                <div className="font-thai text-[16px] mt-4 text-pink-400 leading-[20px] font-medium">
                  {item.date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border p-5 rounded-xl border-black/10 hover:border-pink-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/20">
          <div>
            <div className="text-4xl text-highlight font-semibold">
              Education
            </div>
          </div>
          <div className="space-y-6">
            {education.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4 rounded-lg"
                >
                  <div className="font-thai text-[22px] leading-[25px] font-semibold text-black/90">
                    {item.title}
                  </div>
                  <div className="font-thai text-[16px] mt-2 leading-[25px] text-black/60">
                    {item.des}
                  </div>
                  <div className="font-thai text-[16px] mt-2 leading-[20px] text-pink-400">
                    {item.year}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
};

export default Journey;
