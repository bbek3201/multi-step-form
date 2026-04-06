import React from "react";

export const Date = ({
  label,
  required = false,
  error,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold text-sm">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full h-11 rounded-lg border  p-3 ${error ? "border-[#E14942]" : "border-[#CBD5E1]"}`}
        type="date"
      />
      {error && <p className="text-sm text-[#E14942]">{error}</p>}
      <div></div>
    </div>
  );
};
