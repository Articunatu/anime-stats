import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/card';
import Anime from '../models/anime';
import GridComponent from '../components/grid';

const SavedListPage: React.FC = () => {
    const [savedAnimes, setSavedAnimes] = useState<Anime[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('savedAnimes');
        if (stored) {
            setSavedAnimes(JSON.parse(stored));
        }
    }, []);

    const handleRemoveAnime = (id: number) => {
        const updatedAnimes = savedAnimes.filter((anime) => anime.id !== id);
        setSavedAnimes(updatedAnimes);
        localStorage.setItem('savedAnimes', JSON.stringify(updatedAnimes));
    };

    return (
        <div>
            <h1>Your saved cards</h1>
            <GridComponent>
                {savedAnimes.map((anime) => (
                    <Card
                        key={anime.id}
                        anime={anime}
                        onSave={() => handleRemoveAnime(anime.id)} 
                    />
                ))}
            </GridContainer>
        </div>
    );
};

export default SavedListPage;
