import React, { ReactNode, useReducer } from 'react';
import { AnimeContext } from './anime-context'; 
import Anime from '../models/anime'; 
import AnimeReducer from './anime-reducer'; 

interface AnimeProviderProps {
    children: ReactNode; 
}

export const AnimeProvider: React.FC<AnimeProviderProps> = ({ children }) => {
    const [userAnimeList, dispatch] = useReducer(AnimeReducer, []);

    const contextValue = {
        userList: userAnimeList,
        addAnime: (anime: Anime) => dispatch({ type: 'ADD_ANIME', payload: anime }),
        removeAnime: (id: number) => dispatch({ type: 'REMOVE_ANIME', payload: id }),
    };

    return (
        <AnimeContext.Provider value={contextValue}>
            {children} 
        </AnimeContext.Provider>
    );
};
