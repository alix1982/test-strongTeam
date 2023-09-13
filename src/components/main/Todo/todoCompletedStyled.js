import styled from 'styled-components';

export const StyledTodoComleted = styled.input`
    width: 20px;
    height: 20px;
    transition: opacity 0.5s linear;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`;