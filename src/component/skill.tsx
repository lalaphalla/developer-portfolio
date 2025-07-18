import React from "react";
import portfolioData from "../data/portfolio.json";
import { getIcon } from "@/utils/icons";
import SectionHeader from "./section-header";
export default function SkillSection() {
  const { personal, contact, skills, projects, navigation } = portfolioData;
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {" "}
        <SectionHeader caption="SKILL" title="Skills & Technologies" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([key, skill]) => {
            const IconComponent = getIcon(skill.icon);
            const colorClasses = {
              blue: "text-blue-600 dark:text-blue-400",
              green: "text-green-600 dark:text-green-400",
              purple: "text-purple-600 dark:text-purple-400",
              orange: "text-orange-600 dark:text-orange-400",
            };

            return (
              <div
                key={key}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
              >
                <div
                  className={`${
                    colorClasses[skill.color as keyof typeof colorClasses]
                  } mb-4`}
                >
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 capitalize">
                  {key}
                </h3>
                <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                  {skill.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
