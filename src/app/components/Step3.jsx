"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Date } from "./Date";
import { Image } from "./Image";
export default function Home({ onBack, onNext }) {
  const [dateofbirt, setDateofBirth] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isDateofBirthValid = () => {
    if (dateofbirt === "") return "please select date";
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(dateofbirt))
      return "please select date";
  };
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
        <div className="flex flex-col gap-3 pt-5">
          <Date
            value={dateofbirt}
            label="Date of birth"
            required={true}
            error={submitted ? isDateofBirthValid() : ""}
            onChange={(e) => setDateofBirth(e.target.value)}
          />
          <Image label="Profile image" required={true} />
        </div>
        <div className="flex justify-between gap-3">
          <button
            onClick={onBack}
            className="w-32 bg-white text-black border py-3 rounded-lg font-semibold mt-4"
          >
            Back
          </button>
          <button
            className="w-full bg-black text-white py-3 rounded-lg font-semibold mt-4"
            onClick={() => {
              setSubmitted(true);
              if (isDateofBirthValid()) return;
              onNext();
            }}
          >
            Submit 3/3
          </button>
        </div>
      </div>
    </div>
  );
}
