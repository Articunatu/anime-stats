import { createContext, useContext } from 'react';
import Anime from '../models/anime';

interface AnimeContextProps {
  userList: Anime[];
  addAnime: (anime: Anime) => void;
  removeAnime: (id: number) => void;
}

export const AnimeContext = createContext<AnimeContextProps | undefined>(undefined);

export const useAnimeContext = (): AnimeContextProps => {
    const context = useContext(AnimeContext);
    if (!context) {
        throw new Error('useAnimeContext must be used within an AnimeContext.Provider');
    }
    return context;
};
