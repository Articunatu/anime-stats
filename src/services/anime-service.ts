import axios from 'axios';
import Anime from '../models/anime';
import Season from '../models/season';

class AnimeService {
    private readonly _storageKey = 'anime_data';

    public async setPopularAnime(): Promise<Anime[]> {
        const animeListFromStorage = this.loadLocalData();
        if (animeListFromStorage.length > 0) {
            return animeListFromStorage;
        }
        const animeList: Anime[] = [];
        const totalPages = 50; 
        for (let page = 1; page <= totalPages; page++) {
            try {
                await this.delay(1000);

                const response = await axios.get<AnimeResponse>(
                    `https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=10&page=${page}`
                );
                if (response.data?.data) {
                    for (const data of response.data.data) {
                        const title = data.title_english || '';
                        const titleSubstring = title.length > 14 ? title.substring(0, 8) : title;
                        const existingAnime = animeList.find((anime) =>
                            anime.title.startsWith(titleSubstring)
                        );
                        if (existingAnime) {
                            const amountOfSeasons = existingAnime.seasons.length;
                            const newSeason: Season = {
                                id: data.malid,
                                animeId: existingAnime.id,
                                number: amountOfSeasons + 1,
                                audienceScore: data.score ?? 0,
                                amtOfScorers: data.scored_by ?? 0,
                                amtOfEpisodes: data.episodes,
                                premier: data.aired?.from ?? '',
                                finale: data.aired?.to ?? '',
                                imageUrl: data.images?.jpg.image_url ?? '',
                            };
                            existingAnime.seasons.push(newSeason);
                        } else {
                            const newAnime: Anime = {
                                id: data.malid,
                                title,
                                seasons: [
                                    {
                                        id: data.malid,
                                        animeId: Date.now(),
                                        number: 1,
                                        audienceScore: data.score ?? 0,
                                        amtOfScorers: data.scored_by ?? 0,
                                        amtOfEpisodes: 0,
                                        premier: data.aired?.from ?? '',
                                        finale: data.aired?.to ?? '',
                                        imageUrl: data.images?.jpg.image_url ?? ''
                                    },
                                ],
                            };
                            animeList.push(newAnime);
                        }
                    }
                }
            } catch (error) {
                console.error('Error fetching anime data:', error);
                break; 
            }
        }
        this.saveLocalData(animeList);

        return animeList;
    }

    private loadLocalData(): Anime[] {
        try {
            const storedData = localStorage.getItem(this._storageKey);
            return storedData ? JSON.parse(storedData) as Anime[] : [];
        } catch (error) {
            console.error('Error loading data from localStorage:', error);
            return [];
        }
    }

    private saveLocalData(data: Anime[]): void {
        try {
            localStorage.setItem(this._storageKey, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving data to localStorage:', error);
        }
    }
    
    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default AnimeService;

interface AnimeResponse {
    data: AnimeData[];
}

interface AnimeData {
    title_english: string;
    score: number;
    scored_by: number;
    aired: Aired | null;
    images: Images | null;
    malid: number;
    episodes: number;
}

interface Aired {
    from: string;
    to: string;
}

interface Images {
    jpg: Jpg;
}

interface Jpg {
    image_url: string;
}
