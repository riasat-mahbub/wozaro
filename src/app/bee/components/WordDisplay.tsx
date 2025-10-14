"use client"

import { useEffect, useState } from "react";

interface WordDisplayProps{
    word: string;
}

export default function WordDisplay({word}: WordDisplayProps){

    const letters = Array.from(word)
    return(
        <div className={`flex flex-row justify-center gap-2 h-9 mt-20 mb-32`}>
            {letters.map( (val, idx) => {
                return(
                    <div className="text-5xl border-b-4 w-8 flex justify-center pb-12 ">
                        <p className="font-bold">{val.toUpperCase()}</p>
                    </div>
                )
            })}
        </div>
    )
}    