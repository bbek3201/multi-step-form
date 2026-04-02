import React from "react";
import { useState } from "react";
export const Image = ({ label, required = false }) => {
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="">
      <label className="font-semibold text-sm">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <>
        <div
          className="w-full h-45 border-2 border-dashed rounded-lg flex flex-col justify-center items-center cursor-pointer"
          onClick={() => document.getElementById("imageInput").click()}
        >
          {image ? (
            <img src={image} className="h-full object-cover rounded-lg" />
          ) : (
            <>
              <span>🖼️</span>
              <p>Add image</p>
            </>
          )}
        </div>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </>
    </div>
  );
};
