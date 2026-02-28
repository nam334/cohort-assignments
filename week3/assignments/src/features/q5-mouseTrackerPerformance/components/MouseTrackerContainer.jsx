import "./MouseTrackerContainer.css";
import { useRef } from "react";

const MouseTrackerContainer = () => {
  const containerRef = useRef();
  const positionRef = useRef({});
  const circleRef = useRef();
  const mouseMoveHandler = (e) => {
    console.log("co-ordinates are", e);
    const { top, left } = containerRef.current.getBoundingClientRect();
    const xCoordinates = Math.ceil(e.clientX - left);
    const yCoordinates = Math.ceil(e.clientY - top);
    console.log(xCoordinates, yCoordinates);
    positionRef.current = {
      xCoordinates,
      yCoordinates,
    };
    circleRef.current.style.transform = `translate(${positionRef.current.xCoordinates + `px`}, ${positionRef.current.yCoordinates + `px`})`;
  };

  const mouseLeaveHandler = () => {
    circleRef.current.style.transform = `translate(-500px, -500px)`;
  };
  return (
    <div
      className="container"
      onMouseMove={(e) => mouseMoveHandler(e)}
      onMouseLeave={(e) => mouseLeaveHandler(e)}
      ref={containerRef}
    >
      <div className="circle" ref={circleRef}></div>
    </div>
  );
};

export default MouseTrackerContainer;
