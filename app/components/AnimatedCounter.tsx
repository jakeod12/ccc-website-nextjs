"use client";

import { useRef, useEffect, useSyncExternalStore } from "react";
import { useInView, useSpring, useMotionValue } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isClient = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    duration,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + latest.toFixed(decimals) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix, prefix, decimals]);

  // Show target value for SSR/SEO, animate from 0 on client
  return (
    <span ref={ref} className={className}>
      {isClient ? `${prefix}0${suffix}` : `${prefix}${target.toFixed(decimals)}${suffix}`}
    </span>
  );
}
