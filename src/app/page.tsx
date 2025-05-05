import About from "@/components/abouts/About";
import Journey from "@/components/journeys/Journey";
import Project from "@/components/projects/Project";
import Skill from "@/components/skills/Skill";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <About />
      <Journey />
      <Project />
      <Skill />
    </div>
  );
};

export default Homepage;
