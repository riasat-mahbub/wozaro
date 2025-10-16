"use client"


import LinkCard from "../../components/LinkCard"
import word from "../../../../public/word.png"
import bee from "../../../../public/bee.jpg"

export default function CardCollection(){
    return(
        <div className="flex flex-row flex-wrap gap-6 w-full max-w-5xl mx-auto mt-10">
            <LinkCard 
                title="Word Game" 
                description="Guess the correct word in a limited number of tries" 
                href="/word" 
                image={word} 
            />
            <LinkCard 
                title="Bee Game" 
                description="Guess words until you win" 
                href="/bee" 
                image={bee} 
            />
        </div>

    )
}