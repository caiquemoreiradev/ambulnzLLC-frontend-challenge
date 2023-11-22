import styled from "styled-components";

export const ItemContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    margin: 2rem 0;

    div.left {

        display: flex;
        align-items: center;

        img {

            width: 10rem;
            height: 7rem;

            border-radius: 1rem;
        }

        div.pizza__info {

            display: flex; 
            flex-direction: column;

            margin: 0 1rem;

            gap: 0.5rem;

            p {

                font-weight: bold;
                font-size: 1.5rem;
            }
        }
    }

    svg {

        transition: all 0.2s;

        &:hover {

            cursor: pointer;
            opacity: 0.7;
        }
    }
`;