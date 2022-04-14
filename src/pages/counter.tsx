import React, { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </>
  );
};

export default Counter;
