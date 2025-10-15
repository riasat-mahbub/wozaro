"use client";

import { Box } from "./Box";
import { Answer } from "@/app/home/types/Answer";

interface BoxRowProps {
  answer: Answer;
  numCol: number;
  todaysAnswer: string;
}

export default function BoxRow({ answer, numCol }: BoxRowProps) {
  // Fill up with empty boxes if not all columns are filled yet
  const letters = Array.from({ length: numCol }, (_, i) => answer.letters[i] || { letter: "", state: "empty" });

  const bgFromState:Record<string, string> = {
        "correct" : "bg-emerald-600",
        "present" : "bg-yellow-600",
        "absent" : "bg-red-600"
    }
  


  return (
    <div className="flex justify-center gap-[clamp(0.25rem,1vw,0.5rem)] my-[clamp(0.25rem,1vw,0.5rem)]">
      {letters.map((l, idx) => (
        <Box key={idx} letter={l.letter} bg={bgFromState[l.state] || 'bg-transparent'} />
      ))}
    </div>
  );
}
