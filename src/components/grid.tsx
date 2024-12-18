import styled from 'styled-components';
import Card from './card';
import Anime from '../models/anime';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns per row */
    gap: 1em;
    justify-content: center;
    width: 100%; /* Ensure it fills the entire width */
    margin: 0 auto; /* Centers the content if there's extra space */
`;

interface GridComponentProps {
    animes: Anime[]; 
}

const GridComponent: React.FC<GridComponentProps> = ({ animes }) => {
    return (
        <GridContainer>
            {animes.map((anime) => (
                <Card 
                    key={anime.id} 
                    anime={anime} 
                />
            ))}
        </GridContainer>
    );
};

export default GridComponent;
