"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface WinPopupProps {
  text: string
  onClose?: () => void
}

export default function WinPopup({ text, onClose }: WinPopupProps) {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  const confetti = Array.from({ length: 10 }, (_, i) => i)
  const router = useRouter();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-hidden">
            {confetti.map((c) => (
                <motion.div
                key={c}
                className="absolute w-2 h-2 bg-yellow-400"
                initial={{ y: -50, x: Math.random() * 300 - 150, opacity: 1 }}
                animate={{ y: 500, x: Math.random() * 300 - 150, rotate: Math.random() * 360 }}
                transition={{ duration: 2 + Math.random() * 1.5, repeat: Infinity, ease: "linear" }}
                />
            ))}

            {confetti.map((c) => (
                <motion.div
                key={c}
                className="absolute w-2 h-2 bg-red-400"
                initial={{ y: -50, x: Math.random() * 300 - 150, opacity: 1 }}
                animate={{ y: 500, x: Math.random() * 300 - 150, rotate: Math.random() * 360 }}
                transition={{ duration: 2 + Math.random() * 1.5, repeat: Infinity, ease: "linear" }}
                />
            ))}

            {confetti.map((c) => (
                <motion.div
                key={c}
                className="absolute w-2 h-2 bg-green-400"
                initial={{ y: -50, x: Math.random() * 300 - 150, opacity: 1 }}
                animate={{ y: 500, x: Math.random() * 300 - 150, rotate: Math.random() * 360 }}
                transition={{ duration: 2 + Math.random() * 1.5, repeat: Infinity, ease: "linear" }}
                />
            ))}

            <motion.div
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative flex flex-col items-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
                {/* Close Button */}
                <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                <X/>
                </button>

                {/* Win Text */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
                {text}
                </h2>

                {/* Buttons */}
                <div className="flex flex-row gap-4 w-full mt-4 justify-between">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition cursor-pointer"
                    onClick={window.location.reload}
                >
                    Play Again
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition cursor-pointer"
                    onClick={() => router.push('home')}
                >
                    Go to Home
                </motion.button>
                </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
