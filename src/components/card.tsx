import styled from 'styled-components';
import Anime  from '../models/anime'; 
import Season  from '../models/season'; 

interface CardProps {
    anime: Anime;
}

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1em;
    padding: 1em;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
    flex: 0 0 150px;  // Fixera bildens bredd till 150px
    margin-right: 1em;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.5em;
    color: #BF4F74;
`;

const SeasonInfo = styled.p`
    font-size: 1.1em;
    margin: 0.5em 0;
`;

const Card: React.FC<CardProps> = ({ anime }) => {
    const seasons: Season[] = anime.seasons;

    const averageScore = seasons.reduce((acc, season) => acc + season.audienceScore, 0) / seasons.length;
    const premier = seasons[0].premier;
    const finale = seasons[seasons.length - 1].finale;
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
                <SeasonInfo>Premiered: {premier}</SeasonInfo>
                <SeasonInfo>Finale: {finale}</SeasonInfo>
                <SeasonInfo>Seasons: {lastSeasonNumber}</SeasonInfo>
            </InfoContainer>
        </CardContainer>
    );
};

export default Card;
