import { createContext } from "react";
import Anime from "../models/anime";

interface AnimeContextType {
    userList: Anime[];
    addAnime: (anime: Anime) => void;
    removeAnime: (id: number) => void;
}

export const AnimeContext = createContext<AnimeContextType | undefined>(undefined);