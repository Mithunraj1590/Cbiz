"use client";
import { useRef } from "react";
import useIsInView from "../../logic/useIsInViewPort";

const useAnimate = ({ options }) => {
  const elementRef = useRef(null);
  const optionsProps = {
    threshold: 0.18,
    ...options,
  };
  const intersecting = useIsInView(elementRef, { ...optionsProps }, false);

  const animationClass = intersecting ? "visible" : "";

  return {
    elementRef,
    animationClass,
  };
};

export default useAnimate;
