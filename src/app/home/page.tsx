"use client"

import { useState } from "react";
import { BoxGrid } from "./components/BoxGrid"
import InvisibleInput from "./components/InvisibleInput";

export default function Home() {
    const [text, setText] = useState("");

    const handleTextChange = (text: string) =>{
        if(text.length>5){
            onFinish()
        }else{
            setText(text)
        }
        
        console.log(text)
    }

    const onFinish = () =>{
        setText("")
    }
    return(
        <div>
            <BoxGrid text={text}/>
            <InvisibleInput text={text} handleTextChange={handleTextChange} onEnter={onFinish}/>
        </div>
    )
}