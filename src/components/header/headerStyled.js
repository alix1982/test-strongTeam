import styled from 'styled-components';

export const StyledHeader = styled.section`
    margin-bottom: 30px;
    width: 100%;

    .header__buttons {
        display: flex;
        width: max-content;
        height: 15px;
        overflow: hidden;
        margin: 0 0 0 auto;
        border: 1px solid #000000;
        border-radius: 10px;
    }
    .header__buttonRu, .header__buttonEng {
        width: 35px;
        height: 15px;
        margin: 0;
        padding: 0;
        border: none;
        font-size: 12px;
        line-height: 12px;
        transition: opacity 0.5s linear;
        cursor: pointer;
    }
    .header__buttonRu:hover, .header__buttonEng:hover {
        opacity: 0.6;
    }
    .header__buttonRu {
        border-right: 1px solid #000000;
    }
    .header__buttonActive {
        background-color: blue;
        color: #ffffff;
    }
    .header__heading {
        font-size: 36px;
    }
    .header__quote {
        margin: 16px 0;
        font-style: italic;
        text-align: end;
    }
`;
