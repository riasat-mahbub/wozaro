"use client"

import { useEffect, useState } from "react"
import { SpellCollection } from "./types/Spell"
import SpellGrid from "./components/SpellGrid"
import { RotateCcw } from "lucide-react"
import WordDisplay from "./components/WordDisplay"
import { toast, ToastContainer, ToastOptions } from "react-toastify"
import InvisibleInput from "./components/InvisibleInput"
import ProgressBar from "./components/ProgressBar"


export default function Bee(){

    const MIN_LEN = 4
    const MAX_LEN = 14
    const LETTER_COUNT = 7;
    const MAX_SCORE=  100

    const [spellCollection, setSpellCollection] = useState<SpellCollection>(new SpellCollection())
    const [currentAns, setCurrentAns] = useState("")
    const [answers, setAnswers] = useState<string[]>([])
    const [score, setScore] = useState<number>(0)
    const [disabled, setDisabled] = useState(false)


    const getRandomLetters = () =>{
        const weightedLetters = ( 'EEEEEEEEEEEE' + 'AAAAAAAAA' + 'IIIIIIII' + 'OOOOOOOO' + // Vowels
        'NNNNNNN' + 'RRRRR' + 'TTTTTT' + 'LLLL' + 'SSSS' + // Common consonants
        'DDDD' + 'GGGG' + 'BBCCMMUU' +
        'FFHHVVWWYY' + 'JKQXZ').split('');

        const randomLetters:Set<string> = new Set<string>();

        let i = 0;
        while(i<LETTER_COUNT){
            const randomIndex = Math.floor(Math.random() * weightedLetters.length);
            const letter = weightedLetters[randomIndex].toLowerCase();
            if(!randomLetters.has(letter)){
                randomLetters.add(letter)
                ++i;
            }
        }

        return randomLetters.values().toArray().join("");
    }


    useEffect( () =>{
        const randomLetters = getRandomLetters()
        setSpellCollection(new SpellCollection(randomLetters, randomLetters.charAt(Math.random() * LETTER_COUNT)))
    }, [])

    useEffect( () =>{
        const generateAnswer = () =>{
            const data = Object.keys(require('./data/dictionary.json'))
            const letters = [...spellCollection.letters.values()]
            const filteredData = data.filter( (word) => {
                word = word.toLowerCase()
                if(word.length < MIN_LEN || word.length > MAX_LEN){
                    return false;
                }else if(word.includes(spellCollection.mainLetter)){
                    for(let i=0;i<word.length;++i){
                        if(!letters.includes(word[i])){
                            return false;
                        }
                    }
                    return true
                }else{
                    return false;
                }
            })
            return filteredData
        }

        const getTotalScore = (answers: string[]) =>{
            let totalScore = 0;
            answers.forEach( val =>{
                totalScore+=val.length
            })
            return totalScore;
        }

        const answers = generateAnswer()
        const totalScore = getTotalScore(answers)
        if(totalScore < MAX_SCORE){
            const randomLetters = getRandomLetters()
            setSpellCollection(new SpellCollection(randomLetters, randomLetters.charAt(Math.random() * LETTER_COUNT)))
        }else{
            setAnswers(answers)
        }

    }, [spellCollection])

    useEffect( () =>{
        if(score>=MAX_SCORE){
            console.log("You have won")
            setDisabled(true)
        }
    }, [score])


    const letterPress = (letter:string):void =>{
        if(spellCollection.letters.has(letter.toLowerCase()) && !disabled){
            setCurrentAns(currentAns+letter.toLowerCase())
        }
    }

    const handleTextChange = (text:string) =>{
        const textSet = new Set(text)
        if(textSet.isSubsetOf(spellCollection.letters)){
            setCurrentAns(text)
        }
    } 

    const toastMsg = (message: string, type:"error" | "success" = "success") =>{
        const toastOptions:ToastOptions = { position: "bottom-center", autoClose: 2500, hideProgressBar: true, closeOnClick: true}
        const typeToToast = {
            "error" :  () => toast.error(message, toastOptions),
            "success": () => toast.success("Great +"+ currentAns.length.toString(), toastOptions)
        }

        typeToToast[type]?.()
    }

    const submitAns = () =>{
        if(currentAns.length < MIN_LEN){
            toastMsg("Too Short","error")
        }else if(spellCollection.submittedAnswers.has(currentAns)){
            toastMsg("Already Done","error")
        }else if(answers.includes(currentAns)){
            toastMsg("Great +"+ currentAns.length.toString(),"success")    
            spellCollection.addAnswer(currentAns.toLowerCase())
            setScore(score+currentAns.length)
        }else{
            toastMsg("Not on the word list","error")
        }
        setCurrentAns("")
    }

    useEffect( () =>{
        if(currentAns.length > 14){
            submitAns()
        }
    }, [currentAns])
    return(
        <div>
            <div className="w-1/2 mx-auto">
                <ProgressBar score={score}/>
            </div>
            <WordDisplay word={currentAns} mainLetter={spellCollection.mainLetter}/>
            <div className="flex justify-center items-end w-screen mt-40 mb-32">
                <SpellGrid spellCollection={spellCollection} letterPress={letterPress}/>
            </div>

            <div className="flex flex-row gap-5 justify-center items-center w-screen">
                <div className="rounded-full-bg-white text-3xl border-3 border-black rounded-full p-4 
                    cursor-pointer select-none transform transition-transform duration-150 active:scale-90 active:shadow-inner"
                    onClick={() => setCurrentAns(currentAns.substring(0,currentAns.length-1))}>
                        Delete
                </div>
                <RotateCcw className="cursor-pointer select-none transform transition-transform duration-150 active:scale-90 active:shadow-inner" size={48} onClick={() => setCurrentAns("")}/>
                <div className="rounded-full-bg-white text-3xl border-3 border-black rounded-full p-4 
                    cursor-pointer select-none transform transition-transform duration-150 active:scale-90 active:shadow-inner"
                    onClick={submitAns}>
                        Submit
                </div>
            </div>
            <InvisibleInput text={currentAns} handleTextChange={handleTextChange} onEnter={submitAns} disabled={disabled}/>
            <ToastContainer  position="bottom-center" autoClose={2500} hideProgressBar={true} draggable/>
        </div>
    )

}