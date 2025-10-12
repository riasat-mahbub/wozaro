import { useEffect } from "react";
import { Box } from "./Box"
import { Answer } from "@/app/types/Answer";

interface BoxRowProps{
    answer: Answer;
    numCol: number;
    todaysAnswer: string;
}

export default function BoxRow({answer, numCol, todaysAnswer}: BoxRowProps){
    const letters = Array.from({ length: numCol }, (_, i) => answer.text[i] || "");

    const getColorFromAnswer = (val:string, idx:number) =>{
        if(!answer.isSubmitted) return "bg-transparent"
        if(val == todaysAnswer[idx]){
            return "bg-emerald-600"
        }else{
            if(todaysAnswer.includes(val) && val!=""){
                return "bg-yellow-600"
            }else{
                return "bg-red-600"
            }
        }

    }
    return(
        <div className="flex flex-row justify-center items-center">
            {letters.map( (val, idx) =>(
                <Box key={idx} letter={val} bg={getColorFromAnswer(val, idx)}/>
            ))}
        </div>
    )
}