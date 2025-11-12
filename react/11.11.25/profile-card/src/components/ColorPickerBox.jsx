import React, { useState } from "react";

const ColorPickerBox = () => {
  const [color, setColor] = useState("bg-black"); // default text color

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div className="flex gap-5">
        <button
          className="px-4 py-2 text-white bg-red-500 rounded"
          onClick={() => handleColorChange("bg-red-500")}
        >
          RED
        </button>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => handleColorChange("bg-blue-500")}
        >
          BLUE
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded"
          onClick={() => handleColorChange("bg-pink-500")}
        >
          PINK
        </button>
        <button
          className="px-4 py-2 text-white bg-yellow-500 rounded"
          onClick={() => handleColorChange("bg-yellow-500")}
        >
          YELLOW
        </button>
      </div>

      <div
        className={`h-20 mx-auto mt-6 border-2 w-40 flex items-center justify-center text-xl font-semibold ${color}`}
      >
        TEXT
      </div>
    </>
  );
};

export default ColorPickerBox;
