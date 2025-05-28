"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Title = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateX = Math.min(scrollY * 3.5, 1500);

  return (
    <div className="bg-[url('/img/background.jpeg')] h-screen bg-cover bg-center relative overflow-hidden">
      <div className="h-screen flex justify-center items-center">
        <div
          className="space-y-3 text-center transition-transform duration-100"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          <div className="text-3xl md:text-5xl font-extrabold text-gray-200">
            RyeS Portfolio
          </div>
          <div className="flex justify-center mt-8">
            <div className="animate-bounce text-gray-200">
              <ChevronDown size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
