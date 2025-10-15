"use client"

import LinkCard from "../components/LinkCard"
import word from "../../../public/word.png"
import bee from "../../../public/bee.jpg"

export default function Home(){
    return(
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 py-12 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 text-center leading-tight sm:leading-snug mb-6">
                Welcome to Wozaro
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 text-center mb-5">
                Your daily gaming destination.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 text-center mb-12">
                Click on a game to get started.
            </p>
            <div className="flex flex-row flex-wrap gap-2 w-3/4 mx-auto mt-10">
                <LinkCard title="Word Game" description="A game where you try to guess the correct word in a limited number of tries" href="/word" image={word}/>
                <LinkCard title="Bee Game" description="Guess words until you win" href="/bee" image={bee}/>
            </div>
        </div>

    )
}