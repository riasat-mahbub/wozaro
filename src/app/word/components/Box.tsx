"use client";

interface BoxProps {
  letter: string;
  bg: string;
}

export const Box = ({ letter, bg }: BoxProps) => {
  return (
    <div
      className={`border-4 border-black flex items-center justify-center ${bg}
      w-[clamp(2.5rem,6vw,5rem)] h-[clamp(2.5rem,6vw,5rem)] 
      sm:w-[clamp(3rem,5vw,6rem)] sm:h-[clamp(3rem,5vw,6rem)]
      md:w-[clamp(3.5rem,4vw,6.5rem)] md:h-[clamp(3.5rem,4vw,6.5rem)]
      rounded-lg transition-all duration-200`}
    >
      <p className="text-[clamp(1rem,3vw,2.5rem)] font-bold text-center uppercase">
        {letter}
      </p>
    </div>
  );
};
