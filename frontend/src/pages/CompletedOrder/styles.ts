import styled from "styled-components";

export const ConfirmedOrderContainer = styled.main`

    flex: 1;
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.green};

    a {

        text-decoration: none;
        color: ${({ theme }) => theme.colors.shape};
    }

    section {
        
        margin: 0 auto;

        background-color: ${({ theme }) => theme.colors.shape};
        padding: 5rem;
        border-radius: 2rem;

        display: flex;
        align-items: center;
        flex-direction: column;

        img {

            width: 10rem;
            margin-bottom: 3rem;
        }

        h1 {

            font-size: 2.5rem;
            margin-bottom: 2rem;
        }

        button {

            padding: 1rem 2rem;

            background-color: ${({ theme }) => theme.colors.green};
            border: none;
            border-radius: 1rem;

            margin-top: 2rem;
            color: ${({ theme }) => theme.colors.shape};

            transition: all 0.2s;

            &:hover {

                opacity: 0.7;
                cursor: pointer;
            }
        }
    }
`;