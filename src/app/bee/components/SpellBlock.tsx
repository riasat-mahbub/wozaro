"use client"

import { Hexagon } from "lucide-react"
import { SpellLetter } from "../types/Spell";

interface SpellBlockProps{
    spellLetter: SpellLetter;
    letterPress: (letter:string) => void
}

export default function SpellBlock({spellLetter, letterPress} : SpellBlockProps){
    const blockFill = spellLetter.isMain ? "#f0b100" : "#FFFFFF";
    return(
        <div className="relative flex items-center justify-center w-16 sm:w-20 md:w-28 lg:w-32 aspect-square 
            cursor-pointer select-none transform transition-transform duration-150 active:scale-90 active:shadow-inner" 
            onClick={() => letterPress(spellLetter.letter)}>
                
            <Hexagon className={`w-full h-full absolute`} strokeWidth={1} fill={blockFill}/>
            <p className={`absolute z-10 font-bold text-center select-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${spellLetter.isMain ? "text-white drop-shadow-md" : "text-black"}`} >
                {spellLetter.letter}
            </p>
        </div>
    )
}