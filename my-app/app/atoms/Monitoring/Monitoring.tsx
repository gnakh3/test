"use client";

import React, { useEffect, useRef, useState } from "react";

const DAYS = ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"];
const COLS = 12;

const BASE_PATTERN = [
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
];

const FLICKER_PATTERN = [
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
];

// only cells that are NEW compared to starting point
const EXTRA_LIGHTS = BASE_PATTERN.map((row, r) =>
    row.map((cell, c) => (FLICKER_PATTERN[r][c] === 1 && cell === 0 ? 1 : 0))
);

function Cell({
    active,
}: {
    active: boolean;
}) {
    return (
        <div
            style={{
                width: 22.278,
                height: 22.278,
                aspectRatio: "1/1",
                borderRadius: 4,
                background: active ? "#3EBE00" : "rgba(255, 255, 255, 0.06)",
                boxShadow: active ? "0 0 8px rgba(62, 190, 0, 0.35)" : "none",
                transition: "background 90ms linear, box-shadow 90ms linear",
            }}
        />
    );
}

function WeeklyMonitor() {
    const [showFlicker, setShowFlicker] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const runFlicker = () => {
            setShowFlicker(true);

            timeoutRef.current = setTimeout(() => {
                setShowFlicker(false);
            }, 800);
        };

        runFlicker();

        const interval = setInterval(() => {
            runFlicker();
        }, 1600);

        return () => {
            clearInterval(interval);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
        >
            <div
                style={{
                    borderRadius: 16,
                    padding: "28px 28px 24px",
                    width: 440,
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {DAYS.map((day, rowIdx) => (
                        <div
                            key={day}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            <span
                                style={{
                                    width: 36,
                                    color: "rgba(255,255,255,0.55)",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    flexShrink: 0,
                                }}
                            >
                                {day}
                            </span>

                            <div style={{ display: "flex", gap: 4, flex: 1 }}>
                                {BASE_PATTERN[rowIdx].map((baseVal, colIdx) => {
                                    const flickerVal = EXTRA_LIGHTS[rowIdx][colIdx];

                                    const isActive =
                                        baseVal === 1 || (showFlicker && flickerVal === 1);

                                    return (
                                        <Cell
                                            key={`${rowIdx}-${colIdx}`}
                                            active={isActive}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <p
                    style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: 15,
                        fontWeight: 400,
                        marginTop: 61,
                        marginBottom: 14,
                        letterSpacing: "0.2px",
                    }}
                >
                    168 hours monitored every week
                </p>

                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 999,
                        padding: "10px 20px",
                    }}
                >
                    <div
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: "999px",
                            background: "#3EBE00",
                            boxShadow: "0 0 8px rgba(62, 190, 0, 0.6)",
                            animation: "pulse 2s ease-in-out infinite",
                        }}
                    />
                    <span
                        style={{
                            color: "rgba(255,255,255,0.9)",
                            fontSize: 15,
                            fontWeight: 600,
                        }}
                    >
                        Continuous Verification
                    </span>
                </div>

                <style>{`
          @keyframes pulse {
            0%, 100% { box-shadow: 0 0 8px rgba(62, 190, 0, 0.6); }
            50% { box-shadow: 0 0 16px rgba(62, 190, 0, 0.9), 0 0 4px rgba(62, 190, 0, 1); }
          }
        `}</style>
            </div>
        </div>
    );
}

export default WeeklyMonitor;