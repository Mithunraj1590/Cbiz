"use client";
import { createElement } from "react";
import useAnimate from "../UseAnimate";


const Animate = ({ as="div",effect, className,options, children, ...rest }) => {
  const { animationClass, elementRef } = useAnimate({options});

  return createElement(
    as,
    {
      ...rest,
      className: `${className} ${animationClass}`,
      "data-anim": effect,
      ref: elementRef,
    },
    children
  );
};

export default Animate;
