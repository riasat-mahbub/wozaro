"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image, { StaticImageData } from "next/image"

interface LinkCardProps {
  title: string
  description: string
  href: string
  image?: StaticImageData;
  disabled?: boolean
}

export default function LinkCard({ title, description, href, image, disabled }: LinkCardProps) {
  return (
    <Link
      href={href}
      onClick={(e) => disabled && e.preventDefault() }
      className={`block w-full sm:w-[20rem] md:w-[24rem] bg-white border border-gray-200 rounded-2xl shadow-md p-6 
      transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-4 active:scale-95
      ${disabled && "bg-gray-100 opacity-70 cursor-not-allowed"}`}>
      <div className="flex flex-col h-full justify-between">

        {image && (
            <div className="relative w-full h-48 sm:h-56 overflow-hidden mb-12">
                <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw"/>
            </div>
        )}
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800 text-center sm:text-left">
          {title}
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-4 text-center sm:text-left">
          {description}
        </p>

        <div className="flex items-center justify-center sm:justify-end text-blue-600 font-medium group">
          <span className="mr-1">Visit</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
