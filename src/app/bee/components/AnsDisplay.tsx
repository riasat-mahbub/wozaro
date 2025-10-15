"use client"

interface AnsDisplayProps{
    answers: string[];
}


export default function AnsDisplay({answers}: AnsDisplayProps){
    if(!answers || answers.length===0){
        return null
    }
    return(
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto p-4 bg-white rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 mt-10">
            <p className="text-2xl sm:text-3xl font-semibold mb-3 text-center sm:text-left text-gray-800 ">
                Currently Found Answers
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {answers.map((val, idx) => (
                <p key={idx} className="bg-gradient-to-r from-indigo-100 to-purple-100  px-3 py-1 rounded-xl text-xl sm:text-2xl 
                    text-gray-800 shadow-sm hover:shadow-md transition-all duration-200">
                    {val}
                </p>
                ))}
            </div>
        </div>

    )
}