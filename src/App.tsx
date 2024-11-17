import React, { useEffect, useState } from 'react';
import GridComponent from './components/grid';
import  Anime from './models/anime'; 
import AnimeService from './services/anime-service';

const App: React.FC = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);

    useEffect(() => {
      const fetchAnimes = async () => {
          const animeService = new AnimeService();  
          const animeList = await animeService.setPopularAnime();
          setAnimes(animeList);
      };

      fetchAnimes();
  }, []);

    return (
        <div>
            <h1>Anime List</h1>
            <GridComponent animes={animes} />
        </div>
    );
};

export default App;
