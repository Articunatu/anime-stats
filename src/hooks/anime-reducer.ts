import Anime from '../models/anime';

type Action =
    | { type: 'ADD_ANIME'; payload: Anime }
    | { type: 'REMOVE_ANIME'; payload: number };

const AnimeReducer = (state: Anime[], action: Action): Anime[] => {
    switch (action.type) {
        case 'ADD_ANIME':
            return [...state, action.payload];
        case 'REMOVE_ANIME':
            return state.filter((anime) => anime.id !== action.payload);
        default:
            return state;
    }
};

export default AnimeReducer;
