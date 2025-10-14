"use client"

import { SpellCollection } from "../types/Spell"
import SpellBlock from "./SpellBlock"


interface SpellGridProps{
    spellCollection: SpellCollection
}

export default function SpellGrid({spellCollection}: SpellGridProps){

    const mainLetter = spellCollection.spellLetters.find(l => l.isMain)
    const outerLetters = spellCollection.spellLetters.filter(l => !l.isMain)

    const radius = Math.sqrt(3) * 70;

    return(
        <div className="relative w-full h-full flex items-center justify-center">
            {mainLetter && <SpellBlock spellLetter={mainLetter} />}

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
                    <SpellBlock spellLetter={val} />
                </div>
                );
            })}
        </div>
    )


}