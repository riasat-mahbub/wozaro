"use client"
import { Box } from "./Box"

export const BoxGrid = () =>{
    const boxes = Array.from(Array(25).keys())
    return(
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-5 justify-center items-center w-[31rem] h-[31rem] mt-10">
                {boxes.map( (i) =>(
                    <Box key={i}/>
                ))}
            </div>
        </div>

    )
}