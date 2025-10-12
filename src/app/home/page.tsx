"use client"

import { useEffect, useState } from "react";
import { BoxGrid } from "./components/BoxGrid"
import InvisibleInput from "./components/InvisibleInput";
import { generateTodaysAnswer } from "./data/todaysAnswer";

export default function Home() {

    const MAX_ROW = 5
    const MAX_COLS = 5

    const [answers, setAnswers] = useState<string[]>( (() =>
        Array(MAX_ROW).fill("")
    ));
    const [currentRow, setCurrentRow]  = useState<number>(0);
    const [text, setText] = useState<string>("");
    const [todaysAnswer, setTodaysAnswer] = useState("")
    const [inputDisabled, setInputDisabled] = useState(false)

    useEffect( () =>{
        const ans = generateTodaysAnswer()
        setTodaysAnswer(ans)
        console.log(ans)
    }, [])



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
            copy[currentRow] = answer;
            return copy;
        });

    }

    const onFinish = () =>{
        if(inputDisabled || text.length === 0) return

        if(answers[currentRow] === todaysAnswer){
            setInputDisabled(true)
            console.log("WINNer")
        }else if(currentRow >=MAX_ROW-1){
            setInputDisabled(true)
            console.log("LOSER")
        }
        
        if(currentRow < MAX_ROW -1){
            setCurrentRow(currentRow + 1);
        }else{
            setCurrentRow(MAX_ROW)
        }
        setText("")
    }
    return(
        <div>
            <BoxGrid answers={answers} numCol={MAX_COLS} todaysAnswer={todaysAnswer} currentRow={currentRow}/>
            <InvisibleInput text={text} handleTextChange={handleTextChange} onEnter={onFinish} disabled={inputDisabled}/>
        </div>
    )
}