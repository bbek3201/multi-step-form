"use client";
import { useState } from "react";
import React from "react";
import { TextField } from "./TextField";

export const InputComp = ({ onNext, form, setForm, errors, setErrors }) => {
  const isFirstNameValid = () => {
    if (form.firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z- ]+$/.test(form.firstname))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = () => {
    if (form.lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z- ]+$/.test(form.lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isFullNameValid = () => {
    if (form.fullname === "") return "Full name cannot be empty...";
    if (!/^[A-Za-z- ]+$/.test(form.fullname))
      return "This username is already taken. Please choose another one.";
  };
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col justify-between h-full min-h-[400px]">
      <div>
        <TextField
          value={form.firstname}
          onChange={(e) => {
            setErrors({
              ...errors,
              firstname: isFirstNameValid(e.target.value),
            });
            setForm({ ...form, firstname: e.target.value });
          }}
          error={submitted ? isFirstNameValid() : ""}
          required={true}
          label="First name"
          placeholder="Jhon..."
        />
        <TextField
          value={form.lastname}
          onChange={(e) => {
            setErrors({ ...errors, lastname: isLastNameValid(e.target.value) });
            setForm({ ...form, lastname: e.target.value });
          }}
          error={submitted ? isLastNameValid() : ""}
          required={true}
          label="Last name"
          placeholder="Smith..."
        />
        <TextField
          value={form.fullname}
          onChange={(e) => {
            setErrors({ ...errors, fullname: isFullNameValid(e.target.value) });
            setForm({ ...form, fullname: e.target.value });
          }}
          error={submitted ? isFullNameValid() : ""}
          required={true}
          label="Full name"
          placeholder="Jhon Smith..."
        />
      </div>
      <div className="h-full">
        <button
          className="w-full bg-black text-white py-3 rounded-lg font-semibold mt-auto"
          onClick={() => {
            setSubmitted(true);
            if (isFirstNameValid() || isLastNameValid() || isFullNameValid())
              return;
            onNext();
          }}
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
};
