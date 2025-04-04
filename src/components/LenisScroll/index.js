"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const LenisScroll = ({ children }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical", // "vertical" or "horizontal"
            gestureDirection: "vertical", // Direction for touch gestures
            smooth: true, // Enable smooth scrolling
            mouseMultiplier: 1, // Multiplier for mouse wheel events
            smoothTouch: false, // Smooth scrolling for touch devices
            touchMultiplier: 2, // Multiplier for touch gestures
            infinite: false, // Infinite scrolling
        });

        lenisRef.current = lenis;

        // Animation frame loop
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        // Cleanup on component unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default LenisScroll;
