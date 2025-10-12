"use client"

interface BoxProps{
    letter: string;
    bg: string;
}

export const Box = ({letter, bg} : BoxProps) =>{
    return(
        <div className="border-2 border-black w-24 h-24 flex items-center justify-center">
            <p className="text-6xl font-bold">{letter.toUpperCase()}</p>
        </div>
    )
}