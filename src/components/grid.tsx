import styled from 'styled-components';
import Card from './card';
import  Anime from '../models/anime';
import { useState } from 'react';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
    justify-content: center;
`;

const GridComponent: React.FC<{ animes: Anime[] }> = ({ animes = [] }) => {
    const [savedAnimes, setSavedAnimes] = useState<Anime[]>(() => {
        const stored = localStorage.getItem('savedAnimes');
        return stored ? JSON.parse(stored) : [];
    });

    const handleSaveAnime = (anime: Anime) => {
        const updatedSavedAnimes = [...savedAnimes, anime];
        setSavedAnimes(updatedSavedAnimes);
        localStorage.setItem('savedAnimes', JSON.stringify(updatedSavedAnimes));
    };
    
    return (
        <GridContainer>
            {animes.map((anime) => (
                <Card key={anime.id} anime={anime} />
            ))}
        </GridContainer>
    );
};

export default GridComponent;
