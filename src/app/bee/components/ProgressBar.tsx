"use client"

import { ChevronDown } from "lucide-react"

interface ProgressBarProps{
    score: number
}

export default function ProgressBar({score}: ProgressBarProps){
    return(

        <div className="flex flex-row justify-between items-center relative mt-10">

            {
                score > 0 &&
                <div className="absolute flex flex-col justify-center items-center -mt-12 -ml-1" style={{left: score + "%"}}>
                    <p className="-mb-3">{score}</p>
                    <ChevronDown/>
                </div>
            }
            
            
            <div className="rounded-full w-7 h-7 z-20 border-4 bg-yellow-400"></div>
            <div className={`rounded-full w-7 h-7 z-20 border-4 ${score>=25 ? "bg-yellow-400" : "bg-white "}`}></div>
            <div className={`rounded-full w-7 h-7 z-20 ${score>=50 ? "bg-yellow-400" : "bg-white border-4"}`}></div>
            <div className={`rounded-full w-7 h-7 z-20 ${score>=75 ? "bg-yellow-400" : "bg-white border-4"}`}></div>
            <div className={`rounded-full w-7 h-7 z-20 ${score===100 ? "bg-yellow-400" : "bg-white border-4"}`}></div>
            <div className={`bg-yellow-400 rounded-full h-2 absolute z-10`} style={{width: score + "%"}}></div>
            <div className={`bg-black rounded-full h-2 absolute z-0`} style={{width: (100-score) + "%",  left: score + "%"}}></div>

        </div>

    )
}