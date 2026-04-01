import React from 'react'
import Chart from '../molecules/Chart/Chart' 
import Ratio from '../atoms/Ratio/Ratio';
import Monitoring from '../atoms/Monitoring/Monitoring';
import Accuracy from '../atoms/Accuracy/Accuracy';

const provenimpact = () => {
  return (
    <div
      className=" text-white w-screen h-screen flex flex-row gap-4 items-center justify-center"
      style={{ background: "var(--Surface-Black, #121019);" }}
    >
      <div className="w-[479.33] p-4 flex flex-col">
        <Chart
          number={1}
          h1="80%"
          h2="Reduction in manual effort."
        />
          <div className="h-100.5 flex relative items-center justify-center" style={{
                borderRadius: 'var(--Corner-radius-10px, 10px)',
                border: '1px var(--Stroke-Gradient-2, #FFF)',
                background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
              }}>
                <Ratio />
          </div>
      </div>

      <div className="w-px h-164.5" style={{background: "var(--transparent-surface-transparent-white-15, rgba(255, 255, 255, 0.16))"}}></div>


      <div className="w-[479.33] p-4 flex flex-col">
        <Chart
          number={2}
          h1="99.99%"
          h2="Compliance Accuracy All Monitored Frameworks"
        />
          <div className="h-100.5 flex relative items-center justify-center" style={{
                borderRadius: 'var(--Corner-radius-10px, 10px)',
                border: '1px var(--Stroke-Gradient-2, #FFF)',
                background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
              }}>
                <Accuracy />
          </div>
      </div>

      <div className="w-px h-164.5" style={{background: "var(--transparent-surface-transparent-white-15, rgba(255, 255, 255, 0.16))"}}></div>

      <div className="w-[479.33] p-4 flex flex-col">
        <Chart
          number={3}
          h1="24/7"
          h2="Continuous verification."
        />
          <div className="h-100.5 flex flex-col relative items-center justify-center p-6 gap-[18px]" style={{
                borderRadius: 'var(--Corner-radius-10px, 10px)',
                border: '1px var(--Stroke-Gradient-2, #FFF)',
                background: 'var(--Widget-Gradient, linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%))'
              }}>
                <Monitoring />
            <div className="flex flex-row gap-0.5 font-medium leading-6 tracking-[0.1px]">
            </div>
          </div>
      </div>
    </div>
  );
}

export default provenimpact