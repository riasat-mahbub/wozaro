"use client"

import { Box } from "@/app/types/Box"

export const SingleBox = ({letter, bg} : Box) =>{
    return(
        <div className="border-2 border-black w-24 h-24 flex items-center justify-center">
            <p className="text-6xl font-bold">{letter.toUpperCase()}</p>
        </div>
    )
}