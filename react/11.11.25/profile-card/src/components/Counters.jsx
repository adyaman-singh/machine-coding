import React, { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const decreaseCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div className="flex gap-x-6">
        <button className="p-2 bg-blue-300 rounded-md" onClick={increaseCount}>
          +
        </button>
        <button
          className="p-2 bg-blue-300 rounded-md"
          onClick={decreaseCount}
          disabled={count === 0}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counters;
