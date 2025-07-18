/* eslint-disable @next/next/no-img-element */
import React from "react";
import portfolioData from "../data/portfolio.json";
import SectionHeader from "./section-header";
export default function Project() {
  const { projects } = portfolioData;
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#EEE7DD] dark:bg-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader caption="EXPERIENCE" title="Working Experience" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 w-full overflow-hidden">
                <a href={project.link ?? ""} target="_blank">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-top"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-col gap-2 mb-4">
                  {project.keyFeature && (
                    <p>
                      <span className="font-semibold">Key Feature: </span>
                      {project.keyFeature ?? ""}
                    </p>
                  )}
                  <p>
                    <span className="font-semibold">Acheivement: </span>
                    {project.outCome ?? ""}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
