import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prevState) => {
      return prevState === 5 ? prevState : ++prevState;
    });
  };

  const onDecrement = () => {
    setCount((prevState) => {
      return prevState === 0 ? prevState : --prevState;
    });
  };

  return {
    count: count,
    onIncrement,
    onDecrement,
  };
};