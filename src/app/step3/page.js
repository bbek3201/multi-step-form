"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../components/Logo";
import { TextField } from "../components/TextField";
export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
        <div className="space-y-2">
          <Logo />
          <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
          <p className="text-lg text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>

        <button
          className="w-full bg-black text-white py-3 rounded-lg font-semibold mt-4"
          onClick={() => {
            setSubmitted(true);
            if (
              !isFirstNameValid() &&
              !isLastNameValid() &&
              !isFullNameValid()
            ) {
              router.push("/step2");
            }
          }}
        >
          Submit 3/3
        </button>
      </div>
    </div>
  );
}
