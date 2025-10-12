"use client"
import { useEffect, useState } from "react";
import BoxRow from "./BoxRow";

interface BoxGridProps{
    answers: string[];
    numCol: number;
    todaysAnswer: string;
    currentRow:number;
}


export const BoxGrid = ({answers,  numCol, todaysAnswer, currentRow}: BoxGridProps) =>{

    return(
        <div className="w-full flex justify-center">
            <div className={`flex flex-col justify-center items-center w-[31rem] h-[31rem] mt-10`}>
                {answers.map( (answer, idx) =>(
                    <BoxRow key={idx} answer={answer} numCol={numCol} todaysAnswer={todaysAnswer} submittedRow={idx<currentRow}/>
                ))}
            </div>
        </div>

    )
}