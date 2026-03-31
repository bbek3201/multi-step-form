import { isValueExpired } from "next/dist/client/components/segment-cache/cache-map";
import React from "react";

export default function Input({ label, value, error, placeholder }) {
  return (
    <div>
      <label className="text-black flex items-center">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        defaultValue={value}
        placeholder={placeholder}
        type="text"
        className={`border text-black  border-gray-300 p-2 rounded- w-[416px] ${error ? "border-red-400 bg-red-50 text-red-400" : "border-gray-300 focus:border-black bg-gray-50"}
  `}
      />
    </div>
  );
}
