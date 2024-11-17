import styled from 'styled-components';
import React from 'react';
import Button from './button';

const StyledContainer = styled.div`
    text-align: center;
    margin: 2em;
`;

const Container: React.FC = () => {
    return (
        <StyledContainer>
            <Button>Normal Button</Button>
            <Button $primary>Primary Button</Button>
        </StyledContainer>
    );
};

export default Container;
