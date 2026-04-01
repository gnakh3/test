import React from "react";

interface ChartProps {
  number: number;
  h1: string;
  h2: string;
}

function Chart({ number, h1, h2 }: ChartProps) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div
          className="w-16 h-16 flex justify-center items-center"
          style={{
            borderRadius: "var(--Corner-radius-Round, 999px)",
            background:
              "var(--Light-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%))",
          }}
        >
          <div
            className="w-12 h-12 flex justify-center items-center font-[18px]"
            style={{
              borderRadius: "var(--Corner-radius-Round, 999px)",
              background:
                "var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))",
            }}
          >
            {number}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className=" font-medium text-[48px] leading-[60px] tracking-[0px] uppercase text-white">
            {h1}
          </div>
          <div className="font-normal text-[18px] leading-[24px] tracking-[0px] text-white/60">
            {h2}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div
          className="h-3 mx-6 bg-[#17151E]"
          style={{
            borderRadius:
              "var(--Corner-radius-10px, 10px) var(--Corner-radius-10px, 10px) 0 0",
          }}
        ></div>
        <div
          className="h-3 mx-3"
          style={{
            borderRadius:
              "var(--Corner-radius-10px, 10px) var(--Corner-radius-10px, 10px) 0 0",
            background:
              "var(--transparent-surface-transparent-white-10, rgba(255, 255, 255, 0.10))",
          }}
        ></div>
      </div>
    </>
  );
}

export default Chart;