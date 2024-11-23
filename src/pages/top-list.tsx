import React, { useEffect, useState, useContext } from 'react';
import GridComponent from '../components/grid'; 
import AnimeService from '../services/anime-service';  
import Anime from '../models/anime'; 
import { AnimeContext } from '../hooks/anime-context';
import { Link } from 'react-router-dom';  
import Button from '../components/button';  

const TopList: React.FC = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const context = useContext(AnimeContext);

    if (!context) {
        throw new Error('useAnimeContext must be used within an AnimeProvider');
    }

    const { removeAnime } = context;

    useEffect(() => {
        const fetchAnimes = async () => {
            const animeService = new AnimeService();
            const animeList = await animeService.setPopularAnime();
            setAnimes(animeList);  
        };
        fetchAnimes();  
    }, []);

    return (
        <div>
            <Link to="/user-list">  
                <Button>Go to Your List</Button>
            </Link>
            <h1>Top Anime</h1>
            <GridComponent
                animes={animes} 
                onRemoveAnime={removeAnime} 
            />
        </div>
    );
};

export default TopList;
