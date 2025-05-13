import React from "react";
import Contactform from "@/components/contact/Contactform";
import Contactme from "@/components/contact/Contactme";
import { Metadata } from "next";
import Contactheader from "@/components/contact/Contactheader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page RyeS Portfolio",
};

const Contactpage = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Contactheader/>
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-12">
        <Contactme />
        <Contactform />
      </div>
    </div>
  );
};
export default Contactpage;
