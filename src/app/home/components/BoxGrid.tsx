"use client"
import { useEffect, useState } from "react";
import BoxRow from "./BoxRow";

interface BoxGridProps{
    answers: string[];
    numRow: number;
    numCol: number;
}


export const BoxGrid = ({answers, numRow, numCol}: BoxGridProps) =>{

    return(
        <div className="w-full flex justify-center">
            <div className={`flex flex-col justify-center items-center w-[31rem] h-[31rem] mt-10`}>
                {answers.map( (answer, idx) =>(
                    <BoxRow key={idx} answer={answer} numCol={numCol}/>
                ))}
            </div>
        </div>

    )
}