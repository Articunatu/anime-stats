import Anime from "../models/anime";

const AnimeReducer = (state: Anime[], action: { type: string; payload: any }) => {
    switch (action.type) {
        case 'ADD_ANIME':
            return [...state, action.payload];
        case 'REMOVE_ANIME':
            return state.filter(anime => anime.id !== action.payload);
        default:
            return state;
    }
};

export default AnimeReducer;