import styled from 'styled-components';
import Card from './card';
import  Anime from '../models/anime';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Tre kolumner per rad */
    gap: 1em;
    justify-content: center;
    width: 100%; /* Se till att den fyller hela bredden */
    margin: 0 auto; /* Centrerar innehållet om det finns extra utrymme */
`;

const GridComponent: React.FC<{ animes: Anime[] }> = ({ animes }) => {
    return (
        <GridContainer>
            {animes.map((anime) => (
                <Card key={anime.id} anime={anime} />
            ))}
        </GridContainer>
    );
};

export default GridComponent;
