import styled from "styled-components";

export const Container = styled.div`

    width: 100%;

    div.pizzas__grid {

        max-width: 1400px;
        margin: 5rem auto;

        display: grid;
        justify-content: space-evenly;
        justify-items: center;
        align-content: space-evenly;
        grid-template-columns: repeat(4, 1fr);
    }
`;