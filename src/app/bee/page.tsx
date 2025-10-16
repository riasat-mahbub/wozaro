"use client"

import { useEffect, useRef, useState } from "react"
import { SpellCollection } from "./types/Spell"
import SpellGrid from "./components/SpellGrid"
import { RotateCcw } from "lucide-react"
import WordDisplay from "./components/WordDisplay"
import { toast, ToastContainer, ToastOptions } from "react-toastify"
import InvisibleInput from "./components/InvisibleInput"
import ProgressBar from "./components/ProgressBar"
import AnsDisplay from "./components/AnsDisplay"
import WinPopup from "../components/WinPopup"

export default function Bee(){

    const MIN_LEN = 4;
    const MAX_LEN = 14;
    const LETTER_COUNT = 7;
    const MAX_SCORE=  100;

    const [spellCollection, setSpellCollection] = useState<SpellCollection>(new SpellCollection());
    const [currentAns, setCurrentAns] = useState("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [score, setScore] = useState<number>(0);
    const [disabled, setDisabled] = useState(false);
    const [isWin, setIsWin] = useState(false)


    const hiveShapes = useRef<{top: string, left: string, rotate: string}[]>([]);

    const getRandomLetters = () =>{
        const weightedLetters = ('EEEEEEEEEEEE'+'AAAAAAAAA'+'IIIIIIII'+'OOOOOOOO'+
        'NNNNNNN'+'RRRRR'+'TTTTTT'+'LLLL'+'SSSS'+
        'DDDD'+'GGGG'+'BBCCMMUU'+'FFHHVVWWYY'+'JKQXZ').split('');

        const randomLetters:Set<string> = new Set<string>();
        let i = 0;
        while(i<LETTER_COUNT){
            const randomIndex = Math.floor(Math.random() * weightedLetters.length);
            const letter = weightedLetters[randomIndex].toLowerCase();
            if(!randomLetters.has(letter)){
                randomLetters.add(letter);
                ++i;
            }
        }
        return randomLetters.values().toArray().join("");
    }

    useEffect(() =>{
        const randomLetters = getRandomLetters();
        setSpellCollection(new SpellCollection(randomLetters, randomLetters.charAt(Math.random() * LETTER_COUNT)));
        hiveShapes.current = Array.from({ length: 10 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
        }));
        
    }, []);

    useEffect(() =>{
        const generateAnswer = () =>{
            const data = Object.keys(require('./data/dictionary.json'));
            const letters = [...spellCollection.letters.values()];
            const filteredData = data.filter( (word) => {
                word = word.toLowerCase();
                if(word.length < MIN_LEN || word.length > MAX_LEN) return false;
                if(word.includes(spellCollection.mainLetter)){
                    for(let i=0;i<word.length;++i){
                        if(!letters.includes(word[i])) return false;
                    }
                    return true;
                }
                return false;
            });
            return filteredData;
        }

        const getTotalScore = (answers: string[]) =>{
            let totalScore = 0;
            answers.forEach(val => totalScore += val.length);
            return totalScore;
        }

        const answers = generateAnswer();
        const totalScore = getTotalScore(answers);
        if(totalScore < MAX_SCORE*2){
            const randomLetters = getRandomLetters();
            setSpellCollection(new SpellCollection(randomLetters, randomLetters.charAt(Math.random() * LETTER_COUNT)));
        } else {
            setAnswers(answers);
        }
    }, [spellCollection]);

    useEffect(() =>{
        if(score>=MAX_SCORE){
            setIsWin(true)
            setDisabled(true);
        }
    }, [score]);

    const letterPress = (letter:string):void =>{
        if(spellCollection.letters.has(letter.toLowerCase()) && !disabled){
            setCurrentAns(currentAns+letter.toLowerCase());
        }
    }

    const handleTextChange = (text:string) =>{
        const textSet = new Set(text);
        if(textSet.isSubsetOf(spellCollection.letters)){
            setCurrentAns(text);
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

    useEffect(() =>{
        if(currentAns.length > 14){
            submitAns()
        }
    }, [currentAns]);

    return(
    <div className="min-h-screen flex flex-col items-center justify-between gap-6 px-4 py-6 sm:py-10 bg-yellow-50 relative overflow-hidden transition-all duration-300">

        {hiveShapes.current.map((shape, i) => (
            <div key={i} className="absolute w-16 h-16 sm:w-24 sm:h-24 bg-yellow-200 border-2 border-yellow-400 rounded-[20%] opacity-20"
                style={{ top: shape.top, left: shape.left, transform: `rotate(${shape.rotate})` }} />
        ))}

        {/* Progress bar */}
        <div className="w-full sm:w-3/4 md:w-1/2 z-10">
            <ProgressBar score={score} />
        </div>

        <WordDisplay word={currentAns} mainLetter={spellCollection.mainLetter} />

        <div className="flex justify-center items-end w-full mt-10 sm:mt-16 mb-20 sm:mb-24 z-10">
            <SpellGrid spellCollection={spellCollection} letterPress={letterPress}/>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center w-full sm:w-auto mt-10 z-10">
            <button className="bg-white border border-gray-300 text-lg sm:text-xl px-5 py-3 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-transform" 
                onClick={() => setCurrentAns(currentAns.substring(0, currentAns.length - 1))}>
                Delete
            </button>

            <RotateCcw className="cursor-pointer p-3 rounded-full bg-white border border-gray-300 hover:shadow-lg active:scale-95 transition-transform" size={48} 
                onClick={() => setCurrentAns("")}/>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg sm:text-xl px-6 py-3 rounded-full shadow-md active:scale-95 transition-transform" 
                onClick={submitAns}>
                Submit
            </button>
        </div>

        <div className="w-full sm:w-3/4 md:w-1/2 z-10">
            <AnsDisplay answers={Array.from(spellCollection.submittedAnswers.values())}/>
        </div>

        <InvisibleInput text={currentAns} handleTextChange={handleTextChange} onEnter={submitAns} disabled={disabled}/>
        <ToastContainer position="bottom-center" autoClose={2500} hideProgressBar draggable/>
        {isWin && 
            <WinPopup text={`Congratulations on finding all words`} />
        }
    </div>
    )
}
