import { fiveLetterWords } from "./fiveLetters"

export const generateTodaysAnswer = () =>{
    return fiveLetterWords[new Date().getTime()%365]
}