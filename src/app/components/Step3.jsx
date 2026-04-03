"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Date } from "./Date";
import { Image } from "./Image";
export default function Home({ onBack, onNext, setForm, form }) {
  const [dateofbirt, setDateofBirth] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  const isDateofBirthValid = () => {
    if (dateofbirt === "") return "please select date";
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(dateofbirt))
      return "please select date";
  };
  const isProfileImageValid = () => {
    if (profileImage === "") return "please select image";
    if (!/\.(jpe?g|png|gif|bmp|webp)$/.test(profileImage))
      return "please select image";
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
        <div className="space-y-2">
          <Logo />
        </div>
        <div className="flex flex-col gap-3 pt-5">
          <Date
            type="date"
            placeholder="2002/05/26"
            value={dateofbirt}
            label="Date of birth"
            required={true}
            error={submitted ? isDateofBirthValid() : ""}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <Image
            value={profileImage}
            label="Profile image"
            required={true}
            error={submitted ? isProfileImageValid() : ""}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
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
              if (isDateofBirthValid() || isProfileImageValid()) return;
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
