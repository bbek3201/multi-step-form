"use client";
import { useState } from "react";
import Logo from "./components/Logo";
import { TextField } from "./components/TextField";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullName, setFullName] = useState("");

  const isFirstNameValid = () => {
    if (firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = () => {
    if (lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isFullNameValid = () => {
    if (fullName === "") return "Full name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(fullName))
      return "This username is already taken. Please choose another one.";
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

          <TextField
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            error={submitted ? isFirstNameValid() : ""}
            required={true}
            label="First name"
            placeholder="Placeholder"
          />
          <TextField
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            error={submitted ? isLastNameValid() : ""}
            required={true}
            label="Last name"
            placeholder="Placeholder"
          />
          <TextField
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            error={submitted ? isFullNameValid() : ""}
            required={true}
            label="Full name"
            placeholder="Placeholder"
          />
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
          Continue 1/3
        </button>
      </div>
    </div>
  );
}
