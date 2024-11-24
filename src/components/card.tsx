import styled from 'styled-components';
import Anime from '../models/anime';

interface CardProps {
    anime: Anime;
}

const Card: React.FC<CardProps> = ({ anime }) => {
    return (
        <CardContainer>
            <ImageContainer>
                <Image src={anime.imageUrl} alt={anime.title} />
            </ImageContainer>
            <InfoContainer>
                <Title>{anime.title}</Title>
                <Score>{anime.audienceScore}</Score>
            </InfoContainer>
        </CardContainer>
    );    
};

export default Card;

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