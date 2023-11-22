import styled from "styled-components";

export const PizzaItemContainer = styled.div`

    width: fit-content;
    max-width: 260px;

    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: 8px;

    img {

        width: 100%;
        height: 40%;
        border-radius: 8px 8px 0 0;
    }

    div.add__button {

        display: flex;
        justify-content: center;

        margin-top: -1.5rem;

        button {

            padding: 1rem;
            border-radius: 999px;

            background-color: ${({ theme }) => theme.colors.red};
            border: none;

            transform: all 0.2s;

            &:hover {

                cursor: pointer;
                opacity: 0.7;
            }
        }
    }

    div.item__content {

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 1rem 2rem 2rem;

        p {

            font-weight: bold;
            font-size: 20px;

            text-align: center;
        }

        span {

            margin: 1rem 0;

            font-weight: 700;
            font-size: 22px;

            color: ${({ theme }) => theme.colors.red};
        }

        ul {

            margin: 0;

            display: flex;
            flex-direction: column;
            align-items: center;

            li {

                list-style: none;
                margin: 0.5rem 0;
            }
        }
    }
`;