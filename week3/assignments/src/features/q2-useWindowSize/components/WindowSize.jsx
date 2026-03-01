import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const WindowSize = () => {
  const { width, height } = useWindowSize();
  console.log("Component Re-rendered");
  return (
    <>
      Width - {width}
      Height - {height}
    </>
  );
};

export default WindowSize;
