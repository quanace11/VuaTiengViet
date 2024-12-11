import React, { useMemo, useState } from 'react';
import { Avatar, BackgoundScreen } from '../../assets';
import { IconHeart, IconMenu, IconTime } from '../../components/Icons';

interface ICharacter {
  char: string;
  check: boolean;
  position: number;
}
const GameScreen = () => {
  const initialCharacters = [
    'x',
    'u',
    'a',
    'n',
    'q',
    'u',
    'a',
    'n',
    'ư',
    'ư',
    'a',
  ];

  // Create initial character state with check property and position
  const initialCharacterState: ICharacter[] = useMemo(
    () =>
      initialCharacters.map((char, index) => ({
        char,
        check: false,
        position: index,
      })),
    [initialCharacters]
  );

  const [listCharacters, setListCharacters] = useState<ICharacter[]>(
    initialCharacterState
  );

  const [inputCharacters, setInputCharacters] = useState<(ICharacter | null)[]>(
    new Array(initialCharacters.length).fill(null)
  );

  const handleCharacterButtonClick = (
    char: ICharacter,

    fromInput: boolean = false
  ) => {
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
      const emptySlotIndex = inputCharacters.findIndex((slot) => slot === null);

      if (emptySlotIndex !== -1) {
        setListCharacters((prev) =>
          prev.map((item) => {
            return item.position === char.position
              ? { ...item, check: true }
              : item;
          })
        );

        setInputCharacters((prev) => {
          const newInputs = [...prev];
          newInputs[emptySlotIndex] = char;
          return newInputs;
        });
      }
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 px-7 md:px-20 gap-6 lg:gap-16 relative"
      style={{
        backgroundImage: `url(${BackgoundScreen})`,
      }}
    >
      {/* Top section */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1 mt-2 ">
          <IconHeart className="w-[34px] h-[40px] sm:w-[50px] sm:h-[56px]" />{' '}
          <IconHeart className="w-[34px] h-[40px] sm:w-[50px] sm:h-[56px]" />{' '}
          <IconHeart className="w-[34px] h-[40px] sm:w-[50px] sm:h-[56px]" />
        </div>
        <h1
          className="text-2xl sm:text-5xl font-bold mb-4 text-center text-white"
          style={{
            WebkitTextStroke: '0.9px black',
            color: 'white',
          }}
        >
          LEVEL 1
        </h1>
        <div className="flex flex-row gap-3 justify-center items-center">
          <IconTime className="w-10 h-10" />
          <p className="text-3xl font-bold">2:59</p>
        </div>
      </div>

      <div className="flex-1 flex flex-grow flex-col gap-10 lg:gap-20">
        {/* Original characters display */}
        <div className="flex justify-center text-center    items-center px-6 py-14   lg:mx-20 border-[12px] rounded-3xl border-white">
          <p className="break-words text-3xl w-full sm:text-4xl lg:text-5xl font-bold tracking-widest">
            sersefesff wsadddddddddddddd
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-10">
          {/* Input fields */}
          <div className="flex justify-center mb-4 flex-wrap gap-2">
            {inputCharacters.map((char, index) => (
              <button
                key={index}
                onClick={
                  char
                    ? () => handleCharacterButtonClick(char, true)
                    : undefined
                }
                className={`
                  w-12 h-12 rounded uppercase 
                  ${
                    char
                      ? 'bg-blue-500 text-white hover:bg-orange-400'
                      : 'opacity-60 border-2 border-dashed'
                  }
                `}
              >
                {char?.char || ''}
              </button>
            ))}
          </div>

          <div className="flex justify-center flex-wrap gap-2">
            {listCharacters.map((char, index) => (
              <button
                key={index}
                onClick={() => handleCharacterButtonClick(char)}
                className={`
                  bg-blue-500 text-white p-2 w-12 h-12 rounded hover:bg-blue-600 uppercase
                  ${char.check ? 'invisible' : 'visible'}
                `}
              >
                {char.char}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Avatar section remains the same */}
      <div className="absolute bottom-0 flex justify-start w-32 h-32 lg:w-60 lg:h-60 lg:-ml-[66px] md:-ml-[66px] sm:-ml-[22px]  ml-[-22px] mb-2 ">
        <div
          className="w-full z-10 bg-center bg-cover bg-no-repeat rounded-bl-2xl rounded-tr-2xl rounded-br-[40px] rounded-tl-[40px] lg:rounded-br-[80px] lg:rounded-tl-[80px] border-4 border-white"
          style={{ backgroundImage: `url(${Avatar})` }}
        ></div>
        <div className="absolute top-[-80px] left-9">
          <div className="relative bg-lime-300 border-4 border-white rounded-3xl">
            <p className="text-white text-2xl text-nowrap p-4">Hsh</p>
            <div className="absolute bottom-[-11px] left-12 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lime-300 border-r-4 border-b-4 border-white"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex  lg:mr-[20px] md:mr-[20px] sm:mr-[20px]  mr[ 22px] mb-2 ">
        <IconMenu className=" h-[50px]" />
      </div>
    </div>
  );
};

export default GameScreen;
