"use client"
import { useEffect, useState } from "react";
import BoxRow from "./BoxRow";
import { Answer } from "@/app/types/Answer";

interface BoxGridProps{
    answers: Answer[];
    numCol: number;
    todaysAnswer: string;
}


export const BoxGrid = ({answers,  numCol, todaysAnswer}: BoxGridProps) =>{
    console.log(answers)

    return(
        <div className="w-full flex justify-center">
            <div className={`flex flex-col justify-center items-center w-[31rem] h-[31rem] mt-10`}>
                {answers.map( (answer, idx) =>(
                    <BoxRow key={idx} answer={answer} numCol={numCol} todaysAnswer={todaysAnswer}/>
                ))}
            </div>
        </div>

    )
}