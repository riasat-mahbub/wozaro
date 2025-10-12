"use client"

import { useEffect, useState } from "react";
import { BoxGrid } from "./components/BoxGrid"
import InvisibleInput from "./components/InvisibleInput";
import { generateTodaysAnswer } from "./data/todaysAnswer";
import { Answer } from "../types/Answer";

export default function Home() {

    const MAX_ROW = 5
    const MAX_COLS = 5

    const [answers, setAnswers] = useState<Answer[]>(() =>
        Array.from({ length: MAX_ROW }, () => ({ text: "", isSubmitted: false }))
    );
    const [currentRow, setCurrentRow]  = useState<number>(0);
    const [text, setText] = useState<string>("");
    const [inputDisabled, setInputDisabled] = useState(false)

    const todaysAnswer = generateTodaysAnswer()
    console.log(todaysAnswer)



    const handleTextChange = (changedText: string) =>{
        if(inputDisabled || text.length > MAX_COLS) return
        
        setText(changedText)
        changeAnswer(changedText)
        if(changedText.length > MAX_COLS){
            onFinish();
        }

    }

    const changeAnswer = (answer: string) =>{
        setAnswers(prev => {
            const copy = [...prev];
            copy[currentRow].text = answer;
            return copy;
        });

    }

    const onFinish = () =>{
        if(inputDisabled || text.length === 0) return

        if(answers[currentRow].text === todaysAnswer){
            setInputDisabled(true)
            console.log("WINNer")
        }else if(currentRow >=MAX_ROW-1){
            setInputDisabled(true)
            console.log("LOSER")
        }
        
        if(currentRow < MAX_ROW -1){
            setAnswers(prev => {
                const copy = [...prev];
                copy[currentRow].isSubmitted = true;
                return copy;
            });
            setCurrentRow(currentRow + 1);
        }else{
            setCurrentRow(MAX_ROW)
        }
        setText("")
    }
    return(
        <div>
            <BoxGrid answers={answers} numCol={MAX_COLS} todaysAnswer={todaysAnswer}/>
            <InvisibleInput text={text} handleTextChange={handleTextChange} onEnter={onFinish} disabled={inputDisabled}/>
        </div>
    )
}