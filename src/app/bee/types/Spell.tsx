

export interface SpellLetter{
    letter: string;
    isMain: boolean;
}


export class SpellCollection{
    spellLetters: SpellLetter[] = [];
    submittedAnswers: Set<string> = new Set<string>();

    constructor(text: string, mainLetter: string){
        if(text.length !== 7){
            throw new Error("NOT 7")
        }
        const letters = new Set([...text])

        if(text.length !== letters.size){
            throw new Error("NOT UNIQUE")
        }

        this.spellLetters = []
        letters.forEach( letter =>{
            this.spellLetters.push({letter: letter, isMain: mainLetter===letter})
        })

    }

    public addAnswer(answer: string):void{
        this.submittedAnswers.add(answer)
    }
}