import styled from 'styled-components';

export const StyledTodoContent = styled.div`
    width: 100%;
    transition: color 0.5s linear;
    cursor: pointer;
    &:hover {
        color: #424242;
    }
    
    .todoContent__heading {
        text-align: start;
        word-break: break-word;
    }
    .todoContent__text {
        text-align: start;
        word-break: break-word;
    }
    .todoCompleted {
        text-decoration: line-through;
    }
`;