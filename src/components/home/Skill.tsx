import { Database, Framework, PogrammingLanguage } from "@/utils/skill";
import MotionMain from "../motions/MotionMain";

type SkillLevel = "Beginner" | "Intermediate" | "Proficient" | "Advanced";

const levelColor: Record<SkillLevel, string> = {
  Beginner: "badge-warning",
  Intermediate: "badge-accent",
  Proficient: "badge-primary",
  Advanced: "badge-info",
};

const Skill = () => {
  return (
    <div className="my-32">
      <MotionMain>
        <div className="text-4xl text-highlight font-semibold text-center">
          Skill
        </div>
      </MotionMain>
      <MotionMain>
        <div className="tabs tabs-border tabs-lg flex justify-center mt-6 rounded-2xl">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Programming language"
            defaultChecked
          />
          <div className="tab-content p-10">
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PogrammingLanguage.map((skill) => (
                <MotionMain key={skill.name}>
                  <div className="card border theme-border rounded-2xl shadow hover:shadow-lg transition duration-300">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{skill.name}</h2>
                      <div
                        className={`badge ${
                          levelColor[skill.level as SkillLevel]
                        } mt-2 rounded-2xl`}
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
            className="tab"
            aria-label="Framework"
          />
          <div className="tab-content p-10">
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Framework.map((skill) => (
                <MotionMain key={skill.name}>
                  <div className="card border theme-border rounded-2xl shadow hover:shadow-lg transition duration-300">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{skill.name}</h2>
                      <div
                        className={`badge ${
                          levelColor[skill.level as SkillLevel]
                        } mt-2 rounded-2xl`}
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
            className="tab"
            aria-label="Database"
          />
          <div className="tab-content p-10">
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Database.map((skill) => (
                <MotionMain key={skill.name}>
                  <div className="card border theme-border rounded-2xl shadow hover:shadow-lg transition duration-300">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{skill.name}</h2>
                      <div
                        className={`badge ${
                          levelColor[skill.level as SkillLevel]
                        } mt-2 rounded-2xl`}
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
  );
};
export default Skill;
