import React, { useState, useMemo, useEffect } from 'react';
import FilterBar from '../components/filter-bar';
import AnimeService from '../services/anime-service';
import GridComponent from '../components/grid';
import Anime from '../models/anime';
import Header from '../components/header'; 
import Pagination from '../components/pagination'; 

const TopList: React.FC = () => {
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [filters, setFilters] = useState({ search: '', minScore: 1, maxScore: 10 });
    const [currentPage, setCurrentPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            const service = new AnimeService();
            const data = await service.getPopularAnime(currentPage); 
            setAnimeList(data);
            setTotalPages(5); 
        };
        fetchData();
    }, [currentPage]); 

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
        <>
            <Header />
            <FilterBar onFilterChange={setFilters} />
            <GridComponent animes={filteredAnime} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage} 
            />
        </>
    );
};

export default TopList;
