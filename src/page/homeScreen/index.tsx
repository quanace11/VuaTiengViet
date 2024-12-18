import React from 'react';

import { BackgoundScreen } from '../../assets';

import {
  IconFaceBook,
  IconGoogle,
  IconMedal,
  IconPlay,
  IconProfile,
  IconReward,
  IconSetting,
  IconsSound,
} from '../../components/Icons';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();
  const [isSoundOn, setIsSoundOn] = React.useState(true);

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };
  const handleNavigate = () => {
    navigate('/game');
  };

  return (
    <div
      className=" flex flex-col  min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 p-6 bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${BackgoundScreen})`,
      }}
    >
      <div className="flex flex-row justify-between">
        <div className="flex  ">
          <button
            onClick={toggleSound}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
          >
            {isSoundOn ? (
              <IconsSound />
            ) : (
              <div className="relative">
                <IconsSound />
                <div className="absolute top-[-5px] left-[10px] right-0 border w-1 h-9 bg-red-600 transform rotate-45 "></div>
              </div>
            )}
          </button>
        </div>
        <div className="flex flex-row gap-4 ">
          <button
            onClick={handleNavigate}
            className=" rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400  items-center "
          >
            <IconFaceBook className="h-14 w-14 p-3" />
          </button>
          <button
            onClick={handleNavigate}
            className=" rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400  items-center "
          >
            <IconGoogle className="h-14 w-14 text-white p-3" />
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-around py-16">
        <div className="text-center  flex-1">
          <h1
            className="text-7xl sm:text-9xl font-extrabold text-white drop-shadow-lg animate-bounce"
            style={{
              WebkitTextStroke: '0.1px black',
              color: 'white',
            }}
          >
            Vua Tiếng Việt
          </h1>
        </div>

        <div className="grid grid-cols-5 sm:gap-6 gap-1 justify-items-center lg:px-40 ">
          <div
            onClick={handleNavigate}
            className="relative rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item w-[80%] lg:w-[60%] flex items-center "
          >
            <button className="w-full flex justify-center flex-1">
              <IconPlay className="h-[52px] w-[40px] " />
            </button>
            <p className=" absolute text-3xl  text-white top-[120px] left-[20%] invisible group-hover/item:visible">
              Play
            </p>
          </div>
          <div className="relative rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item w-[80%] lg:w-[60%] flex items-center  ">
            <button
              onClick={handleNavigate}
              className="w-full flex justify-center"
            >
              <IconReward className="h-[52px]" />
            </button>
            <p className=" absolute text-3xl  text-white top-[120px] left-[1%] invisible group-hover/item:visible">
              Reward
            </p>
          </div>
          <div className="relative rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item w-[80%] lg:w-[60%] flex items-center">
            <button
              onClick={handleNavigate}
              className="w-full flex justify-center"
            >
              <IconMedal className="h-[52px]" />
            </button>
            <p className=" absolute text-3xl  text-white top-[120px] left-[10%] invisible group-hover/item:visible">
              Medal
            </p>
          </div>
          <div className="relative rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item w-[80%] lg:w-[60%] flex items-center ">
            <button
              onClick={handleNavigate}
              className="w-full flex justify-center"
            >
              <IconSetting className="h-[52px] w-[52px]" />
            </button>
            <p className=" absolute text-3xl  text-white top-[120px] left-[5%] invisible group-hover/item:visible">
              Setting
            </p>
          </div>
          <div className="relative rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item w-[80%] lg:w-[60%] flex items-center ">
            <button
              onClick={handleNavigate}
              className="w-full flex justify-center py-6"
            >
              <IconProfile className="h-[52px] w-10" />
            </button>
            <p className=" absolute text-3xl  text-white top-[120px] left-[5%] invisible group-hover/item:visible">
              Profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeScreen;
