import styled from 'styled-components';

export const StyledTodoContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    .todoContent__importantly {
        text-align: start;
        font-weight:700;
        margin: 0;
    }
    .red {
        color: red;
    }
`;