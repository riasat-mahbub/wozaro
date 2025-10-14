"use client"

import { Hexagon } from "lucide-react"

interface SpellBlockProps{
    letter: string;
    isMain: boolean;
}

export default function SpellBlock({letter, isMain} : SpellBlockProps){
    const blockFill = isMain ? "#f0b100" : "FFFFFF";
    return(
        <div className="relative w-32 h-32">
            <Hexagon className={`w-full h-full absolute bg-y`} strokeWidth={1} fill={blockFill}/>
            <p className={`absolute left-2/5 top-1/3 text-5xl ${isMain ? "text-white text-shadow-md" : "text-black"}`} >{letter}</p>
        </div>
    )
}