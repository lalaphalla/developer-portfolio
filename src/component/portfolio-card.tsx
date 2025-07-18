// components/ProfileCard.js
import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-md mx-auto  shadow-md overflow-hidden md:max-w-2xl p-6">
      <div className="flex flex-col space-y-4">
        {/* Name and Title */}
        <div>
          <h1 className="font-space-mono text-3xl font-bold text-gray-800">
            Pav
          </h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xl font-medium text-gray-600">Web</span>
            <span className="text-3xl font-bold text-gray-800">Munyphalla</span>
          </div>
          <p className="text-xl text-gray-700 mt-1">Developer</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-2"></div>

        {/* Description */}
        <blockquote className="text-gray-600 italic">
          &quot;Full-stack web developer with hands-on experience in React,
          Node.js, and AWS deployment. Completed intensive development program
          with real-world projects including e-learning platforms and corporate
          training systems. Passionate about creating responsive, user-friendly
          web applications.&quot;
        </blockquote>
      </div>
    </div>
  );
};

export default ProfileCard;
