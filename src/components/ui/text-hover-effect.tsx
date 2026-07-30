"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1400 240"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#1a100d" />
              <stop offset="25%" stopColor="#362923" />
              <stop offset="50%" stopColor="#1a100d" />
              <stop offset="75%" stopColor="#362923" />
              <stop offset="100%" stopColor="#1a100d" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="0"
        y="50%"
        textAnchor="start"
        dominantBaseline="middle"
        textLength="1400"
        lengthAdjust="spacingAndGlyphs"
        strokeWidth="1.5"
        className="fill-transparent font-bold"
        style={{ opacity: hovered ? 0.7 : 0, fontSize: 210, fontFamily: "var(--font-cormorant), serif", stroke: "#362923" }}
      >
        {text}
      </text>
      <motion.text
        x="0"
        y="50%"
        textAnchor="start"
        dominantBaseline="middle"
        textLength="1400"
        lengthAdjust="spacingAndGlyphs"
        strokeWidth="1.5"
        className="fill-transparent font-bold"
        style={{ stroke: "#362923", fontSize: 210, fontFamily: "var(--font-cormorant), serif" }}
        initial={{ strokeDashoffset: 2000, strokeDasharray: 2000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 2000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="0"
        y="50%"
        textAnchor="start"
        dominantBaseline="middle"
        textLength="1400"
        lengthAdjust="spacingAndGlyphs"
        stroke="url(#textGradient)"
        strokeWidth="1.5"
        mask="url(#textMask)"
        className="fill-transparent font-bold"
        style={{ fontSize: 210, fontFamily: "var(--font-cormorant), serif" }}
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #FFFDF666 50%, #36292333 100%)",
      }}
    />
  );
};
