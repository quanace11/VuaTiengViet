import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Avatar, BackgoundScreen } from '../../assets';
import { IconMenu } from '../../components/Icons';

import { END_POINT } from '../../constaints/endpoint';
import { useNavigate, useParams } from 'react-router-dom';

interface ICharacter {
  char: string;
  check: boolean;
  position: number;
}

interface IGameData {
  id: string;
  wordId: string;
  wordLetters: string[];
}

interface ISubmitResponse {
  isCorrect: boolean;
  letters: Array<{
    letter: string;
    isMatched: boolean;
  }>;
}

const GameScreen = () => {
  const [feedback, setFeedback] = useState<string>('Make some noise');
  const [gameData, setGameData] = useState<IGameData>();
  const [listCharacters, setListCharacters] = useState<ICharacter[]>([]);
  const [inputCharacters, setInputCharacters] = useState<(ICharacter | null)[]>(
    []
  );

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // API calls
  const fetchNewGame = useCallback(async () => {
    try {
      const response = await fetch(
        `http://10.10.21.38:5100/api${END_POINT.GENERATE}`
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching new game:', error);
      return null;
    }
  }, []);

  const fetchGameById = useCallback(async (gameId: string) => {
    try {
      const response = await fetch(
        `http://10.10.21.38:5100/api${END_POINT.GAME}/${gameId}`
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching game:', error);
      return null;
    }
  }, []);

  const submitAnswer = useCallback(
    async (gameId: string, letters: string[]) => {
      try {
        const response = await fetch(
          `http://10.10.21.38:5100/api${END_POINT.SUBMIT}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ gameId, letters }),
          }
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const { data } = await response.json();

        return data as ISubmitResponse;
      } catch (error) {
        console.error('Error submitting answer:', error);
        return null;
      }
    },
    []
  );

  // Initialize game state
  const initialCharacterState = useMemo(() => {
    if (!gameData?.wordLetters) return [];
    return gameData.wordLetters.map((char, index) => ({
      char,
      check: false,
      position: index,
    }));
  }, [gameData?.wordLetters]);

  // Load game data
  useEffect(() => {
    if (!id) return;

    const loadGame = async () => {
      const data = await fetchGameById(id);
      if (data) {
        setGameData(data);
        setFeedback('Giải giùm tôi câu này');
      }
    };

    loadGame();
  }, [fetchGameById, id]);

  // Initialize game characters
  useEffect(() => {
    setListCharacters(initialCharacterState);
    if (gameData?.wordLetters) {
      const updatedInputCharacters = gameData.wordLetters.map((item) =>
        item === ' ' ? { char: ' ', check: false, position: -1 } : null
      );
      setInputCharacters(updatedInputCharacters);
    }
  }, [initialCharacterState, gameData?.wordLetters]);

  // Check answer completion
  useEffect(() => {
    console.log('test vao day');
    const checkAnswer = async () => {
      if (!inputCharacters.length || !gameData?.id) return;
      if (!inputCharacters.every((char) => char !== null)) return;

      const letters = inputCharacters
        .filter((item) => item?.char !== ' ')
        .map((item) => item!.char);

      const result = await submitAnswer(gameData.id, letters);

      if (!result) return;
      console.log('text', result.isCorrect);
      if (result.isCorrect) {
        setFeedback('Bạn giải đúng rồi qua câu tiếp nhé.');
        const newGame = await fetchNewGame();
        if (newGame?.id) {
          navigate(`/pve/${newGame.id}`);
        }
      } else {
        const correctCount = result.letters.filter(
          (item) => item.isMatched
        ).length;
        const wrongCount = result.letters.length - correctCount;
        setFeedback(
          `Sao bạn dở dữ vậy, có ${correctCount} kí tự đúng và ${wrongCount} kí tự sai`
        );
      }
    };

    checkAnswer();
  }, [inputCharacters]);

  const handleCharacterClick = useCallback(
    (char: ICharacter, fromInput: boolean = false) => {
      if (fromInput) {
        setListCharacters((prev) =>
          prev.map((item) =>
            item.position === char.position ? { ...item, check: false } : item
          )
        );
        setInputCharacters((prev) =>
          prev.map((item) => (item?.position === char.position ? null : item))
        );
      } else {
        const emptySlotIndex = inputCharacters.findIndex(
          (slot) => slot === null
        );
        if (emptySlotIndex === -1) return;

        setListCharacters((prev) =>
          prev.map((item) =>
            item.position === char.position ? { ...item, check: true } : item
          )
        );
        setInputCharacters((prev) => {
          const newInputs = [...prev];
          newInputs[emptySlotIndex] = char;
          return newInputs;
        });
      }
    },
    [inputCharacters]
  );

  const renderInputButton = useCallback(
    (char: ICharacter | null, index: number) => (
      <button
        key={index}
        onClick={char ? () => handleCharacterClick(char, true) : undefined}
        className={`
        w-12 h-12 rounded
        ${
          !char
            ? 'opacity-60 border-2 border-dashed border-white'
            : char.char === ' '
            ? 'invisible'
            : 'bg-blue-500 text-white hover:bg-orange-400 uppercase'
        }
      `}
      >
        {char?.char || ''}
      </button>
    ),
    [handleCharacterClick]
  );
  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 px-7 md:px-20 gap-6 lg:gap-16 relative"
      style={{
        backgroundImage: `url(${BackgoundScreen})`,
      }}
    >
      <div className="flex  items-center justify-center">
        <h1
          className="text-2xl sm:text-5xl font-bold mb-4 text-center text-white"
          style={{
            WebkitTextStroke: '0.9px black',
            color: 'white',
          }}
        >
          LEVEL
        </h1>
      </div>

      <div className="flex-1 flex flex-grow flex-col gap-10 lg:gap-20 items-center ">
        <div className="flex justify-center text-center    items-center px-6 py-14   lg:mx-20 border-[12px] rounded-3xl border-white md:min-w-[620px] md:max-w-[96%] max-w-[96%]">
          <p className="break-words text-3xl w-full sm:text-4xl lg:text-5xl font-bold tracking-widest font-sans">
            {gameData?.wordLetters.filter((item) => item !== ' ').join('/')}
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex justify-center mb-4 flex-wrap gap-2">
            {inputCharacters.map((char, index) =>
              renderInputButton(char, index)
            )}
          </div>

          <div className="flex justify-center flex-wrap gap-2">
            {listCharacters
              .filter((item) => item.char !== ' ')
              .map((char, index) => (
                <button
                  key={index}
                  onClick={() => handleCharacterClick(char)}
                  className={`
                  bg-blue-500 text-white p-2 w-12 h-12 rounded hover:bg-blue-600 border-[1px] font-sans font-medium text-xl uppercase
                  ${char.check ? 'invisible' : 'visible'}
                `}
                >
                  {char.char}
                </button>
              ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 flex justify-start w-32 h-32 lg:w-60 lg:h-60 lg:-ml-[66px] md:-ml-[66px] sm:-ml-[22px]  ml-[-22px] mb-2 ">
        <div
          className="w-full z-10 bg-center bg-cover bg-no-repeat rounded-bl-2xl rounded-tr-2xl rounded-br-[40px] rounded-tl-[40px] lg:rounded-br-[80px] lg:rounded-tl-[80px] border-4 border-white"
          style={{ backgroundImage: `url(${Avatar})` }}
        ></div>
        <div className="absolute top-[-80px] left-9">
          <div className="relative bg-lime-300 border-4 border-white rounded-3xl">
            <p className="text-white text-2xl text-nowrap p-4">{feedback}</p>
            <div className="absolute bottom-[-11px] left-12 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lime-300 border-r-4 border-b-4 border-white"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex  lg:mr-[20px] md:mr-[20px] sm:mr-[20px]  mr-[10px] mb-2 ">
        <button>
          <IconMenu className=" h-[30px] w-[30px] md:h-[44px] md:w-[50px]" />
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
