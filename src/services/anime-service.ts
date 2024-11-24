import axios from 'axios';
import Anime from '../models/anime';
import { AnimeResponse } from '../models/api';

class AnimeService {
    public async getPopularAnime(page: number = 1): Promise<Anime[]> {
        const animeList: Anime[] = [];

        try {
            const response = await axios.get<AnimeResponse>(
                `https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=25&page=${page}`
            );

            if (response.data?.data) {
                for (const data of response.data.data) {
                    const newAnime: Anime = {
                        id: data.malid,
                        title: data.title_english || '',
                        audienceScore: data.score ?? 0,
                        imageUrl: data.images?.jpg.image_url ?? '',
                    };

                    animeList.push(newAnime);
                }
            }
        } catch (error) {
            console.error('Error fetching anime data:', error);
        }

        return animeList;
    }
}

export default AnimeService;
