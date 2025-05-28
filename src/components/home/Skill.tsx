import { Database, Framework, PogrammingLanguage } from "@/utils/skill";
import MotionMain from "../motions/MotionMain";

type SkillLevel = "Beginner" | "Intermediate" | "Proficient" | "Advanced";

const levelColor: Record<SkillLevel, string> = {
  Beginner: "bg-yellow-400 text-black",
  Intermediate: "bg-orange-400 text-white",
  Proficient: "bg-indigo-500 text-white",
  Advanced: "bg-pink-500 text-white",
};

const Skill = () => {
  return (
    <div className="bg-[#6D80C7] min-h-screen flex justify-center items-center">
      <div className="maincontainer">
        <MotionMain>
          <div className="text-4xl font-semibold text-center bg-gradient-to-r from-[#FBBF24] to-[#FDBA74] text-transparent bg-clip-text drop-shadow-md">
            Skill
          </div>
        </MotionMain>

        <MotionMain>
          <div className="tabs tabs-border tabs-lg flex justify-center mt-6 rounded-2xl">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab !text-white !border-white/30 data-[checked=true]:!bg-yellow-300 data-[checked=true]:!text-[#1E1E2F] transition-all"
              aria-label="Programming language"
              defaultChecked
            />
            <div className="tab-content p-10">
              <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PogrammingLanguage.map((skill) => (
                  <MotionMain key={skill.name}>
                    <div className="card border border-white/20 hover:border-gray-300 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 shadow-2xl backdrop-blur-md rounded-2xl">
                      <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">{skill.name}</h2>
                        <div
                          className={`badge mt-2 rounded-2xl px-3 py-1 text-sm ${
                            levelColor[skill.level as SkillLevel]
                          }`}
                        >
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  </MotionMain>
                ))}
              </div>
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              className="tab !text-white !border-white/30 data-[checked=true]:!bg-yellow-300 data-[checked=true]:!text-[#1E1E2F] transition-all"
              aria-label="Framework"
            />
            <div className="tab-content p-10">
              <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Framework.map((skill) => (
                  <MotionMain key={skill.name}>
                    <div className="card border border-white/20 hover:border-gray-300 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 shadow-2xl backdrop-blur-md rounded-2xl">
                      <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">{skill.name}</h2>
                        <div
                          className={`badge mt-2 rounded-2xl px-3 py-1 text-sm ${
                            levelColor[skill.level as SkillLevel]
                          }`}
                        >
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  </MotionMain>
                ))}
              </div>
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              className="tab !text-white !border-white/30 data-[checked=true]:!bg-yellow-300 data-[checked=true]:!text-[#1E1E2F] transition-all"
              aria-label="Database"
            />
            <div className="tab-content p-10">
              <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Database.map((skill) => (
                  <MotionMain key={skill.name}>
                    <div className="card border border-white/20 hover:border-gray-300 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 shadow-2xl backdrop-blur-md rounded-2xl">
                      <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">{skill.name}</h2>
                        <div
                          className={`badge mt-2 rounded-2xl px-3 py-1 text-sm ${
                            levelColor[skill.level as SkillLevel]
                          }`}
                        >
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  </MotionMain>
                ))}
              </div>
            </div>
          </div>
        </MotionMain>
      </div>
    </div>
  );
};

export default Skill;
