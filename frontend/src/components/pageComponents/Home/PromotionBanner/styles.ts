import styled from "styled-components";

export const BannerContainer = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${({ theme }) => theme.colors.red};

    padding: 3rem;

    h1 {

        color: ${({ theme }) => theme.colors.shape};
        font-size: 8rem;
        max-width: 60rem;
    }

    img {

        width: 30rem;
    }
`;