import styled from 'styled-components';

export const StyledHeader = styled.section`
    margin-bottom: 30px;
    width: calc(100% - 100px);
    padding: 0 50px;

    .header__heading {
        font-size: 36px;
    }
    .header__quote {
        margin: 16px 0;
        font-style: italic;
        text-align: end;
        /* margin: 10px; */
    }

    @media (max-width: 320px) {
        /* .modalContent {
            padding: 15px;
            & span {
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
            }
        }
        .buttons {
            margin-top: 18px;
        } */
    }
`;
