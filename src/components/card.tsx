import styled from 'styled-components';
import Anime from '../models/anime';
import Season from '../models/season';
import Button from './button';
import { useContext } from 'react';
import { AnimeContext } from '../hooks/anime-context';

interface CardProps {
    anime: Anime;
    onRemoveAnime: (animeId: number) => void; 
}

const CardContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 1em;
    padding: 1em;
`;

const BoxWithBorder = styled.div`
    border: 4px solid #D3B588;
    background-color: #FAF3E0; 
    border-radius: 12px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px; 
`;

const ImageContainer = styled(BoxWithBorder)`
    flex-shrink: 0; 
    margin-right: 0;
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`;

const InfoContainer = styled(BoxWithBorder)`
    margin-left: 0;
    overflow: hidden;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
    color: #BF4F74;
    text-align: center;
`;

const SeasonInfo = styled.p`
    font-size: 0.9em;
    margin: 0.5em 0;
    text-align: center; 
    white-space: normal;
    word-wrap: break-word;
    overflow: hidden;
`;

const Score = styled.span`
    display: inline-block;
    background-color: #4A90E2;
    color: white;
    border-radius: 12px;
    padding: 0.3em 0.8em;
    font-size: 0.9em;
    font-weight: bold;
    margin-left: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;


const Card: React.FC<CardProps> = ({ anime }) => {
    const context = useContext(AnimeContext);

    if (!context) {
        throw new Error('AnimeContext is not provided');
    }

    const { addAnime } = context; 
    const { removeAnime } = context; 
    const seasons: Season[] = anime.seasons;

    const averageScore = seasons.reduce((acc, season) => acc + season.audienceScore, 0) / seasons.length;
    const premier = seasons[0].premier.split('T')[0]; 
    const finale = seasons[seasons.length - 1].finale.split('T')[0]; 
    const totalEpisodes = seasons.reduce((acc, season) => acc + season.amtOfEpisodes, 0);
    const lastSeasonNumber = seasons[seasons.length - 1].number;

    return (
        <CardContainer>
            <ImageContainer>
                <Image src={anime.seasons[0].imageUrl} alt={anime.title} />
            </ImageContainer>
            <InfoContainer>
                <Title>{anime.title}</Title>
                <SeasonInfo>
                    Score: 
                    <Score>
                        {averageScore.toFixed(2)}
                    </Score>
                </SeasonInfo>
                {/* <SeasonInfo>Total Episodes: {totalEpisodes}</SeasonInfo>
                <SeasonInfo>Premiered: {premier.split('T')[0]}</SeasonInfo>
                <SeasonInfo>Finale: {finale.split('T')[0]}</SeasonInfo> */}
                <SeasonInfo>Seasons: {lastSeasonNumber}</SeasonInfo>
                <Button $primary={true} onClick={() => addAnime(anime)}>Add</Button>
                <Button onClick={() => removeAnime(anime.id)}>Remove</Button> {/* Trigger removal */}
            </InfoContainer>
        </CardContainer>
    );
};

export default Card;

