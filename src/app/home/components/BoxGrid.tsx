"use client"
import { Box } from "@/app/types/Box";
import { SingleBox } from "./Box"
import { useEffect, useState } from "react";

interface BoxGridProps{
    text: string;
}


export const BoxGrid = ({text}: BoxGridProps) =>{
    const [boxes, setBoxes] = useState<Box[]>((() =>
        Array(25).fill({ letter: "", bg: "transparent" })
    ))

    useEffect( () =>{
        const updatedBoxes = boxes.map((box, i) => ({
            ...box,
            letter: text[i] || "",
        }));

        setBoxes(updatedBoxes);
        console.log(boxes)
    }, [text])

    return(
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-5 justify-center items-center w-[31rem] h-[31rem] mt-10">
                {boxes.map( (val, idx) =>(
                    <SingleBox key={idx} letter={val.letter} bg={val.bg}/>
                ))}
            </div>
        </div>

    )
}