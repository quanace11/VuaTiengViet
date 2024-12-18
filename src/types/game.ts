export interface ICharacter {
  char: string;
  check: boolean;
  position: number;
}

export interface IGameData {
  id: string;
  wordId: string;
  wordLetters: string[];
}

export interface ISubmitResponse {
  isCorrect: boolean;
  letters: Array<{
    letter: string;
    isMatched: boolean;
  }>;
}

export interface CharactersProps {
  listCharacters: ICharacter[];
  handleCharacterClick: (char: ICharacter, fromInput?: boolean) => void;
}

export interface InputCharactersProps {
  inputCharacters: (ICharacter | null)[];
  handleCharacterClick: (char: ICharacter, fromInput?: boolean) => void;
}
