"use client"

import { useState } from "react";
import { BoxGrid } from "./components/BoxGrid"
import InvisibleInput from "./components/InvisibleInput";

export default function Home() {
    const [text, setText] = useState("");

    const handleTextChange = (text: string) =>{
        setText(text)
        console.log(text)
    }
    return(
        <div>
            <BoxGrid/>
            <InvisibleInput text={text} handleTextChange={handleTextChange}/>
        </div>
    )
}