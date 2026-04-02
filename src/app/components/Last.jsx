import React from "react";
import Logo from "../components/Logo";
export const Last = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
        <div className="space-y-2">
          <Logo />
          <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
          <p className="text-lg text-[#8E8E8E]">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};
