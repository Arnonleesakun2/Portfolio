import { techskill } from "@/utils/techskill";
import Image from "next/image";
import MotionMain from "../motions/MotionMain";

const Techskill = () => {
  return (
    <MotionMain>
      <div className="my-[70px]">
        <div className="text-4xl text-highlight font-semibold text-center">
          Technical Skill
        </div>
        <div className="flex flex-wrap gap-1 justify-center mt-8">
          {techskill.map((item, index) => {
            {
              return (
                <button
                  key={index}
                  className="flex items-center gap-2 bg-neutral-900 px-6 py-1 rounded-4xl group hover:rotate-8 duration-500 border border-white/[0.50]"
                >
                  <Image
                    className="w-[30px] h-[30px] group-hover:scale-110 transition-transform duration-300"
                    src={item.img}
                    alt=""
                  />
                  <p className="font-shortstack font-bold text-white/90 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent duration-500">
                    {item.text}
                  </p>
                </button>
              );
            }
          })}
        </div>
      </div>
    </MotionMain>
  );
};
export default Techskill;
