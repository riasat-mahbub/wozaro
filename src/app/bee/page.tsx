"use client"

import { useState } from "react"
import SpellBlock from "./components/SpellBlock"
import { SpellCollection } from "./types/Spell"
import SpellGrid from "./components/SpellGrid"


export default function Bee(){
    
    const [spellCollection, setSpellCollection] = useState<SpellCollection>(new SpellCollection("CYDMIOT", "T"))
    return(
        <div className="flex items-center justify-center w-screen h-screen">

            <SpellGrid spellCollection={spellCollection}/>
        </div>
    )

}