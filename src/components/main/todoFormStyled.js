import styled from 'styled-components';

export const StyledTodoForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
    /* width: calc(100% - 100px);
    padding: 0 50px; */

    .todoForm__heading {
        margin: 0 auto 20px 0;
        text-align: start;
        font-size: 20px;
        font-weight: bold;
    }
    .todoForm__inputs {
        display: flex;
        flex-direction: column;
        width: 50%;
        border: none;
        margin: 0;
        padding: 10px;
    }
    .todoForm__inputs_add {
        border: 1px solid black;
    }
    .todoForm__inputName, .todoForm__inputText {
        height: 20px;
        border-radius: 10px;
        margin: 0;
        margin-bottom: 5px;
        padding: 5px 10px;
    }
    .todoForm__buttons {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 20px;
    }
    .todoForm__buttons_end {
        justify-content: space-between;
    }
    .todoForm__buttonSubmit, .todoForm__buttonCancel {
        width: 35%;
        height: 25px;
        border-radius: 10px;
    }

    .todoForm__buttonCancel {
        color: red;
    }

    @media (max-width: 750px) {
        .todoForm__buttonSubmit, .todoForm__buttonCancel {
            width: 45%;
        }
    }
`;
