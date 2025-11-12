import React, { useState } from "react";

const ColorPickerBox = () => {
  const [color, setColor] = useState("bg-white");
  // const buttonConfig = [
  //     {
  //         bg-color
  //     }
  // ]

  const setBGColor = () => {};
  return (
    <div>
      <button className="bg-red-500">RED</button>
      <button className="bg-blue-500">BLUE</button>
      <button className="bg-pink-500">PINK</button>
      <button className="bg-yellow-500">YELLOW</button>
    </div>
  );
};

export default ColorPickerBox;
