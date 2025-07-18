"use client";
import React from "react";

import heroLeftImage from "../assets/image/hero-left.png";
import heroWorkImage from "../assets/image/hero-work.png";
import Image from "next/image";
import ProfileCard from "./portfolio-card";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Grid background pattern */}
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-20 "></div> */}
      <div className="absolute inset-0 bg-[url('../assets/image/outline-square-grid.png')]"></div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-red-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-yellow-400 rounded-full opacity-50"></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-400 rounded-full opacity-40"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Hero image */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <Image
                src={heroLeftImage}
                alt="hero-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* <img
                src={"/public/hero-left.png"}
                alt="Web Development Illustration"
                className="w-full max-w-md mx-auto lg:max-w-lg"
              /> */}
            </div>

            {/* Decorative elements around the image */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-400 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/4 -right-8 w-16 h-16 bg-blue-400 rounded-full opacity-50"></div>

            {/* Flowing lines/curves */}
            <div className="absolute top-1/2 left-0 w-20 h-20">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-gray-400 opacity-60"
              >
                <path
                  d="M20,20 Q50,60 80,20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M10,40 Q40,70 70,40"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="relative z-10">
            <ProfileCard />
            <div className="space-y-6">
              {/* Call-to-action buttons */}
              <div
                className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
                style={{
                  backgroundImage: `url('../assets/image/hero-work.png')`,
                }}
              >
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  View Portfolio
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Decorative image in bottom right */}
            <div className="absolute  md:-bottom-60 md:right-30 w-[528px] h-[550px]  overflow-hidden opacity-80">
              <div className="w-full h-full flex items-center justify-center">
                {/* <div className="text-gray-600 text-sm">Workspace Image</div> */}
                <div className="absolute top-1 -right-1 w-[528px] h-[550px]  overflow-hidden opacity-80">
                  <div className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[url('../assets/image/hero-work.png')]" />
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                    style={{
                      backgroundImage: `url('../assets/image/hero-work.png')`,
                    }}
                  >
                    aa
                    {/* <div className="text-gray-600 text-sm">Workspace Image</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flowing arrow at bottom */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <svg
          width="60"
          height="40"
          viewBox="0 0 60 40"
          className="text-gray-400"
        >
          <path
            d="M10,20 Q30,30 50,20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M45,15 L50,20 L45,25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Custom CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
