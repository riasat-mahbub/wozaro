"use client";

import { useEffect, useRef, useState } from "react";
import { BoxGrid } from "./components/BoxGrid";
import InvisibleInput from "./components/InvisibleInput";
import { generateTodaysAnswer } from "./data/todaysAnswer";
import { Answer } from "../types/Answer";

export default function Home() {
  const MAX_ROW = 5;
  const MAX_COLS = 5;

  const emptyLetter = { letter: "", state: "empty" as const };
  const makeEmptyRow = (): Answer => ({
    isSubmitted: false,
    letters: Array.from({ length: MAX_COLS }, () => ({ ...emptyLetter })),
  });

  const [answers, setAnswers] = useState<Answer[]>(
    () => Array.from({ length: MAX_ROW }, () => makeEmptyRow())
  );

  const [currentRow, setCurrentRow] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const todaysAnswer = useRef<string>("");
  useEffect(() => {
    todaysAnswer.current = generateTodaysAnswer();
    console.log("TODAY:", todaysAnswer.current);
  }, []);

  const updateRowLettersFromText = (rowIndex: number, newText: string) => {
    setAnswers((prev) => {
      const copy = [...prev];
      const row = { ...copy[rowIndex] };

      row.letters = Array.from({ length: MAX_COLS }, (_, i) => ({
        letter: newText[i] ?? "",
        state: row.letters?.[i]?.state ?? "empty",
      }));
      copy[rowIndex] = row;
      return copy;
    });
  };

  const handleTextChange = (changedText: string) => {
    if (inputDisabled) return;
    if (changedText.length > MAX_COLS) return;

    setText(changedText);
    updateRowLettersFromText(currentRow, changedText);

    if (changedText.length === MAX_COLS) {
      onFinish(changedText);
    }
  };

  const evaluateGuess = (guess: string, target: string) => {
    const result: ("correct" | "present" | "absent")[] = Array(MAX_COLS).fill("absent");
    const targetArr = target.split("");
    const guessArr = guess.split("");

    const remainingCounts: Record<string, number> = {};

    for (let i = 0; i < MAX_COLS; i++) {
      if (guessArr[i] === targetArr[i]) {
        result[i] = "correct";
        targetArr[i] = ""; 
      } else {
        const ch = targetArr[i];
        if (ch) remainingCounts[ch] = (remainingCounts[ch] || 0) + 1;
      }
    }

    for (let i = 0; i < MAX_COLS; i++) {
      if (result[i] === "correct") continue;
      const g = guessArr[i];
      if (g && remainingCounts[g] > 0) {
        result[i] = "present";
        remainingCounts[g]--;
      } else {
        result[i] = "absent";
      }
    }

    return result;
  };

  const onFinish = (guessParam?: string) => {
    if (inputDisabled) return;

    const guess = typeof guessParam === "string" && guessParam.length > 0 ? guessParam : text;
    if (!guess || guess.length !== MAX_COLS) {
      return;
    }

    if (answers[currentRow]?.isSubmitted) return;

    const target = todaysAnswer.current;
    const evaluation = evaluateGuess(guess, target);

    setAnswers((prev) => {
      const copy = [...prev];
      const row = { ...copy[currentRow] };
      row.isSubmitted = true;
      row.letters = row.letters.map((_, i) => ({
        letter: guess[i],
        state: evaluation[i],
      }));
      copy[currentRow] = row;
      return copy;
    });

    if (guess === target) {
      setInputDisabled(true);
      console.log("WINNER");
    } else {
      setCurrentRow((r) => {
        const next = r + 1;
        if (next >= MAX_ROW) {
          setInputDisabled(true);
        }
        return next;
      });
    }

    setText("");
  };

  const handleKeyPress = (key: string) => {
    if (inputDisabled) return;
    const letter = key.toLowerCase();
    if (letter.length !== 1 || letter < "a" || letter > "z") return;
    if (text.length >= MAX_COLS) return;
    handleTextChange(text + letter);
  };

  const handleDelete = () => {
    if (inputDisabled) return;
    handleTextChange(text.slice(0, -1));
  };

  return (
    <div className="flex flex-col items-center">
      <BoxGrid answers={answers} numCol={MAX_COLS} todaysAnswer={todaysAnswer.current} />
      <InvisibleInput text={text} handleTextChange={handleTextChange} onEnter={() => onFinish()} disabled={inputDisabled} />
    </div>
  );
}
