import styled from 'styled-components';

export const StyledFooter = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* width: calc(100% - 100px);
    padding: 0 50px; */
    /* margin: 0 20px; */
    .footer__copyright {
        align-self: flex-start;
        /* font-style: italic; */
    }

    .footer__img {
        width: 30px;
        height: 30px;
        object-fit: contain;
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
