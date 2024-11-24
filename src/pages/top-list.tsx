import React, { useEffect, useState } from 'react';
import GridComponent from '../components/grid'; 
import AnimeService from '../services/anime-service';  
import Anime from '../models/anime'; 
import { Link } from 'react-router-dom';  
import Button from '../components/button';  

const TopList: React.FC = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);

    useEffect(() => {
        const fetchAnimes = async () => {
            const animeService = new AnimeService();
            const animeList = await animeService.getPopularAnime();
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
            />
        </div>
    );
};

export default TopList;
