import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px;
`;

const PageButton = styled.button<{ isActive: boolean }>`
    padding: 10px 20px;
    background-color: ${(props) => (props.isActive ? '#4CAF50' : '#ddd')};
    color: ${(props) => (props.isActive ? 'white' : 'black')};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.isActive ? '#45a049' : '#ccc')};
    }
`;

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <PaginationWrapper>
            <PageButton isActive={currentPage > 1} onClick={() => handlePageClick(currentPage - 1)}>
                Previous
            </PageButton>
            {[...Array(totalPages)].map((_, index) => (
                <PageButton
                    key={index}
                    isActive={currentPage === index + 1}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </PageButton>
            ))}
            <PageButton isActive={currentPage < totalPages} onClick={() => handlePageClick(currentPage + 1)}>
                Next
            </PageButton>
        </PaginationWrapper>
    );
};

export default Pagination;
