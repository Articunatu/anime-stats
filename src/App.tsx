import React, { useEffect, useState } from 'react';
import GridComponent from './components/grid';
import AnimeService from './services/anime-service';
import Anime from './models/anime'; 

const App: React.FC = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);

    useEffect(() => {
        const fetchAnimes = async () => {
            const animeService = new AnimeService();
            const animeList = await animeService.setPopularAnime(500);
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
