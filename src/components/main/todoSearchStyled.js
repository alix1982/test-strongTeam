import styled from 'styled-components';

export const StyledTodoSearch = styled.form`
    width: 100%;
    /* height: px; */
    margin: 20px 0;
    transition: opacity 0.5s linear;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }

    .todoSearch__inputBlock {
        display: flex;
        align-items: center;
    }

    .todoSearch__inputText {
        margin: 0 20px 0 0;
    }
    .todoSearch__input {
        width: 50%;
        height: 20px;
        border-radius: 10px;
        padding: 5px 10px;
    }
`;