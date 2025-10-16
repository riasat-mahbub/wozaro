"use client"

import CardCollection from "./components/CardCollection"
import Hero from "./components/Hero"



export default function Home(){


    return(
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 py-12 bg-white relative overflow-hidden">

            <Hero/>

            <CardCollection/>
        </div>

    )
}