import { Box } from "./Box"

interface BoxRowProps{
    answer: string;
    numCol: number;
}

export default function BoxRow({answer, numCol}: BoxRowProps){
    const letters = Array.from({ length: numCol }, (_, i) => answer[i] || "");
    return(
        <div className="flex flex-row justify-center items-center">
            {letters.map( (val, idx) =>(
                <Box key={idx} letter={val} bg={"transparent"}/>
            ))}
        </div>
    )
}