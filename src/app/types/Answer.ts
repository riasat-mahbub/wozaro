export interface LetterState {
  letter: string;
  state: "correct" | "present" | "absent" | "empty";
}

export interface Answer {
  isSubmitted: boolean;
  letters: LetterState[];
}
