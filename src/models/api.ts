export interface AnimeResponse {
    data: AnimeData[];
}

export interface AnimeData {
    title_english: string;
    score: number;
    scored_by: number;
    aired: Aired | null;
    images: Images | null;
    malid: number;
    episodes: number;
}

export interface Aired {
    from: string;
    to: string;
}

export interface Images {
    jpg: Jpg;
}

export interface Jpg {
    image_url: string;
}
