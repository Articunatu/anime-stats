import React, { useEffect, useReducer, useState, useMemo } from 'react';
import GridComponent from '../components/grid';
import AnimeService from '../services/anime-service';
import Anime from '../models/anime';
import { AnimeContext } from '../hooks/anime-context';
import AnimeReducer from '../hooks/anime-reducer';

const TopList: React.FC = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [userAnimeList, dispatch] = useReducer(AnimeReducer, []);

    const contextValue = useMemo(() => ({
        userList: userAnimeList,
        addAnime: (anime: Anime) => dispatch({ type: 'ADD_ANIME', payload: anime }),
        removeAnime: (id: number) => dispatch({ type: 'REMOVE_ANIME', payload: id }),
    }), [userAnimeList]);

    useEffect(() => {
        const fetchAnimes = async () => {
            const animeService = new AnimeService();
            const animeList = await animeService.setPopularAnime();
            setAnimes(animeList);
        };

        fetchAnimes();
    }, []);

    return (
        <AnimeContext.Provider value={contextValue}>
            <div>
                <h1>Top Anime</h1>
                <GridComponent animes={animes} />
            </div>
        </AnimeContext.Provider>
    );
};

export default TopList;
