import React from 'react';
import styled from 'styled-components';
import Anime from '../models/anime';

const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 250px;
    margin: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 1.25em;
    color: #333;
    text-align: center;
    margin-bottom: 0.5em;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1em;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5em;
`;

const InfoText = styled.p`
    font-size: 0.9em;
    color: #666;
`;

const CardComponent: React.FC<{ anime: Anime }> = ({ anime }) => {
    const calculateAverageScore = () => {
        const totalScore = anime.seasons.reduce((sum, season) => sum + season.audienceScore, 0);
        return totalScore / anime.seasons.length;
    };

    const getFirstSeasonDate = () => anime.seasons[0].premier;

    const getLastSeasonDate = () => anime.seasons[anime.seasons.length - 1].finale;

    const getTotalEpisodes = () => anime.seasons.reduce((sum, season) => sum + season.amtOfEpisodes, 0);

    const getLastSeasonNumber = () => anime.seasons[anime.seasons.length - 1].number;

    const imageUrl = anime.seasons[0].imageUrl;

    return (
        <Card>
            <Title>{anime.title}</Title>
            <Image src={imageUrl} alt={anime.title} />
            <Info>
                <InfoText>Score: {calculateAverageScore().toFixed(1)}</InfoText>
                <InfoText>Premier: {getFirstSeasonDate()}</InfoText>
                <InfoText>Finale: {getLastSeasonDate()}</InfoText>
                <InfoText>Episodes: {getTotalEpisodes()}</InfoText>
                <InfoText>Seasons: {getLastSeasonNumber()}</InfoText>
            </Info>
        </Card>
    );
};

export default CardComponent;
