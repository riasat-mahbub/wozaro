"use client"

import { useEffect, useState } from "react"
import { SpellCollection } from "./types/Spell"
import SpellGrid from "./components/SpellGrid"
import { RotateCcw } from "lucide-react"
import WordDisplay from "./components/WordDisplay"
import { toast, ToastContainer } from "react-toastify"


export default function Bee(){

    const MIN_LEN = 4
    const MAX_LEN = 14
    const LETTER_COUNT = 7;

    const [spellCollection, setSpellCollection] = useState<SpellCollection>(new SpellCollection())
    const [currentAns, setCurrentAns] = useState("")
    const [answers, setAnswers] = useState<string[]>([])
    const [score, setScore] = useState<number>(0)
    const [snackbar, setSnackbar] = useState()


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

        const answers = generateAnswer()

        if(answers.length < 20){
            const randomLetters = getRandomLetters()
            setSpellCollection(new SpellCollection(randomLetters, randomLetters.charAt(Math.random() * LETTER_COUNT)))
        }else{
            console.log(answers)
            setAnswers(answers)
        }

    }, [spellCollection])


    const letterPress = (letter:string):void =>{
        setCurrentAns(currentAns+letter)
    }


    const submitAns = () =>{
        if(currentAns.length < MIN_LEN){
            toast.error("Too Short", { position: "bottom-center", autoClose: 2500, hideProgressBar: true, closeOnClick: true})
        }else if(spellCollection.submittedAnswers.has(currentAns)){
            toast.error("Already Done", { position: "bottom-center", autoClose: 2500, hideProgressBar: true, closeOnClick: true})
        }else if(answers.includes(currentAns)){
            toast.success("Great +"+ currentAns.length.toString(), { position: "bottom-center", autoClose: 2500, hideProgressBar: true, closeOnClick: true})        
            spellCollection.addAnswer(currentAns.toLowerCase())
            setScore(score+currentAns.length)
        }else{
            toast.error("Not on the word list", { position: "bottom-center", autoClose: 2500, hideProgressBar: true, closeOnClick: true})
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
            <ToastContainer  position="bottom-center" autoClose={2500} hideProgressBar={true} draggable/>
        </div>
    )

}