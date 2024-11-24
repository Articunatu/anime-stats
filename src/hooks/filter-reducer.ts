export interface FilterState {
    search: string;
    minScore: number;
    maxScore: number;
}

export type FilterAction =
    | { type: 'SET_SEARCH'; payload: string }
    | { type: 'SET_MIN_SCORE'; payload: number }
    | { type: 'SET_MAX_SCORE'; payload: number };

export const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
    switch (action.type) {
        case 'SET_SEARCH':
            return { ...state, search: action.payload };
        case 'SET_MIN_SCORE':
            return { ...state, minScore: action.payload };
        case 'SET_MAX_SCORE':
            return { ...state, maxScore: action.payload };
        default:
            return state;
    }
};
