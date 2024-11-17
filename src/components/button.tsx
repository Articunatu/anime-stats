import styled, { css } from 'styled-components';

const StyledButton = styled.button<{ $primary?: boolean }>`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    cursor: pointer;
    transition: all 0.3s ease;

    ${(props) =>
        props.$primary &&
        css`
            background: #BF4F74;
            color: white;
            border-color: #BF4F74;
        `}

    &:hover {
        opacity: 0.8;
    }
`;

interface ButtonProps {
    children: React.ReactNode;
    $primary?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, $primary, onClick }) => {
    return (
        <StyledButton $primary={$primary} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
