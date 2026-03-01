import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const useWindowSize = () => {
  console.log("inside hook");

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const windowSizeRef = useRef({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    console.log(window.innerHeight, window.innerWidth);
    const resizeHandler = () => {
      if (window.innerHeight != windowSizeRef.current.innerHeight) {
        setHeight(window.innerHeight);
        windowSizeRef.current.innerHeight = window.innerHeight;
      }
      if (window.innerWidth != windowSizeRef.current.innerWidth) {
        setWidth(window.innerWidth);
        windowSizeRef.current.innerWidth = window.innerWidth;
      }
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return { width, height };
};
