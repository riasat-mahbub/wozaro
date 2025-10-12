import React, { useEffect, useRef, useState} from "react";

interface InvisibleInputProps {
    text:string;
    handleTextChange: (text:string) => void
    onEnter: () => void
    disabled: boolean
}


export default function InvisibleInput({text, handleTextChange, onEnter, disabled} : InvisibleInputProps) {
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input) input.focus();

    const handleBlur = () => input?.focus();
    input?.addEventListener("blur", handleBlur);
    return () => input?.removeEventListener("blur", handleBlur);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(e.target.value.toLowerCase())
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key == "Enter"){
        onEnter()
    }
  }

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center"
      onClick={() => inputRef.current?.focus()}
    >
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="absolute opacity-0 pointer-events-none"
        autoFocus
      />
      <p className="text-xl font-mono">{text ? "..." :  "Start typing..."}</p>
    </div>
  );
}
