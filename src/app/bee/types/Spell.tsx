export class SpellCollection{
    letters: Set<string> = new Set<string>();
    mainLetter: string = "";
    submittedAnswers: Set<string> = new Set<string>();

    constructor(text: string="", mainLetter: string=""){
        this.letters = new Set([...text.toLowerCase()])
        this.mainLetter = mainLetter.toLowerCase();

    }


    public addAnswer(answer: string):void{
        this.submittedAnswers.add(answer)
    }
}