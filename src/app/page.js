"use client";
import { useEffect, useState } from "react";
import Logo from "./components/Logo";

import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { Last } from "./components/Last";
import { InputComp } from "./components/InputComp";

export default function Home() {
  const [form, setForm] = useState(null);
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    fullname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    date: "",
    image: "",
  });
  useEffect(() => {
    if (form !== null) {
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      const storedForm = JSON.parse(localStorage.getItem("form"));
      if (storedForm) {
        setForm(storedForm);
      } else {
        setForm({
          firstname: "",
          lastname: "",
          fullname: "",
          email: "",
          phonenumber: "",
          password: "",
          confirmpassword: "",
          date: "",
          image: "",
        });
      }
    }
  }, [form]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [step, setStep] = useState(0);
  const st = step[step];
  if (!form) return null;
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      {step === 0 && (
        <div className="w-120 min-h-163.75 bg-white rounded-lg p-8 shadow-xl">
          <div className="space-y-2">
            <Logo />
            <InputComp
              setForm={setForm}
              form={form}
              firstname={firstname}
              setFirstname={setFirstname}
              lastname={lastname}
              setLastname={setLastname}
              fullname={fullname}
              setFullname={setFullname}
              onNext={() => setStep(1)}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
      )}
      {step === 1 && (
        <Step2
          form={form}
          setForm={setForm}
          setErrors={setErrors}
          errors={errors}
          onBack={() => setStep(0)}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <Step3
          form={form}
          setForm={setForm}
          setErrors={setErrors}
          errors={errors}
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <Last
          form={form}
          setForm={setForm}
          setErrors={setErrors}
          errors={errors}
          onBack={() => setStep(2)}
          onNext={() => setStep(4)}
        />
      )}
    </div>
  );
}
