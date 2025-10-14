"use client"

import { useEffect, useState } from "react"
import { SpellCollection } from "./types/Spell"
import SpellGrid from "./components/SpellGrid"


export default function Bee(){
    
    const [spellCollection, setSpellCollection] = useState<SpellCollection>(new SpellCollection("CYDMIOT", "T"))
    const [currentAns, setCurrentAns] = useState("")

    const letterPress = (letter:string) =>{
        setCurrentAns(currentAns+letter)
    }

    const submitAns = () =>{
        spellCollection.addAnswer(currentAns)
        setCurrentAns("")
    }

    useEffect( () =>{
        if(currentAns.length > 14){
            submitAns()
        }
    }, [currentAns])
    return(
        <div className="flex items-center justify-center w-screen h-screen">

            <SpellGrid spellCollection={spellCollection}/>
        </div>
    )

}