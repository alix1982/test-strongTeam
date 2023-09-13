import styled from 'styled-components';

export const StyledFooter = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .footer__copyright {
        align-self: flex-start;
    }
    .footer__img {
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
`;
