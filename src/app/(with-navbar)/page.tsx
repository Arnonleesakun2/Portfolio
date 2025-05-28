import Footer from "@/components/footers/Footer";
import About from "@/components/home/About";
import Journey from "@/components/home/Journey";
import Project from "@/components/home/Project";
import Skill from "@/components/home/Skill";
import Techskill from "@/components/home/Techskill";
import TItle from "@/components/home/TItle";
import VisitorTracker from "@/components/visitors/VisitorTracker";
import React from "react";

const Homepage = () => {
  return (
    <div className="">
      <VisitorTracker />
      <TItle />
      <About />
      <Journey />
      <Skill />
      <Techskill />
      <Project />
      <Footer />
    </div>
  );
};

export default Homepage;
