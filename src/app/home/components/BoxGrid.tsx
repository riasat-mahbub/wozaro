"use client"
import { Box } from "./Box"

export const BoxGrid = () =>{
    const boxes = Array.from(Array(25).keys())
    return(
        <div className="grid grid-cols-5 justify-center items-center w-[31rem] h-[31rem]">
            {boxes.map( (i) =>(
                <Box key={i}/>
            ))}
        </div>
    )
}