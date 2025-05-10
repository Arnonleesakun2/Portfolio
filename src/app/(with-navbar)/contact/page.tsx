import React from "react";
import Contactform from "@/components/contact/Contactform";
import Contactme from "@/components/contact/Contactme";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page RyeS Portfolio",
};

const Contactpage = () => {
 
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-12">
        <Contactme/>
       <Contactform/>
      </div>
    </div>
  );
};
export default Contactpage;
