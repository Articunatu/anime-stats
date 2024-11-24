import React, { useState, useMemo } from 'react';
import FilterBar from '../components/filter-bar';
import AnimeService from '../services/anime-service';
import GridComponent from '../components/grid';
import Anime from '../models/anime';

const TopList: React.FC = () => {
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [filters, setFilters] = useState({ search: '', minScore: 1, maxScore: 10 });

    React.useEffect(() => {
        const fetchData = async () => {
            const service = new AnimeService();
            const data = await service.getPopularAnime();
            setAnimeList(data);
        };
        fetchData();
    }, []);

    const filteredAnime = useMemo(() => {
        return animeList.filter((anime) => {
            const matchesSearch = anime.title
                .toLowerCase()
                .startsWith(filters.search.toLowerCase());
            const matchesScore = anime.audienceScore >= filters.minScore && anime.audienceScore <= filters.maxScore;
            return matchesSearch && matchesScore;
        });
    }, [animeList, filters]);

    return (
        <div>
            <FilterBar onFilterChange={setFilters} />
            <GridComponent animes={filteredAnime} />
        </div>
    );
};

export default TopList;
