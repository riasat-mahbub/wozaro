"use client"


import LinkCard from "../../components/LinkCard"
import word from "../../../../public/word.png"
import bee from "../../../../public/bee.jpg"

export default function CardCollection(){
    return(
        <section className="h-screen">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight sm:leading-snug mb-6 text-gray-900">
                Our Games
            </div>

            <div className="flex flex-row flex-wrap gap-6 w-full " id="cardCollection">
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
        </section>


    )
}