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
    align-items: flex-start; /* Justera boxarna från toppen */
    margin: 1em;
    padding: 1em;
`;

const BoxWithBorder = styled.div`
    border: 4px solid #D3B588; /* Beige ramfärg */
    background-color: #FAF3E0; /* Ljus beige bakgrund */
    border-radius: 12px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; /* Vertikal layout för innehåll */
    justify-content: center;
    align-items: center;
    width: 200px; /* Fixerad bredd */
    height: 300px; /* Fixerad höjd */
`;

const ImageContainer = styled(BoxWithBorder)`
    flex-shrink: 0; /* Förhindra att bilden krymper */
    margin-right: 0; /* Ta bort avståndet mellan bild och info */
`;

const Image = styled.img`
    width: 100%; /* Fyller BoxWithBorder */
    height: 100%; /* Matchar höjden på BoxWithBorder */
    object-fit: cover;
    border-radius: 8px;
`;

const InfoContainer = styled(BoxWithBorder)`
    margin-left: 0; /* Ta bort avståndet mellan info och bild */
    overflow: hidden; /* Hantera text som inte får plats */
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
    color: #BF4F74;
    text-align: center; /* Centrera texten */
`;

const SeasonInfo = styled.p`
    font-size: 0.9em;
    margin: 0.5em 0;
    text-align: center; /* Centrera texten */
    white-space: normal; /* Tillåt radbrytning */
    word-wrap: break-word; /* Bryt ord om nödvändigt */
    overflow: hidden;
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
                <SeasonInfo>Average Score: {averageScore.toFixed(2)}</SeasonInfo>
                <SeasonInfo>Total Episodes: {totalEpisodes}</SeasonInfo>
                <SeasonInfo>Premiered: {premier.split('T')[0]}</SeasonInfo>
                <SeasonInfo>Finale: {finale.split('T')[0]}</SeasonInfo>
                <SeasonInfo>Seasons: {lastSeasonNumber}</SeasonInfo>
                <Button onClick={() => addAnime(anime)}>Add to My List</Button>
                <Button onClick={() => removeAnime(anime.id)}>Remove from List</Button> {/* Trigger removal */}
            </InfoContainer>
        </CardContainer>
    );
};

export default Card;

