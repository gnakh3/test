"use client";

import { useEffect, useRef, useState } from "react";

const BEZIER = "cubic-bezier(0.99, 0, 0.1, 1)";
const HOLD = 1000;
const DURATION = 1000;
const CYCLE = HOLD + DURATION;

const STEPS = {
    before: [226, 289],
    after: [103, 50],
};

const PERCENT_STEPS = {
    before: [60, 90],
    after: [30, 10],
};

function easeBezier(t: number) {
    return 1 - Math.pow(1 - t, 3);
}

function useAnimatedNumber(from: number, to: number, trigger: number) {
    const [value, setValue] = useState(from);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const start = performance.now();

        const animate = (now: number) => {
            const elapsed = now - start;
            const t = Math.min(elapsed / DURATION, 1);
            const eased = easeBezier(t);

            setValue(Math.round(from + (to - from) * eased));

            if (t < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [from, to, trigger]);

    return value;
}

export default function BeforeAfterBars() {
    const [step, setStep] = useState(0);
    const [prevStep, setPrevStep] = useState(0);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const animateToNext = () => {
            setStep((current) => {
                const next = current === 0 ? 1 : 0;
                setPrevStep(current);
                setTick((v) => v + 1);
                return next;
            });
        };

        const firstTimeout = setTimeout(() => {
            animateToNext();

            const interval = setInterval(() => {
                animateToNext();
            }, CYCLE);

            (window as any).__beforeAfterInterval = interval;
        }, HOLD);

        return () => {
            clearTimeout(firstTimeout);
            if ((window as any).__beforeAfterInterval) {
                clearInterval((window as any).__beforeAfterInterval);
            }
        };
    }, []);

    const beforePercent = useAnimatedNumber(
        PERCENT_STEPS.before[prevStep],
        PERCENT_STEPS.before[step],
        tick
    );

    const afterPercent = useAnimatedNumber(
        PERCENT_STEPS.after[prevStep],
        PERCENT_STEPS.after[step],
        tick
    );

    const beforeWidth = STEPS.before[step];
    const afterWidth = STEPS.after[step];

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily:
                    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>

            <div
                style={{
                    width: 399.3333435058594,
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: 90,
                }}
            >
                <div
                    style={{
                        width: 399.3333435058594,
                        borderRadius: 12,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.03)",
                        paddingTop: 20,
                        paddingRight: 20,
                        paddingBottom: 20,
                        paddingLeft: 20,
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            width: 359.3333435058594,
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgba(255,255,255,0.85)",
                                }}
                            >
                                Before
                            </span>
                            <span
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgba(255,255,255,0.85)",
                                    fontVariantNumeric: "tabular-nums",
                                }}
                            >
                                {beforePercent}%
                            </span>
                        </div>

                        <div
                            style={{
                                width: 359.3333435058594,
                                height: 24,
                                background: "rgba(255,255,255,0.06)",
                                borderRadius: 4,
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    width: beforeWidth,
                                    height: 24,
                                    background: "#FF4E02",
                                    borderTopLeftRadius: 4,
                                    borderBottomLeftRadius: 4,
                                    transition: `width ${DURATION}ms ${BEZIER}`,
                                }}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            width: "calc(100% + 40px)",
                            height: 1,
                            background: "rgba(255,255,255,0.08)",
                            marginLeft: -20,
                        }}
                    />

                    <div
                        style={{
                            width: 359.3333435058594,
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgba(255,255,255,0.85)",
                                }}
                            >
                                After
                            </span>
                            <span
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "rgba(255,255,255,0.85)",
                                    fontVariantNumeric: "tabular-nums",
                                }}
                            >
                                {afterPercent}%
                            </span>
                        </div>

                        <div
                            style={{
                                width: 359.3333435058594,
                                height: 24,
                                background: "rgba(255,255,255,0.06)",
                                borderRadius: 4,
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    width: afterWidth,
                                    height: 24,
                                    background: "#3EBE00",
                                    borderTopLeftRadius: 4,
                                    borderBottomLeftRadius: 4,
                                    transition: `width ${DURATION}ms ${BEZIER}`,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            fontSize: 18,
                            fontWeight: 400,
                            lineHeight: "24px",
                            color: "rgba(255,255,255,0.6)",
                        }}
                    >
                        Processes reduced time spent on tasks
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                borderRadius: 999,
                                padding: 1,
                                background:
                                    "linear-gradient(180deg, rgba(255, 255, 255, 0.2) -173.65%, rgba(255, 255, 255, 0) 87.22%)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    height: 48,
                                    width: 146,
                                    alignItems: "center",
                                    gap: 12,
                                    borderRadius: 999,
                                    padding: "12px 20px",
                                    background: "var(--transparent-surface-transparent-white-6, #FFFFFF0F)",
                                }}
                            >
                                <div
                                    style={{
                                        height: 8,
                                        width: 8,
                                        borderRadius: 999,
                                        background: "#3EBE00",
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        lineHeight: "24px",
                                        color: "white",
                                    }}
                                >
                                    Monitored
                                </span>
                            </div>
                        </div>

                        <div
                            style={{
                                borderRadius: 999,
                                padding: 1,
                                background:
                                    "linear-gradient(180deg, rgba(255, 255, 255, 0.2) -173.65%, rgba(255, 255, 255, 0) 87.22%)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    height: 48,
                                    width: 146,
                                    alignItems: "center",
                                    gap: 12,
                                    borderRadius: 999,
                                    padding: "12px 20px",
                                    background: "var(--transparent-surface-transparent-white-6, #FFFFFF0F)",
                                }}
                            >
                                <div
                                    style={{
                                        height: 8,
                                        width: 8,
                                        borderRadius: 999,
                                        background: "#FF4E02",
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        lineHeight: "24px",
                                        color: "white",
                                    }}
                                >
                                    Connected
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}