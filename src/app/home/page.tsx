"use client"

import { useRef, useState } from "react";
import { BoxGrid } from "./components/BoxGrid"
import InvisibleInput from "./components/InvisibleInput";

export default function Home() {

    const MAX_ROW = 5
    const MAX_COLS = 5
    const MAX_BOXES = MAX_ROW * MAX_COLS

    const [answers, setAnswers] = useState<string[]>( (() =>
        Array(MAX_ROW).fill("")
    ));
    const [currentRow, setCurrentRow]  = useState<number>(0);
    const [text, setText] = useState<string>("");

    const inputDisabled = currentRow >=MAX_ROW


    const handleTextChange = (changedText: string) =>{
        if(inputDisabled || text.length > MAX_COLS) return
        
        setText(changedText)
        changeAnswer(changedText)
        if(text.length > MAX_COLS){
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
        
        if(currentRow <=MAX_ROW){
            setCurrentRow(currentRow + 1);
        }else{
            setCurrentRow(MAX_ROW)
        }
        setText("")
         
    }
    return(
        <div>
            <BoxGrid answers={answers} numRow={MAX_ROW} numCol={MAX_COLS}/>
            <InvisibleInput text={text} handleTextChange={handleTextChange} onEnter={onFinish} disabled={inputDisabled}/>
        </div>
    )
}