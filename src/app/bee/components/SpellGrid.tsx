"use client"

import { SpellCollection } from "../types/Spell"
import SpellBlock from "./SpellBlock"


interface SpellGridProps{
    spellCollection: SpellCollection;
    letterPress: (letter:string) => void
}

export default function SpellGrid({spellCollection, letterPress}: SpellGridProps){

    const outerLetters = [...spellCollection.letters.values()].filter(letter => letter!=spellCollection.mainLetter)

    const radius = Math.sqrt(3) * 70;

    return(
        <div className="relative w-full h-full flex items-center justify-center">
            {spellCollection.mainLetter && <SpellBlock letter={spellCollection.mainLetter} isMain={true} letterPress={letterPress}/>}

            {outerLetters.map((val, idx) => {
                const angle = ((idx / 6) * 2 * Math.PI) - Math.PI / 2; // 60° steps, start at top
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                <div
                    key={idx}
                    className="absolute transition-all duration-300"
                    style={{
                    transform: `translate(${x}px, ${y}px)`,
                    }}
                >
                    <SpellBlock letter={val}  isMain={false} letterPress={letterPress}/>
                </div>
                );
            })}
        </div>
    )


}