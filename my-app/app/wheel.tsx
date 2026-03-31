"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const totalItems = 30;
  const totalBars = 60;

  const labels = Array.from({ length: totalItems }, () => "SO 27001");

  const itemRadius = 600;
  const barRadius = 490;

  const baseActiveIndex = 23;

  const itemStep = 360 / totalItems;
  const barStep = 360 / totalBars;

  const ringRotationOffset = 270 - baseActiveIndex * itemStep;

  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 1600); 

    return () => clearInterval(interval);
  }, []);

  const spinAngle = step * itemStep;

  const currentActiveIndex =
    ((baseActiveIndex - step) % totalItems + totalItems) % totalItems;

  const transitionStyle = "transform 800ms cubic-bezier(1, 0.01, 0.02, 1)";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070312]">
      <div className="absolute inset-y-0 right-0 w-[1500px] overflow-hidden">
        <div className="absolute right-[-600px] top-1/2 h-[1300px] w-[1300px] -translate-y-1/2">
          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

          {Array.from({ length: totalBars }).map((_, i) => {
            const angle = i * barStep + ringRotationOffset + spinAngle;

            return (
              <div
                key={`bar-${i}`}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  transition: transitionStyle,
                }}
              >
                <div
                  className="h-7 w-[2px] rounded-full bg-white"
                  style={{
                    transform: `translateY(-${barRadius}px)`,
                  }}
                />
              </div>
            );
          })}

          {labels.map((label, i) => {
            const angle = i * itemStep + ringRotationOffset + spinAngle;
            const isActive = i === currentActiveIndex;

            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  transition: transitionStyle,
                }}
              >
                <button
                  className="flex h-[56px] w-[118px] items-center justify-center rounded-[99px] px-6 py-4 text-white"
                  style={{
                    transform: isActive
                      ? `translateY(-${itemRadius}px) rotate(${-angle}deg)`
                      : `translateY(-${itemRadius}px) rotate(90deg)`,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.012) 100%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: isActive
                      ? "0 0 14px rgba(255,255,255,0.08)"
                      : "0 0 10px rgba(120,119,255,0.04)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <span className="text-[16px] font-medium leading-6 tracking-[0.1px]">
                    {label}
                  </span>
                </button>
              </div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[-505px]">
            <div className="flex items-center">
            <Image src="/vector.svg" alt="Vector" width={185} height={10} />
              <div
                className="ml-4 flex h-[60px] w-[256px] items-center gap-[10px] rounded-[99px] pr-[20px] pl-[6px] pt-[6px] pb-[6px] text-white"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.012) 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 0 12px rgba(120,119,255,0.05)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <Image
                  src="/Primary Button.svg"
                  alt="Checkmark"
                  width={48}
                  height={48}
                  priority
                />

                <span
                  className="whitespace-nowrap text-[16px] font-medium leading-6 tracking-[0.1px] text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Complete Coverage
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[220px] bg-gradient-to-b from-[#070312] via-[#070312]/92 to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[220px] bg-gradient-to-t from-[#070312] via-[#070312]/92 to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[90px] bg-gradient-to-r from-[#070312] to-transparent" />
      </div>
    </main>
  );
}
