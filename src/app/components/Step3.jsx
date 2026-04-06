"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Date } from "./Date";
import { Image } from "./Image";
export default function Home({
  onBack,
  onNext,
  setForm,
  form,
  setErrors,
  errors,
  onCancel,
}) {
  const [dateofbirth, setDateofBirth] = useState(form.date || "");
  const [submitted, setSubmitted] = useState(false);
  const [profileImage, setProfileImage] = useState(form.image || "");

  const isDateofBirthValid = () => {
    if (dateofbirth === "") return "please select date";
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(dateofbirth))
      return "please select date";
  };
  const isProfileImageValid = (value = profileImage) => {
    if (value === "") return "please select image";
    return;
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 min-h-163.75 bg-white rounded-lg p-8 shadow-xl">
        <div className="space-y-2">
          <Logo />
        </div>
        <div className="flex flex-col justify-between h-full min-h-[400px]">
          <div className="flex flex-col gap-3 pt-5">
            <Date
              type="date"
              placeholder="2002/05/26"
              value={dateofbirth}
              label="Date of birth"
              required={true}
              error={submitted ? isDateofBirthValid() : ""}
              onChange={(e) => {
                setDateofBirth(e.target.value);
                setErrors({
                  ...errors,
                  date: isDateofBirthValid(e.target.value),
                });
                setForm({ ...form, date: e.target.value });
              }}
            />
            <Image
              onCancel={() => {
                setForm({ ...form, image: "" });
              }}
              value={profileImage}
              label="Profile image"
              required={true}
              initialImage={form.image || null}
              error={
                submitted ? (profileImage ? "" : "please select image") : ""
              }
              onChange={({ name, url }) => {
                setProfileImage(name);
                setErrors({
                  ...errors,
                  image: isProfileImageValid(name),
                });
                setForm({ ...form, image: url });
              }}
            />
          </div>
          <div className="flex justify-between gap-3 h-full w-full mt-auto">
            <button
              onClick={onBack}
              className="w-32 bg-white text-black border py-3 rounded-lg font-semibold mt-4"
            >
              Back
            </button>
            <button
              className="w-full bg-black text-white py-3 rounded-lg font-semibold mt-4 cursor-pointer"
              onClick={() => {
                setSubmitted(true);
                if (isDateofBirthValid() || !profileImage) return;
                onNext();
              }}
            >
              Submit 3/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
