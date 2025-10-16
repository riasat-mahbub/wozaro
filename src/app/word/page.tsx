"use client";

import { useEffect, useRef, useState } from "react";
import { BoxGrid } from "./components/BoxGrid";
import InvisibleInput from "./components/InvisibleInput";
import { generateTodaysAnswer } from "./data/todaysAnswer";
import { Answer } from "./types/Answer";
import OnScreenKeyboard from "./components/OnScreenKeyboard";
import WinPopup from "../components/WinPopup";
import LosePopup from "../components/LosePopup";

export default function Word() {
  const MAX_ROW = 6;
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
  const [gameState, setGameState] = useState<"win" | "lose" | "playing">("playing");
  

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
      setGameState("win");
    } else {
      setCurrentRow((r) => {
        const next = r + 1;
        if (next >= MAX_ROW) {
          setInputDisabled(true);
          setGameState("lose")
        }
        return next;
      });
    }

    setText("");
  };

  const computeLetterStates = (answers: Answer[]) => {
    const states: Record<string, "correct" | "present" | "absent" | "unused"> = {};
    for (const ans of answers) {
      if (!ans.isSubmitted) continue;
      for (const { letter, state } of ans.letters) {
        if (!letter) continue;
        const upper = letter.toLowerCase();
        const prev = states[upper];
        if (state === "correct" || prev === "correct") states[upper] = "correct";
        else if (state === "present" || prev === "present") states[upper] = "present";
        else if (state === "absent" || !prev) states[upper] = "absent";
        else states[upper] = "unused";
      }
    }
    return states;
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
    <div className="flex flex-col items-center relative min-h-screen px-4 sm:px-8 md:px-16 py-12 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">

      <div className="absolute top-16 left-10 w-20 h-20 bg-red-500 rounded-full opacity-30 sm:w-28 sm:h-28 rotate-6"></div>
      <div className="absolute bottom-1/4 right-1/5 w-24 h-24 bg-red-400 rounded-full opacity-25 sm:w-32 sm:h-32 rotate-12"></div>

      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-400 rounded-full opacity-25 sm:w-24 sm:h-24 rotate-[-8deg]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-yellow-300 rounded-full opacity-20 sm:w-28 sm:h-28 rotate-15"></div>

      <BoxGrid answers={answers} numCol={MAX_COLS} todaysAnswer={todaysAnswer.current} />
      <InvisibleInput text={text} handleTextChange={handleTextChange} onEnter={() => onFinish()} disabled={inputDisabled} />
      <OnScreenKeyboard 
        onKeyPress={handleKeyPress} 
        onEnter={() => onFinish()} 
        onDelete={handleDelete} 
        disabled={inputDisabled} 
        letterStates={computeLetterStates(answers)}
      />

      {gameState==="win" && 
        <WinPopup text={`Congratulations on winning the game in ${currentRow+1} tries`} />
      }

      {gameState==="lose" && 
        <LosePopup text={`You are out of guesses 😞`} />
      }
    </div>
  );
}
