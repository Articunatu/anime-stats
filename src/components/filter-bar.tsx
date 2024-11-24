import React, { useEffect, useReducer } from "react";
import { filterReducer, FilterState } from '../hooks/filter-reducer'; 
import styled from 'styled-components';

interface FilterBarProps {
    onFilterChange: (filters: FilterState) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
    const [state, dispatch] = useReducer(filterReducer, { search: '', minScore: 1, maxScore: 10 });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_SEARCH', payload: e.target.value });
    };

    const handleMinScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_MIN_SCORE', payload: parseFloat(e.target.value) || 1 });
    };

    const handleMaxScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_MAX_SCORE', payload: parseFloat(e.target.value) || 10 });
    };

    useEffect(() => {
        onFilterChange(state);
    }, [state, onFilterChange]);

    return (
        <FilterWrapper>
            <FilterInputWrapper>
                <Label>Search by Anime Title:</Label>
                <FilterInput
                    type="text"
                    placeholder="Enter anime title..."
                    value={state.search}
                    onChange={handleSearchChange}
                />
            </FilterInputWrapper>

            <ScoreWrapper>
                <FilterInputWrapper>
                    <Label>Minimum Score:</Label>
                    <FilterInput
                        type="number"
                        placeholder="Enter minimum score"
                        value={state.minScore}
                        onChange={handleMinScoreChange}
                    />
                </FilterInputWrapper>

                <FilterInputWrapper>
                    <Label>Maximum Score:</Label>
                    <FilterInput
                        type="number"
                        placeholder="Enter maximum score"
                        value={state.maxScore}
                        onChange={handleMaxScoreChange}
                    />
                </FilterInputWrapper>
            </ScoreWrapper>
        </FilterWrapper>
    );
};

export default FilterBar;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 1.5em;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FilterInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

const Label = styled.label`
    font-size: 1em;
    font-weight: bold;
    color: #333;
`;

const ScoreWrapper = styled.div`
    display: flex;
    gap: 1em;
    justify-content: space-between;
`;

const FilterInput = styled.input`
    padding: 0.8em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: #5c6bc0;
        background-color: #e8f0fe;
    }

    &::placeholder {
        color: #999;
    }
`;
