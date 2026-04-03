"use client";
import { useState } from "react";
import React from "react";
import { TextField } from "./TextField";

export const InputComp = ({ onNext, form, setForm, errors, setErros }) => {
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
    if (form.fullName === "") return "Full name cannot be empty...";
    if (!/^[A-Za-z- ]+$/.test(form.fullName))
      return "This username is already taken. Please choose another one.";
  };
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <TextField
        value={form.firstname}
        onChange={(e) => {
          setForm({ ...form, firstname: e.target.value });
        }}
        error={submitted ? isFirstNameValid() : ""}
        required={true}
        label="First name"
        placeholder="Placeholder"
      />
      <TextField
        value={form.lastname}
        onChange={(e) => {
          setForm({ ...form, lastname: e.target.value });
        }}
        error={submitted ? isLastNameValid() : ""}
        required={true}
        label="Last name"
        placeholder="Placeholder"
      />
      <TextField
        value={form.fullName}
        onChange={(e) => {
          setForm({ ...form, fullName: e.target.value });
        }}
        error={submitted ? isFullNameValid() : ""}
        required={true}
        label="Full name"
        placeholder="Placeholder"
      />
      <button
        className="w-full bg-black text-white py-3 rounded-lg font-semibold mt-4"
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
  );
};
