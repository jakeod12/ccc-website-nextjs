import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function IconPatent({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path d="M14 2v6h6" />
      <circle cx="12" cy="15" r="3" />
      <path d="M12 12v-1.5" />
      <path d="M14.6 13.5l1.3-.75" />
      <path d="M14.6 16.5l1.3.75" />
      <path d="M12 18v1.5" />
      <path d="M9.4 16.5l-1.3.75" />
      <path d="M9.4 13.5l-1.3-.75" />
    </svg>
  );
}

export function IconFDA({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2l8 4v6c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconOperations({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
      <path d="M19.4 15a9 9 0 01-1.8 2.6" />
      <circle cx="20" cy="17" r="2.5" />
      <path d="M20 15.5v-1" />
      <path d="M21.3 16l.9-.5" />
      <path d="M21.3 18l.9.5" />
      <path d="M20 18.5v1" />
      <path d="M18.7 18l-.9.5" />
      <path d="M18.7 16l-.9-.5" />
    </svg>
  );
}

export function IconBeverageGrade({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 3h6v2a4 4 0 01-1.18 2.82L12 9.64l-1.82-1.82A4 4 0 019 5V3z" />
      <path d="M10.18 7.82L8 10v7a3 3 0 003 3h2a3 3 0 003-3v-7l-2.18-2.18" />
      <path d="M8 14h8" />
    </svg>
  );
}

export function IconDomestic({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Simplified USA outline */}
      <path d="M3 10c1-2 2-3 4-4s3 0 4-1 2-2 4-2 3 1 4 2 2 2 2 4-1 3-2 4-2 2-3 3-3 1-5 1-3-1-4-2-2-2-3-3 0-2-1-2z" />
      <path d="M10 9l1 2" />
      <path d="M14 10l-1 2" />
    </svg>
  );
}

export function IconPartner({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 11l3 3 7-7" />
      <path d="M2 12c0-1 .5-2.5 2-3.5S7 7 8 8l1 1" />
      <path d="M22 12c0-1-.5-2.5-2-3.5S17 7 16 8l-1 1" />
      <path d="M8 8L6 6" />
      <path d="M16 8l2-2" />
      <path d="M10 14l-3 3c-.5.5-.5 1.5 0 2s1.5.5 2 0l3-3" />
      <path d="M14 14l3 3c.5.5.5 1.5 0 2s-1.5.5-2 0l-3-3" />
    </svg>
  );
}

export function IconCapture({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* CO₂ molecule */}
      <circle cx="12" cy="12" r="3" />
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="12" r="2" />
      {/* Capture brackets */}
      <path d="M3 8V5a2 2 0 012-2h3" />
      <path d="M21 8V5a2 2 0 00-2-2h-3" />
      <path d="M3 16v3a2 2 0 002 2h3" />
      <path d="M21 16v3a2 2 0 01-2 2h-3" />
    </svg>
  );
}

export function IconCryogenic({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Snowflake */}
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M4.93 4.93l14.14 14.14" />
      <path d="M19.07 4.93L4.93 19.07" />
      {/* Branch tips */}
      <path d="M12 2l-2 3" />
      <path d="M12 2l2 3" />
      <path d="M12 22l-2-3" />
      <path d="M12 22l2-3" />
      <path d="M2 12l3 2" />
      <path d="M2 12l3-2" />
      <path d="M22 12l-3 2" />
      <path d="M22 12l-3-2" />
    </svg>
  );
}
