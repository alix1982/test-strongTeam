import styled from 'styled-components';

export const StyledTodoList = styled.article`
    width: 100%;

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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        padding: 0;
        margin: 0;
        border: 1px solid #000000;
        border-radius: 50%;
        transition: opacity 0.5s linear;
        cursor: pointer;
    }
    .todoList__sort:hover {
        opacity: 0.6;
    }
    .todoList__list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0;
        list-style-type: none;
    }
`;
