import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgoundScreen } from '../../assets';
import { END_POINT } from '../../constaints/endpoint';
import { useAuth } from '@clerk/clerk-react';
import { IconExit } from '../../components/Icons';

const MenuScreen = () => {
  const navigate = useNavigate();
  const { getToken } = useAuth();
  const fetchData = useCallback(async (token: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}${END_POINT.GENERATE}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
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
      const token = await getToken();
      const data = await fetchData(token ?? '');
      console.log(data);
      if (data && data.id) {
        navigate(`/pve?gameId=${data.id}`, { state: { ...data } });
      } else {
        console.error('ID not found in fetched data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleNavigateOnlineGame = async () => {
    try {
      const token = await getToken();
      const data = await fetchData(token ?? '');
      console.log(data);
      if (data && data.id) {
        navigate(`/online?gameId=${data.id}`, { state: { ...data } });
      } else {
        console.error('ID not found in fetched data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleNavigateHome = () => {
    navigate('/');
  };
  return (
    <div
      className="flex flex-col items-center  min-h-screen p-4  gap-20"
      style={{
        backgroundImage: `url(${BackgoundScreen})`,
      }}
    >
      <div className="flex w-full justify-start -ml-7 -mt-4">
        <button
          className="hover:bg-orange-400 p-4 rounded-lg"
          onClick={handleNavigateHome}
        >
          <IconExit />
        </button>{' '}
      </div>
      <div className="flex flex-col items-center gap-20 w-full">
        <h1
          className="lg:text-9xl text-7xl font-bold text-white  mb-8 text-center"
          style={{
            WebkitTextStroke: '1px black',
            color: 'white',
          }}
        >
          Vua Tiếng Việt
        </h1>
        <div className="flex flex-row items-center justify-center gap-10 lg:gap-40 w-full flex-wrap md:flex-nowrap">
          <div
            className="bg-blue-500 text-white text-4xl md:text-7xl w-[30%] h-[30%] lg:w-[300px] lg:h-[200px] rounded-2xl border shadow-lg hover:bg-amber-400 items-center flex justify-center  "
            onClick={handleNavigate}
            style={{
              WebkitTextStroke: '0.9px black',
              color: 'white',
            }}
          >
            <p className="w-full text-center p-4">PVE</p>
          </div>
          <div
            className="bg-blue-500 text-white text-4xl md:text-7xl w-[30%] h-[30%] lg:w-[300px] lg:h-[200px] rounded-2xl border shadow-lg hover:bg-amber-400 items-center flex justify-center "
            onClick={handleNavigateOnlineGame}
            style={{
              WebkitTextStroke: '0.9px black',
              color: 'white',
            }}
          >
            <p className="w-full text-center p-4">Rank</p>
          </div>
          <div
            className="bg-blue-500 text-white text-4xl md:text-7xl w-[30%] h-[30%] lg:w-[300px] lg:h-[200px] rounded-2xl border shadow-lg hover:bg-amber-400 items-center flex justify-center"
            onClick={handleNavigate}
            style={{
              WebkitTextStroke: '0.9px black',
              color: 'white',
            }}
          >
            <p className="w-full text-center p-4">PVP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
