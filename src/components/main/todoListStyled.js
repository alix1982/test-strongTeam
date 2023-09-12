import styled from 'styled-components';

export const StyledTodoList = styled.article`
    width: calc(100% - 100px);
    padding: 50px;

    .todoList__header {
        display: flex;
        justify-content: space-between;
    }
    .todoList__heading {
        margin: 0;
        font-size: 20px;
        font-weight: bold;
    }
    .todoList__sort {
        width: 30px;
        height: 30px;
        object-fit: contain;
        border: 0.1px solid #000000;
        border-radius: 50%;
    }
    .todoList__list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0;
        list-style-type: none;
    }
`;
