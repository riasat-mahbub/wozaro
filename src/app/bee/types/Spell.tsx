

export interface SpellLetter{
    letter: string;
    isMain: boolean;
}

export class SpellCollection{
    spellLetters: SpellLetter[] = [];
    answer: string = ""

    constructor(text: string, mainLetter: string){
        const letters = new Set([...text])

        if(text.length !== letters.size){
            throw new Error("NOT UNIQUE")
        }

        this.spellLetters = []
        letters.forEach( letter =>{
            this.spellLetters.push({letter: letter, isMain: mainLetter===letter})
        })

    }
}