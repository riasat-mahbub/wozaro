"use client";

import BoxRow from "./BoxRow";
import { Answer } from "@/app/types/Answer";

interface BoxGridProps {
  answers: Answer[];
  numCol: number;
  todaysAnswer: string;
}

export const BoxGrid = ({ answers, numCol, todaysAnswer }: BoxGridProps) => {
  return (
    <div className="flex justify-center items-center w-full mt-10 px-4">
      <div
        className={`
          flex flex-col justify-center items-center 
          gap-[clamp(0.25rem,1vw,0.75rem)] 
          max-w-[90vw] sm:max-w-[28rem] md:max-w-[32rem] lg:max-w-[36rem]
          transition-all duration-300
        `}
      >
        {answers.map((answer, idx) => (
          <BoxRow key={idx} answer={answer} numCol={numCol} todaysAnswer={todaysAnswer} />
        ))}
      </div>
    </div>
  );
};
