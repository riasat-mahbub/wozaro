"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface LosePopupProps {
  text: string
  onClose?: () => void
}

export default function LosePopup({ text, onClose }: LosePopupProps) {
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
            
            <motion.div
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative flex flex-col items-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
                <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                <X/>
                </button>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
                    {text}
                </h2>

                <div className="flex flex-row gap-4 w-full mt-4 justify-between">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition cursor-pointer"
                    onClick={window.location.reload}
                >
                    Try Again
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition cursor-pointer"
                    onClick={() => router.push('home')}
                >
                    Give up
                </motion.button>
                </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
