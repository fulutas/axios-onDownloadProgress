import React, { useEffect, useRef } from "react";
import { useThrottle } from "./hooks";

const styles = {
  width: 0,
  height: 10,
  borderRadius: 4,
  background: "green",
  transition: "width .4s"
};

export default function ProgressBar({ percentage }) {
  const elementRef = useRef(undefined);
  const updatedWidth = useThrottle(percentage, 400);

  useEffect(() => {
    if (updatedWidth) {
      updateWidth(updatedWidth);
    }
  }, [updatedWidth]);

  function updateWidth(value) {
    elementRef.current.style.width = `${value}%`;
  }

  return <div ref={elementRef} style={styles} />;
}
