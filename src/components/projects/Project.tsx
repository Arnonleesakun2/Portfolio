import { project } from "@/utils/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="mt-[100px]">
      <div className="text-4xl text-highlight font-semibold">Projects</div>
      <div className="space-y-[30px] mt-5">
        {project.map((item, index) => {
          return (
            <div
              key={index}
              className="hover:border-pink-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/20 rounded-4xl border border-black/10"
            >
              <div className="p-6">
                <div className="lg:grid lg:grid-cols-6 gap-6">
                  <div className="mb-4 sm:mb-0 col-span-2">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt="Project"
                        className="rounded-xl w-full h-[200px]"
                      />
                    ) : (
                      <div className="w-[300px] h-[400px] flex justify-center items-center">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="space-y-4 col-span-4">
                    <h3 className="text-highlight text-2xl font-semibold border-b border-white/10 pb-3">
                      {item.title}
                    </h3>
                    <div className="space-y-2">
                      <h4 className="text-sm uppercase tracking-wider text-pink-400 font-semibold">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.icon.map((icon, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1.5 btn-neutral btn rounded-full text-white hover:bg-black/80 transition-colors duration-300"
                          >
                            <span className="text-lg">{icon}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {item.des.map((des, index) => (
                        <div
                          key={index}
                          className="font-thai flex items-start gap-2"
                        >
                          <span className="text-yellow-400 mt-1">•</span>
                          {des}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      {item.demo && (
                        <Link
                          className="text-white py-2 px-4 bg-gradient-to-r from-black to-white rounded-4xl hover:from-white hover:to-black transition-all duration-500 shadow-md flex items-center gap-2"
                          href={item.demo}
                          target="_blank"
                        >
                          <span className="text-lg">🔗</span> View Demo
                        </Link>
                      )}
                      {item.github.length > 0 && (
                        <div className="flex gap-2">
                          {item.github.map((git, index) => (
                            <Link
                              key={index}
                              className="text-white py-2 px-4 bg-highlight border border-white/20 rounded-4xl hover:from-yellow-500 hover:to-pink-500 transition-all duration-500 flex items-center gap-2"
                              href={git}
                              target="_blank"
                            >
                              <span className="text-lg">⚙️</span> Github
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
