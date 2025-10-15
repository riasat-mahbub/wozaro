"use client"

interface WordDisplayProps{
    word: string;
    mainLetter: string;
}

export default function WordDisplay({word, mainLetter}: WordDisplayProps){

    const letters = Array.from(word)
    return(
        <div className={`flex flex-row justify-center gap-2 h-9 mt-20 mb-32`}>
            {letters.map( (val, idx) => {
                return(
                    <div key={idx} className={`text-5xl border-b-4 w-12 flex justify-center pb-12`}>
                        <p className={`font-bold ${val===mainLetter ? "text-yellow-400" : "text-black"}`}>{val.toUpperCase()}</p>
                    </div>
                )
            })}
        </div>
    )
}    