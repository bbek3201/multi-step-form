"use client";
import { useState } from "react";

import Logo from "./Logo";
import { TextField } from "./TextField";
export default function Home({
  onBack,
  onNext,
  form,
  setForm,
  setErrors,
  errors,
}) {
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = () => {
    if (form.email === "") return "Please provide a valid email address...";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email))
      return "Please provide a valid email address";
  };
  const isPhoneNumberValid = () => {
    if (form.phonenumber === "") return "Phone number cannot be empty";
    if (!/^\d{1,8}$/.test(form.phonenumber))
      return "Please enter a valid phone number";
  };
  const isPasswordValid = () => {
    if (form.password === "") return "Password cannot be empty";
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password))
      return "Password must include letters and numbers.";
  };
  const isConfirmPasswordValid = (value = form.confirmpassword) => {
    if (value === "") return "Confirm password cannot be empty";
    if (value !== form.password) return "Do not match";
    return "";
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 min-h-163.75 bg-white rounded-lg p-8 shadow-xl">
        <div className="space-y-2">
          <Logo />
          <div className="flex flex-col justify-between h-full min-h-[400px]">
            <TextField
              value={form.email}
              onChange={(e) => {
                setErrors({ ...errors, email: isEmailValid(e.target.value) });
                setForm({ ...form, email: e.target.value });
              }}
              error={submitted ? isEmailValid() : ""}
              required={true}
              label="Email"
              placeholder="Email"
            />
            <TextField
              value={form.phonenumber}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  phonenumber: isPhoneNumberValid(e.target.value),
                });
                setForm({ ...form, phonenumber: e.target.value });
              }}
              error={submitted ? isPhoneNumberValid() : ""}
              required={true}
              label="Phone number"
              placeholder="Phone number"
            />
            <TextField
              value={form.password}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  password: isPasswordValid(e.target.value),
                });
                setForm({ ...form, password: e.target.value });
              }}
              error={submitted ? isPasswordValid() : ""}
              required={true}
              label="Password"
              placeholder="Password"
              type="password"
            />
            <TextField
              value={form.confirmpassword}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  confirmpassword: isConfirmPasswordValid(e.target.value),
                });
                setForm({ ...form, confirmpassword: e.target.value });
              }}
              error={submitted ? isConfirmPasswordValid() : ""}
              required={true}
              label="Confirm password"
              placeholder="Confirm password"
              type="password"
            />
            <div className="flex justify-between gap-3 h-full w-full mt-auto">
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
    </div>
  );
}
