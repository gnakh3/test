import React from "react";
import Image from "next/image";

const Dashboard = () => {
    return (
        // =========================
        // WHOLE DASHBOARD WRAPPER
        // =========================
        <div className="mt-[200px] flex h-[864px] w-[1504px] flex-col items-center justify-center">

            {/* =========================
          TOP THIN BAR 1
      ========================= */}
            <div className="w-[1376px] rounded-t-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_-173.65%,rgba(255,255,255,0)_87.22%)] p-[1px]">
                <div
                    className="h-[12px] rounded-t-[16px]"
                    style={{
                        opacity: 0.75,
                        background: "rgba(255, 255, 255, 0.12)",
                    }}
                ></div>
            </div>

            {/* =========================
          TOP THIN BAR 2
      ========================= */}
            <div className="w-[1408px] rounded-t-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_-173.65%,rgba(255,255,255,0)_87.22%)] p-[1px]">
                <div className="flex h-[12px] w-full gap-[10px] rounded-t-[16px] bg-[rgba(255,255,255,0.12)] p-[10px] opacity-50"></div>
            </div>

            {/* =========================
          MAIN BIG DASHBOARD CARD
      ========================= */}
            <div
                className="flex h-[840px] w-[1440px] rounded-[16px]"
                style={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderImageSlice: 1,
                    borderImageSource:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.2) -173.65%, rgba(255, 255, 255, 0) 87.22%)",
                    background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%), rgba(18, 16, 25, 0.60)",
                }}
            >
                <div className="flex w-full flex-col">

                    {/* =========================
              HEADER
          ========================= */}
                    <div className="flex w-full items-center justify-between pt-[14px] pr-[20px]  pl-[20px]">

                        {/* left logo */}
                        <Image src="/Logos.svg" alt="logo" width={44} height={44} />

                        {/* right header actions */}
                        <div className="flex gap-[8px]">
                            <Image src="/bell.svg" alt="bell" width={40} height={40} />
                            <Image src="/dots.svg" alt="dots" width={40} height={40} />

                            {/* profile dropdown */}
                            <div
                                className="flex h-[40px] w-[72px] items-center rounded-[999px]"
                                style={{
                                    padding: "4px 4px",
                                    gap: "0px",
                                    background: "rgba(255, 255, 255, 0.06)",
                                }}
                            >
                                {/* avatar */}
                                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#2D45FD] p-[4px] text-[14px] font-medium text-white">
                                    I
                                </div>

                                {/* dropdown arrow */}
                                <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
                            </div>
                        </div>
                    </div>

                    {/* =========================
              HEADER BOTTOM LINE
          ========================= */}
                    <div className="mt-[14px] h-px  bg-white/[0.08] pl-0 pr-0 "></div>

                    {/* =========================
              BODY = SIDEBAR + CONTENT
          ========================= */}
                    <div className="flex h-full w-full">

                        {/* =========================
                LEFT SIDEBAR
            ========================= */}
                        <div className="flex w-[300px] flex-col justify-between border-r border-white/[0.08] pt-[14px] pb-[20px] pr-[14px] pl-[20px]">

                            {/* top nav items */}
                            <div className="flex flex-col">

                                {/* active item */}
                                <div className="flex h-[48px] w-[264px] items-center gap-[8px] rounded-[8px] bg-[#2D45FD] px-[10px]">
                                    <Image src="/dashboardactive.svg" alt="dashboard" width={20} height={20} />
                                    <div className="text-[16px] leading-[20px] text-white">Dashboard</div>
                                </div>

                                {/* normal items */}
                                <div className="flex h-[48px] w-[264px] items-center gap-[8px] rounded-[8px] px-[10px]">
                                    <Image src="/compliance.svg" alt="compliance" width={20} height={20} />
                                    <div className="text-[16px] leading-[20px] text-white/80">Compliance</div>
                                </div>

                                <div className="flex h-[48px] w-[264px] items-center gap-[8px] rounded-[8px] px-[10px]">
                                    <Image src="/audits.svg" alt="audits" width={20} height={20} />
                                    <div className="text-[16px] leading-[20px] text-white/80">Audits</div>
                                </div>

                                <div className="flex h-[48px] w-[264px] items-center gap-[8px] rounded-[8px] px-[10px]">
                                    <Image src="/tasks.svg" alt="tasks" width={20} height={20} />
                                    <div className="text-[16px] leading-[20px] text-white/80">Tasks</div>
                                </div>

                                <div className="flex h-[48px] w-[264px] items-center gap-[8px] rounded-[8px] px-[10px]">
                                    <Image src="/files.svg" alt="files" width={20} height={20} />
                                    <div className="text-[16px] leading-[20px] text-white/80">Files</div>
                                </div>

                                <div className="flex h-[48px] w-[264px] items-center gap-[8px] rounded-[8px] px-[10px]">
                                    <Image src="/integrations.svg" alt="integrations" width={20} height={20} />
                                    <div className="text-[16px] leading-[20px] text-white/80">Integrations</div>
                                </div>
                            </div>

                            {/* bottom account section */}
                            <div className="flex flex-col gap-[6px]">
                                <div className="mb-[6px] text-[12px] leading-[16px] text-white/40">
                                    Account
                                </div>

                                <div className="flex h-[48px] w-[260px] justify-between rounded-[8px] ">
                                    <div className="flex items-center gap-[10px]">
                                        <Image src="/team.svg" alt="Team" width={20} height={20} />
                                        <div className="text-[16px] leading-[20px] text-white/80">Team</div>
                                    </div>
                                    <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
                                </div>

                                <div className="flex h-[48px] w-[260px] justify-between rounded-[8px] ">
                                    <div className="flex items-center gap-[10px]">
                                        <Image src="/settings.svg" alt="Settings" width={20} height={20} />
                                        <div className="text-[16px] leading-[20px] text-white/80">Settings</div>
                                    </div>
                                    <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
                                </div>

                                <div className="flex h-[48px] w-[260px] justify-between rounded-[8px]">
                                    <div className="flex items-center gap-[10px]">
                                        <Image src="/customers.svg" alt="Customers" width={20} height={20} />
                                        <div className="text-[16px] leading-[20px] text-white/80">Customers</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =========================
                RIGHT MAIN CONTENT
            ========================= */}
                        <div className="flex-1 pt-[22px] pl-[32px] pr-[20px]">

                            {/* =========================
                  TOP CONTENT ROW
              ========================= */}
                            <div className="flex items-start justify-between">

                                {/* title + subtitle */}
                                <div>
                                    <div className="text-[20px] font-semibold leading-[28px] text-white">
                                        Good afternoon, Itai
                                    </div>
                                    <div className="mt-[4px] text-[16px] leading-[24px] text-white/45">
                                        Real-time visibility into compliance, risk, and control posture
                                    </div>
                                </div>

                                {/* time filter */}
                                <div
                                    className="flex h-[40px] w-[367px] items-center rounded-full px-[6px]"
                                    style={{ background: "rgba(255,255,255,0.06)" }}
                                >
                                    <div className="rounded-full bg-white/[0.08] px-[14px] py-[8px] text-[16px] w-[133px] items-center text-white">
                                        Last 30 Days
                                    </div>
                                    <div className="px-[14px]  w-[131px] text-[16px] text-white/45">Last 90 Days</div>
                                    <div className="px-[14px]  w-[91px] text-[16px] text-white/45">Custom</div>
                                </div>
                            </div>

                            {/* =========================
                  MAIN CONTENT GRID
              ========================= */}
                            <div className="mt-[22px] flex gap-[26px]">

                                {/* =========================
                    LEFT BIG CARD
                ========================= */}
                                <div
                                    className="flex h-[620px] w-[530px] flex-col justify-between rounded-[12px] p-[16px]"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        background: "rgba(255,255,255,0.02)",
                                    }}
                                >
                                    {/* center decor image */}
                                    <div className="flex h-full items-center justify-center">
                                        <Image
                                            src="/decor.svg"
                                            alt="decor"
                                            width={356}
                                            height={411.0794}
                                            className="h-auto w-[320px] object-contain"
                                        />
                                    </div>

                                    {/* tabs */}
                                    <div className="flex flex-wrap gap-[8px] w-[482px]">
                                        <div className="rounded-[8px] bg-[#2D45FD] px-[14px] py-[8px] text-[16px] leading-[24px] text-white h-[40px] w-[104px] text-center">
                                            Controls
                                        </div>
                                        <div className="rounded-[8px] bg-white/[0.06] px-[14px] py-[8px] text-[16px] leading-[24px] text-white/80 w-[192px] h-[40px] text-center">
                                            System Governance
                                        </div>
                                        <div className="rounded-[8px] bg-white/[0.06] px-[14px] py-[8px] text-[16px] leading-[24px] text-white/80 w-[130px] h-[40px] text-center">
                                            Vendor Risk
                                        </div>
                                        <div className="rounded-[8px] bg-white/[0.06] px-[14px] py-[8px] text-[16px] leading-[24px] text-white/80 w-[195px] h-[40px] text-center">
                                            Framework Mapping
                                        </div>
                                        <div className="rounded-[8px] bg-white/[0.06] px-[14px] py-[8px] text-[16px] leading-[24px] text-white/80 w-[134px] h-[40px] text-center">
                                            Risk Scoring
                                        </div>
                                        <div className="rounded-[8px] bg-white/[0.06] px-[14px] py-[8px] text-[16px] leading-[24px] text-white/80 w-[129px] h-[40px] text-center">
                                            Evidence AI
                                        </div>
                                    </div>
                                </div>

                                {/* =========================
                    RIGHT SIDE COLUMN
                ========================= */}
                                <div className="flex w-[530px] flex-col gap-[14px]">

                                    {/* =========================
                      TOP STATS CARD
                  ========================= */}
                                    <div
                                        className="rounded-[10px] p-[16px] h-[144px]"
                                        style={{
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            background: "rgba(255,255,255,0.04)",
                                        }}
                                    >
                                        <div className="flex">

                                            {/* stat 1 */}
                                            <div className="flex-1 border-r border-white/[0.08] pr-[12px]">
                                                <div className="text-[15px] leading-[24px] text-white/45">
                                                    Controls Monitored
                                                </div>
                                                <div className="mt-[2px] text-[44px] font-demibold leading-[48px] text-white">
                                                    1,287
                                                </div>
                                            </div>

                                            {/* stat 2 */}
                                            <div className="flex-1 border-r border-white/[0.08] px-[12px]">
                                                <div className="text-[15px] leading-[24px] text-white/45">
                                                    Failures (yd)
                                                </div>
                                                <div className="mt-[2px] text-[44px] font-demibold leading-[48px] text-white">
                                                    82
                                                </div>
                                            </div>

                                            {/* stat 3 */}
                                            <div className="flex-1 pl-[12px]">
                                                <div className="text-[15px] leading-[24px] text-white/45">
                                                    Avg. Resolution
                                                </div>
                                                <div className="mt-[2px] text-[44px] font-demibold leading-[48px] text-white">
                                                    26
                                                </div>
                                            </div>
                                        </div>

                                        {/* colored progress line */}
                                        <div className="mt-[14px] flex gap-[4px]">
                                            <div className="h-[6px] w-[195px] flex-1 rounded-full bg-[#3EBE00]"></div>
                                            <div className="h-[6px] w-[196px] flex-1 rounded-full bg-[#FF4E02]"></div>
                                            <div className="h-[6px] w-[53px] rounded-full bg-[#F99718]"></div>
                                            <div className="h-[6px] w-[20px] rounded-full bg-[#E62102]"></div>
                                            <div className="h-[6px] w-[10px] rounded-full bg-[#E62102]"></div>
                                        </div>
                                    </div>
                                    {/* =========================
    CHART CARD
========================= */}
                                    <div className="rounded-[12px] border border-white/[0.08] bg-white/[0.04] p-[16px] h-[316px]">
                                        {/* title */}
                                        <div className="mb-[14px] flex items-center justify-between">
                                            <div className="text-[16px] font-normal leading-[24px] text-white">
                                                Vendor Risk Distribution
                                            </div>
                                            <div className="text-white">•••</div>
                                        </div>

                                        {/* chart box */}
                                        <div
                                            className="relative h-[200px] w-[514px] overflow-hidden rounded-[10px]"
                                            style={{
                                                background:
                                                    "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                                            }}
                                        >
                                            {/* top graph area */}
                                            <div className="absolute left-0 top- h-[176px] w-full">
                                                {/* y axis numbers */}
                                                <div className="absolute left-[16px] top-[10px] flex h-[138px] flex-col justify-between text-[12px] leading-[16px] text-white/70">
                                                    <div>30</div>
                                                    <div>25</div>
                                                    <div>20</div>
                                                    <div>16</div>
                                                    <div>10</div>
                                                </div>

                                                {/* dashed lines */}
                                                <div className="absolute left-[48px] right-[16px] top-[16px] h-[128px] flex-col justify-between flex">
                                                    <div className="border-t border-dashed border-white/[0.10]"></div>
                                                    <div className="border-t border-dashed border-white/[0.10]"></div>
                                                    <div className="border-t border-dashed border-white/[0.10]"></div>
                                                    <div className="border-t border-dashed border-white/[0.10]"></div>
                                                    <div className="border-t border-dashed border-white/[0.10]"></div>
                                                </div>

                                                {/* bars row */}
                                                <div className="absolute bottom-[-20px] left-[48px] flex w-[450px] items-end gap-[24px]">
                                                    {/* Low */}
                                                    <div className="w-[67.2px]">
                                                        <div className="w-full overflow-hidden rounded-[6px]">
                                                            <div className="h-[18px] w-full bg-[#FF5A0A]"></div>
                                                            <div className="h-[42px] w-full bg-[#3347F6]"></div>
                                                        </div>
                                                    </div>

                                                    {/* Medium */}
                                                    <div className="w-[67.2px]">
                                                        <div className="w-full overflow-hidden rounded-[6px]">
                                                            <div className="h-[30px] w-full bg-[#FF5A0A]"></div>
                                                            <div className="h-[58px] w-full bg-[#3347F6]"></div>
                                                        </div>
                                                    </div>

                                                    {/* High */}
                                                    <div className="w-[67.2px]">
                                                        <div className="h-[132px] w-full overflow-hidden rounded-[6px] bg-[#3347F6]"></div>
                                                    </div>

                                                    {/* Medium */}
                                                    <div className="w-[67.2px]">
                                                        <div className="w-full overflow-hidden rounded-[6px]">
                                                            <div className="h-[20px] w-full bg-[#FF5A0A]"></div>
                                                            <div className="h-[74px] w-full bg-[#3347F6]"></div>
                                                        </div>
                                                    </div>

                                                    {/* High */}
                                                    <div className="w-[67.2px]">
                                                        <div className="w-full overflow-hidden rounded-[6px]">
                                                            <div className="h-[72px] w-full bg-[#FF5A0A]"></div>
                                                            <div className="h-[28px] w-full bg-[#3347F6]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* bottom labels area */}
                                            <div className="absolute bottom-[-50px] z-100 left-0 flex h-[72px] w-full items-center justify-start border-t border-white/[0.04] pl-[48px]">
                                                <div className="flex w-[450px] gap-[24px]">
                                                    <div className="flex w-[67.2px] justify-center text-[16px] leading-[24px] text-white/85">
                                                        Low
                                                    </div>
                                                    <div className="flex w-[67.2px] justify-center text-[16px] leading-[24px] text-white/85">
                                                        Medium
                                                    </div>
                                                    <div className="flex w-[67.2px] justify-center text-[16px] leading-[24px] text-white/85">
                                                        High
                                                    </div>
                                                    <div className="flex w-[67.2px] justify-center text-[16px] leading-[24px] text-white/85">
                                                        Medium
                                                    </div>
                                                    <div className="flex w-[67.2px] justify-center text-[16px] leading-[24px] text-white/85">
                                                        High
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* =========================
                      BOTTOM FILE CARDS
                  ========================= */}
                                    <div className="flex gap-[12px]">

                                        {/* file card 1 */}
                                        <div
                                            className="flex h-[128px] w-[166px] flex-1 flex-col gap-[16px] rounded-[12px] p-[12px]"
                                            style={{
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                background: "rgba(255,255,255,0.02)",
                                            }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] bg-white/[0.08]">
                                                    <Image src="/folder.svg" alt="folder" width={32} height={32} />
                                                </div>
                                                <div className="text-white/60">•••</div>
                                            </div>

                                            <div>
                                                <div className="text-[15px] leading-[20px] text-white">
                                                    Lockout Proc.
                                                </div>
                                                <div className="mt-[2px] text-[13px] leading-[18px] text-white/45">
                                                    Evidence
                                                </div>
                                            </div>
                                        </div>

                                        {/* file card 2 */}
                                        <div
                                            className="flex h-[128px] w-[166px] flex-1 flex-col gap-[16px] rounded-[12px] p-[12px]"
                                            style={{
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                background: "rgba(255,255,255,0.02)",
                                            }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] bg-white/[0.08]">
                                                    <Image src="/folder.svg" alt="folder" width={32} height={32} />
                                                </div>
                                                <div className="text-white/60">•••</div>
                                            </div>

                                            <div>
                                                <div className="text-[15px] leading-[20px] text-white">
                                                    Colorado Audit
                                                </div>
                                                <div className="mt-[2px] text-[13px] leading-[18px] text-white/45">
                                                    In Progress
                                                </div>
                                            </div>
                                        </div>

                                        {/* file card 3 */}
                                        <div
                                            className="flex h-[128px] w-[166px] flex-1 flex-col gap-[16px] rounded-[12px] p-[12px]"
                                            style={{
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                background: "rgba(255,255,255,0.02)",
                                            }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <Image src="/zero.svg" alt="folder" width={32} height={32} />
                                                <div className="text-white/60">•••</div>
                                            </div>

                                            <div>
                                                <div className="text-[15px] leading-[20px] text-white">
                                                    OGC Project
                                                </div>
                                                <div className="mt-[2px] text-[13px] leading-[18px] text-white/45">
                                                    ISO 27001
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;