import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <h1>Anime Stats</h1>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    font-size: 1.5em;
    font-weight: bold;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;