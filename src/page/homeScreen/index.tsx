import React from 'react';

import { BackgoundScreen } from '../../assets';

import {
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
      <div className="flex justify-start ">
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
      <div className="flex flex-col justify-around  flex-grow">
        <div className="text-center mt-20 flex-1">
          <h1
            className="text-9xl font-extrabold text-white drop-shadow-lg animate-bounce"
            style={{
              WebkitTextStroke: '0.1px black',
              color: 'white',
            }}
          >
            Vua Tiếng Việt
          </h1>
        </div>

        <div className="grid grid-cols-5 gap-6 w-full  mb-10 justify-items-center px-40">
          <div
            onClick={handleNavigate}
            className="relative py-6 px-10 rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item  "
          >
            <button className="w-full flex justify-center">
              <IconPlay className="h-[52px] w-[40px] " />
            </button>
            <p className=" absolute text-3xl  text-white top-[120px] left-[20%] invisible group-hover/item:visible">
              Play
            </p>
          </div>
          <div className="relative py-6 px-10 rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item  ">
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
          <div className="relative py-6 px-10 rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item  ">
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
          <div className="relative py-6 px-10 rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item  ">
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
          <div className="relative  px-10 rounded-2xl bg-lime-400 border-8 border-white shadow-lg hover:bg-orange-400 group/item  ">
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
