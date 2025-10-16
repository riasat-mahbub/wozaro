"use client"


import LinkCard from "../../components/LinkCard"
import word from "../../../../public/words.png"
import bee from "../../../../public/BEE.png"
import construction from "../../../../public/construction.png"

export default function CardCollection(){
    return(
        <section className="min-h-screen min-w-[95vw]">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight sm:leading-snug mb-6 text-gray-900 mt-16 w-full">
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

                <LinkCard 
                    title="Crossword" 
                    description="Under Construction" 
                    href="" 
                    image={construction} 
                    disabled={true}
                />

                <LinkCard 
                    title="Connections" 
                    description="Under Construction" 
                    href="" 
                    image={construction} 
                    disabled={true}
                />

                <LinkCard 
                    title="Sudoku" 
                    description="Under Construction" 
                    href="" 
                    image={construction} 
                    disabled={true}
                />
            </div>
        </section>


    )
}