import React, { useCallback } from 'react';
import { BackgoundScreen } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { END_POINT } from '../../constaints/endpoint';

const MenuScreen = () => {
  //   enum GameMode {
  //     CLASSIC = 'classic',
  //     TIME_ATTACK = 'time-attack',
  //     MULTIPLAYER = 'multiplayer',
  //   }
  const navigate = useNavigate();
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://10.10.21.38:5100/api${END_POINT.GENERATE}`
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }, []);

  const handleNavigate = async () => {
    try {
      const data = await fetchData();
      if (data && data.id) {
        navigate(`/pve/${data.id}`);
      } else {
        console.error('ID not found in fetched data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div
      className="flex flex-col items-center pt-28 min-h-screen p-4  gap-40"
      style={{
        backgroundImage: `url(${BackgoundScreen})`,
      }}
    >
      <h1
        className="text-9xl font-bold text-white  mb-8"
        style={{
          WebkitTextStroke: '1px black',
          color: 'white',
        }}
      >
        Vua Tiếng Việt
      </h1>
      <div className="flex flex-row items-center justify-center gap-40">
        <div
          className="bg-blue-500 text-white text-7xl w-[300px] h-[200px] rounded-2xl border shadow-lg hover:bg-amber-400 items-center flex justify-center "
          onClick={handleNavigate}
          style={{
            WebkitTextStroke: '0.9px black',
            color: 'white',
          }}
        >
          <p>PVE</p>
        </div>
        <div
          className="bg-blue-500 text-white text-7xl w-[300px] h-[200px] rounded-2xl border shadow-lg hover:bg-amber-400 items-center flex justify-center"
          onClick={handleNavigate}
          style={{
            WebkitTextStroke: '0.9px black',
            color: 'white',
          }}
        >
          <p>PVP</p>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
