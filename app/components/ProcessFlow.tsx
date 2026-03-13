"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    title: "Source",
    subtitle: "CO₂ from RNG upgraders, power plants & industrial processes",
    icon: (
      <g>
        {/* Factory / smokestack */}
        <rect x="6" y="20" width="28" height="16" rx="1" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <rect x="10" y="4" width="5" height="16" rx="0.5" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <rect x="18" y="10" width="5" height="10" rx="0.5" strokeWidth="1.5" stroke="currentColor" fill="none" />
        {/* Smoke */}
        <path d="M12.5 4c0-1.5 1-2.5 2-2s1 2 2.5 1.5" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M20.5 10c0-1 .8-2 1.8-1.5s.5 1.5 1.7 1.2" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
      </g>
    ),
  },
  {
    title: "Capture",
    subtitle: "CCC captures CO₂ from industrial waste streams",
    icon: (
      <g>
        {/* CO₂ molecule */}
        <circle cx="20" cy="20" r="5" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <circle cx="12" cy="20" r="3.5" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <circle cx="28" cy="20" r="3.5" strokeWidth="1.5" stroke="currentColor" fill="none" />
        {/* Capture brackets */}
        <path d="M5 10V6a2 2 0 012-2h5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M35 10V6a2 2 0 00-2-2h-5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M5 30v4a2 2 0 002 2h5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M35 30v4a2 2 0 01-2 2h-5" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" />
      </g>
    ),
  },
  {
    title: "Purify",
    subtitle: "Cryogenic purification to beverage-grade quality",
    icon: (
      <g>
        {/* Snowflake / crystal */}
        <path d="M20 4v32" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <path d="M4 20h32" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <path d="M8.7 8.7l22.6 22.6" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <path d="M31.3 8.7L8.7 31.3" strokeWidth="1.5" stroke="currentColor" fill="none" />
        {/* Branch details */}
        <path d="M20 4l-3 4.5" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M20 4l3 4.5" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M20 36l-3-4.5" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M20 36l3-4.5" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M4 20l4.5 3" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M4 20l4.5-3" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M36 20l-4.5 3" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M36 20l-4.5-3" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
      </g>
    ),
  },
  {
    title: "Deliver",
    subtitle: "Supply to beverage, food, agriculture & sequestration markets",
    icon: (
      <g>
        {/* Tanker truck */}
        <rect x="4" y="16" width="22" height="12" rx="6" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <rect x="26" y="20" width="8" height="8" rx="1" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <circle cx="10" cy="30" r="3" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <circle cx="20" cy="30" r="3" strokeWidth="1.5" stroke="currentColor" fill="none" />
        <circle cx="32" cy="30" r="3" strokeWidth="1.5" stroke="currentColor" fill="none" />
        {/* Delivery lines */}
        <path d="M26 24h8" strokeWidth="1.2" stroke="currentColor" fill="none" />
      </g>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
};

export default function ProcessFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="w-full">
      {/* CSS for animated dashed lines */}
      <style jsx>{`
        @keyframes dashFlow {
          to {
            stroke-dashoffset: -24;
          }
        }
        .animated-dash {
          stroke-dasharray: 8 8;
          stroke-dashoffset: 0;
          animation: dashFlow 1.2s linear infinite;
        }
      `}</style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0"
      >
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-col md:flex-row items-center md:flex-1">
            {/* Step card */}
            <motion.div
              variants={stepVariants}
              className="flex flex-col items-center text-center w-full max-w-[200px]"
            >
              {/* Icon circle */}
              <div className="w-20 h-20 rounded-full bg-white border-2 border-[#96C3E1] flex items-center justify-center mb-4 shadow-lg shadow-[#96C3E1]/10">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="text-[#0F2D5A]"
                >
                  {step.icon}
                </svg>
              </div>
              {/* Step number */}
              <div className="w-7 h-7 rounded-full bg-[#2D69B4] text-white text-xs font-bold flex items-center justify-center mb-2">
                {i + 1}
              </div>
              {/* Title */}
              <h4 className="text-[#0F2D5A] font-bold text-lg mb-1">{step.title}</h4>
              {/* Subtitle */}
              <p className="text-gray-500 text-sm leading-snug px-2">{step.subtitle}</p>
            </motion.div>

            {/* Connector arrow (not after last step) */}
            {i < steps.length - 1 && (
              <motion.div
                variants={stepVariants}
                className="flex items-center justify-center my-4 md:my-0 md:mx-2 md:mt-10 flex-shrink-0"
              >
                {/* Horizontal arrow (desktop) */}
                <svg
                  className="hidden md:block"
                  width="60"
                  height="20"
                  viewBox="0 0 60 20"
                >
                  <line
                    x1="0"
                    y1="10"
                    x2="48"
                    y2="10"
                    stroke="#2D69B4"
                    strokeWidth="2"
                    className={isInView ? "animated-dash" : ""}
                  />
                  <polygon points="48,4 60,10 48,16" fill="#2D69B4" />
                </svg>
                {/* Vertical arrow (mobile) */}
                <svg
                  className="block md:hidden"
                  width="20"
                  height="48"
                  viewBox="0 0 20 48"
                >
                  <line
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="36"
                    stroke="#2D69B4"
                    strokeWidth="2"
                    className={isInView ? "animated-dash" : ""}
                  />
                  <polygon points="4,36 10,48 16,36" fill="#2D69B4" />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
