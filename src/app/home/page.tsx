"use client"

import LinkCard from "../components/LinkCard"
import word from "../../../public/word.png"
import bee from "../../../public/bee.jpg"

export default function Home(){
    return(
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 py-12 bg-gradient-to-b from-red-100 via-yellow-50 to-gray-200 min-h-screen relative overflow-hidden">

            {/* Jester-style background shapes */}
            {/* Circles */}
            <div className="absolute top-10 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-yellow-200 rounded-full opacity-20 rotate-12"></div>
            <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-56 sm:h-56 bg-red-300 rounded-full opacity-15 rotate-45"></div>
            
            {/* Diamonds */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-green-200 opacity-25 rotate-45 sm:w-16 sm:h-16"></div>
            <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-yellow-300 opacity-20 rotate-45 sm:w-20 sm:h-20"></div>
            
            {/* Triangles (via CSS clip-path) */}
            <div className="absolute top-1/2 left-1/5 w-12 h-12 bg-red-200 opacity-25 sm:w-16 sm:h-16" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-green-300 opacity-20 sm:w-14 sm:h-14" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
            
            {/* Small “hat” shapes (like tiny jester hats) */}
            <div className="absolute bottom-1/5 right-1/2 w-12 h-12 bg-red-400 opacity-25 sm:w-16 sm:h-16 rounded-t-full rotate-[15deg]"></div>

            {/* Page content */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 text-center leading-tight sm:leading-snug mb-6">
                Welcome to Wozaro
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 text-center mb-10">
                Your daily gaming destination - Click on a game to get started
            </p>

            <div className="flex flex-row flex-wrap gap-6 w-full max-w-5xl mx-auto mt-10">
                <LinkCard 
                    title="Word Game" 
                    description="A game where you try to guess the correct word in a limited number of tries" 
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
        </div>

    )
}