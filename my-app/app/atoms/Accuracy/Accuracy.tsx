"use client";

import React from "react";
import Image from "next/image";

function ComplianceAccuracy() {
  const SIZE = 380;
  const CENTER = SIZE / 2;
  const RADIUS = 150;
  const GRAY_STROKE = 22;
  const ORANGE_STROKE = 18;
  const PROGRESS = 0.83;

  const circumference = 2 * Math.PI * RADIUS;
  const dashLen = circumference * PROGRESS;
  const gapLen = circumference - dashLen;

  return (
    <div
      style={{
        position: "relative",
        width: SIZE,
        height: SIZE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* top */}
      <Image
        src="/top.svg"
        alt="top"
        width={2}
        height={80}
        className="absolute top-[40px] left-1/2 -translate-x-1/2 opacity-30 pointer-events-none"
      />

      {/* right */}
      <Image
        src="/right.svg"
        alt="right"
        width={80}
        height={2}
        className="absolute right-[40px] top-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
      />

      {/* bottom */}
      <Image
        src="/bottom.svg"
        alt="bottom"
        width={2}
        height={80}
        className="absolute bottom-[40px] left-1/2 -translate-x-1/2 opacity-30 pointer-events-none"
      />

      {/* left */}
      <Image
        src="/left.svg"
        alt="left"
        width={80}
        height={2}
        className="absolute left-[40px] top-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
      />

      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ position: "absolute", inset: 0 }}
      >
        {/* gray outer track */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={GRAY_STROKE}
        />

        {/* orange arc */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#FF5A00"
          strokeWidth={ORANGE_STROKE}
          strokeLinecap="round"
          strokeDasharray={`${dashLen} ${gapLen}`}
          transform={`rotate(-30 ${CENTER} ${CENTER})`}
        />
      </svg>

      {/* center pill */}
      <div
        style={{
          position: "absolute",
          padding: "10px 20px",
          borderRadius: 999,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.04)",
          color: "white",
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1,
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        Compliance Accuracy
      </div>
    </div>
  );
}

export default ComplianceAccuracy;