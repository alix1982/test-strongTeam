import styled from 'styled-components';

export const StyledTodoItem = styled.li`

    .todoItem__point {
        height: calc(100% - 32px);
        display: flex;
        flex-direction: column;
        width: 200px;
        max-width: 250px;
        padding: 15px;
        border: 1px solid #000000;
        border-radius: 20px;
        background-color: #6495ED;
    }

    .todoItem__point_completed {
        background-color: #2b2b2b;
    }
    
    .todoItem__buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;