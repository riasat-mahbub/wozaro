"use client"

import { Hexagon } from "lucide-react"

interface SpellBlockProps{
    letter: string;
    isMain: boolean;
    letterPress: (letter:string) => void
}

export default function SpellBlock({letter, isMain, letterPress} : SpellBlockProps){
    const blockFill = isMain ? "#f0b100" : "#FFFFFF";
    return(
        <div className="relative flex items-center justify-center w-16 sm:w-20 md:w-28 lg:w-32 aspect-square 
            cursor-pointer select-none transform transition-transform duration-150 active:scale-90 active:shadow-inner" 
            onClick={() => letterPress(letter)}>
                
            <Hexagon className={`w-full h-full absolute`} strokeWidth={1} fill={blockFill}/>
            <p className={`absolute z-10 font-bold text-center select-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${isMain ? "text-white drop-shadow-md" : "text-black"}`} >
                {letter.toUpperCase()}
            </p>
        </div>
    )
}