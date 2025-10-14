"use client"

import { useEffect, useState } from "react"
import { SpellCollection } from "./types/Spell"
import SpellGrid from "./components/SpellGrid"
import { RotateCcw } from "lucide-react"
import WordDisplay from "./components/WordDisplay"


export default function Bee(){
    
    const [spellCollection, setSpellCollection] = useState<SpellCollection>(new SpellCollection("CYDMIOT", "T"))
    const [currentAns, setCurrentAns] = useState("")

    const letterPress = (letter:string):void =>{
        setCurrentAns(currentAns+letter)
    }

    const submitAns = () =>{
        spellCollection.addAnswer(currentAns)
        console.log(currentAns)
        setCurrentAns("")
    }

    useEffect( () =>{
        if(currentAns.length > 14){
            submitAns()
        }
    }, [currentAns])
    return(
        <div>
            <WordDisplay word={currentAns}/>
            <div className="flex justify-center items-end w-screen mt-40 mb-32">
                <SpellGrid spellCollection={spellCollection} letterPress={letterPress}/>
            </div>

            <div className="flex flex-row gap-5 justify-center items-center w-screen">
                <div className="rounded-full-bg-white text-3xl border-3 border-black rounded-full p-4 
                    cursor-pointer select-none transform transition-transform duration-150 active:scale-90 active:shadow-inner"
                    onClick={submitAns}>
                        Submit
                </div>
                <RotateCcw className="cursor-pointer select-none transform transition-transform duration-150 active:scale-90 active:shadow-inner" size={48} onClick={() => setCurrentAns("")}/>
                <div className="rounded-full-bg-white text-3xl border-3 border-black rounded-full p-4 
                    cursor-pointer select-none transform transition-transform duration-150 active:scale-90 active:shadow-inner"
                    onClick={() => setCurrentAns(currentAns.substring(0,currentAns.length-1))}>
                        Delete
                </div>
            </div>
        </div>
    )

}