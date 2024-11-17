import styled from 'styled-components';
import CardComponent from './card';
import  Anime from '../models/anime';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
    justify-content: center;
`;

const GridComponent: React.FC<{ animes: Anime[] }> = ({ animes }) => {
    return (
        <GridContainer>
            {animes.map((anime) => (
                <CardComponent key={anime.id} anime={anime} />
            ))}
        </GridContainer>
    );
};

export default GridComponent;
