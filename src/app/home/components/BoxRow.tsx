"use client";

import { Box } from "./Box";
import { Answer } from "@/app/types/Answer";

interface BoxRowProps {
  answer: Answer;
  numCol: number;
  todaysAnswer: string;
}

export default function BoxRow({ answer, numCol, todaysAnswer }: BoxRowProps) {
  const letters = Array.from({ length: numCol }, (_, i) => answer.text[i] || "");

  const getColorFromAnswer = (val: string, idx: number) => {
    if (!answer.isSubmitted) return "bg-transparent";
    if (val === todaysAnswer[idx]) return "bg-emerald-600";
    if (todaysAnswer.includes(val) && val !== "") return "bg-yellow-600";
    return "bg-red-600";
  };

  return (
    <div className="flex justify-center gap-[clamp(0.25rem,1vw,0.5rem)] my-[clamp(0.25rem,1vw,0.5rem)]">
      {letters.map((val, idx) => (
        <Box key={idx} letter={val} bg={getColorFromAnswer(val, idx)} />
      ))}
    </div>
  );
}
