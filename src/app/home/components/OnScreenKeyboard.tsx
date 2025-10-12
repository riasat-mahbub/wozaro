"use client";

import React from "react";

interface OnScreenKeyboardProps {
  onKeyPress: (key: string) => void;
  onEnter: () => void;
  onDelete: () => void;
  disabled?: boolean;
  letterStates?: Record<string, "correct" | "present" | "absent" | "unused">;
}

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

export default function OnScreenKeyboard({
  onKeyPress,
  onEnter,
  onDelete,
  disabled = false,
  letterStates = {},
}: OnScreenKeyboardProps) {
  const handleClick = (key: string) => {
    if (disabled) return;
    if (key === "ENTER") onEnter();
    else if (key === "⌫") onDelete();
    else onKeyPress(key);
  };

  const getKeyBg = (key: string) => {
    const state = letterStates[key.toLowerCase()] || "unused";
    switch (state) {
      case "correct":
        return "bg-emerald-600 text-white";
      case "present":
        return "bg-yellow-500 text-white";
      case "absent":
        return "bg-gray-600 text-white";
      default:
        return "bg-gray-300 text-gray-900";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-6 select-none">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              disabled={disabled}
              className={`px-[clamp(0.6rem,1.8vw,1rem)] py-[clamp(0.6rem,1.8vw,0.9rem)]
                         font-semibold rounded-lg active:scale-95 transition-transform 
                         disabled:opacity-40 disabled:cursor-not-allowed ${getKeyBg(key)}`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
