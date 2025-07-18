import Image from "next/image";
import React from "react";
import portfolioData from "../data/portfolio.json";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8  bg-[#EEE7DD]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Image src="/contact.svg" width={511} height={419} alt="contact" />
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
              Let&apos;s work together!
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you have a question or just want to say hi, feel
              free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-slate-600 dark:text-slate-300">
                  {contact.email}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Github
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <a href={`https://${contact.github}`} target="_blank">
                  <span className="text-slate-600 dark:text-slate-300">
                    {contact.github}
                  </span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <a href={`https://${contact.linkedin}`} target="_blank">
                  <span className="text-slate-600 dark:text-slate-300">
                    {contact.linkedin}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
