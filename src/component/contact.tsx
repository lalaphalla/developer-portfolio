import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8  bg-[#EEE7DD]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
              Let&apos;s work together!
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you have a question or just want to say hi, feel
              free to reach out!
            </p>
            <Image src="/contact.svg" width={511} height={419} alt="contact" />
            {/* <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <span className="text-slate-600 dark:text-slate-300">
                  {contact.email}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaGithub
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <span className="text-slate-600 dark:text-slate-300">
                  {contact.github}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <span className="text-slate-600 dark:text-slate-300">
                  {contact.linkedin}
                </span>
              </div>
            </div> */}
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
