"use client"

import { Texturina } from "next/font/google"
import * as motion from "motion/react-client"

const playful = Texturina({
    weight: '400',
    variable: "--font-lucky",
    style: 'normal',
    subsets: ['latin']
})

export default function Hero(){

    return(
        <div className="flex flex-row items-center h-screen w-screen justify-center">

            <div className={`flex flex-col ${playful.className} w-full h-full justify-center items-center`}>
                <motion.div 
                    initial={{ y: -300, scale: 0.8, rotate: 0, opacity: 0 }}
                    animate={{
                        y: 0,
                        scale: 1,
                        rotate: Math.random() * -2, 
                        opacity: 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        mass: 1,
                    }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-center leading-tight sm:leading-snug mb-6 text-gray-900"
                >
                    Welcome to
                    <span className="hidden lg:block">the wonderful world of</span> 
                </motion.div>

                <motion.div 
                    initial={{ y: -300, scale: 0.8, rotate: 0, opacity: 0 }}
                    animate={{
                        y: 0,
                        scale: 1,
                        rotate: Math.random() * 3, 
                        opacity: 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 10,
                        mass: 1.5,
                    }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-center leading-tight sm:leading-snug mb-6 text-red-700"
                >
                   Wozaro
                </motion.div>

                

                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 text-center mb-10">
                    Where every game is a new shot at glory
                </p>
                
                <motion.a
                    href="#cardCollection"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                className="bg-red-600 text-white p-5 rounded-full shadow text-lg sm:text-xl md:text-2xl cursor-pointer">
                    Enter the Arena
                </motion.a>
            </div>
        </div>
    )
}