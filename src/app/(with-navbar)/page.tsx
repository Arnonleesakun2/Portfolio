import About from "@/components/home/About";
import Journey from "@/components/home/Journey";
import Project from "@/components/home/Project";
import Skill from "@/components/home/Skill";
import Techskill from "@/components/home/Techskill";
import React from "react";

const Homepage = () => {
  return (
    <div >
      <About />
      <Journey />
      <Skill/>
      <Techskill />
      <Project />
    </div>
  );
};

export default Homepage;
