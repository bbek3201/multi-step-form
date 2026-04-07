import React from "react";
import { useState } from "react";
export const Image = ({
  label,
  required = false,
  onChange,
  error,
  initialImage,
  onCancel,
}) => {
  const [image, setImage] = useState(initialImage || null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      onChange && onChange({ name: file.name, url });
    }
  };

  return (
    <div className="">
      <label htmlFor="imageInput" className="font-semibold text-sm">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <>
        <div
          className="w-full h-46 object-cover border-2 border-dashed rounded-lg flex flex-col justify-center items-center cursor-pointer relative overflow-hidden"
          onClick={() => document.getElementById("imageInput").click()}
        >
          {image ? (
            <>
              <img
                src={image}
                className="h-full w-full object-cover object-center rounded-lg absolute"
              />
              <img
                src="close.svg"
                alt="close"
                className="absolute top-4 right-4 cursor-pointer border bg-black rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setImage(null);
                  onCancel && onCancel();
                }}
              />
            </>
          ) : (
            <>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z"
                    fill="#202124"
                  />
                </svg>
              </span>
              <p>Add image</p>
            </>
          )}
        </div>
        {error && <p className="text-red-500 text-[14px] mt-1">{error}</p>}
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
