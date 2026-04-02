"use client";
import { useState } from "react";

import Logo from "./Logo";
import { TextField } from "./TextField";
export default function Home({ onBack, onNext }) {
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const isEmailValid = () => {
    if (email === "") return "Please provide a valid email address...";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
      return "Please provide a valid email address";
  };
  const isPhoneNumberValid = () => {
    if (phonenumber === "") return "Phone number cannot be empty";
    if (!/^\d{1,8}$/.test(phonenumber))
      return "Please enter a valid phone number";
  };
  const isPasswordValid = () => {
    if (password === "") return "Password cannot be empty";
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password))
      return "Password must include letters and numbers.";
  };
  const isConfirmPasswordValid = () => {
    if (confirmPassword === "") return "Confirm password cannot be empty";
    if (confirmPassword !== password) return "Do not match";
    if (confirmPassword === password) return "";
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
        <div className="space-y-2">
          <Logo />
          <h1 className="font-semibold text-2xl">Join Us! 😊</h1>
          <p className="text-lg text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={submitted ? isEmailValid() : ""}
            required={true}
            label="Email"
            placeholder="Email"
          />
          <TextField
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            error={submitted ? isPhoneNumberValid() : ""}
            required={true}
            label="Phone number"
            placeholder="Phone number"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={submitted ? isPasswordValid() : ""}
            required={true}
            label="Password"
            placeholder="Password"
            type="password"
          />
          <TextField
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={submitted ? isConfirmPasswordValid() : ""}
            required={true}
            label="Confirm password"
            placeholder="Confirm password"
            type="password"
          />
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
                if (
                  isEmailValid() ||
                  isPhoneNumberValid() ||
                  isPasswordValid() ||
                  isConfirmPasswordValid()
                )
                  return;

                onNext();
              }}
            >
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
