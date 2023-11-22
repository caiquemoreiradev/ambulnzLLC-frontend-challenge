import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 5rem;

    div.logo {

        img {

            width: 5rem;
        }
    }

    div.order__basket {

        svg {

            transition: all 0.2s;

            &:hover {

                cursor: pointer;
                opacity: 0.7;
            }
        }

        div.quantity__order {

            background-color: ${({ theme }) => theme.colors.red};
            
            width: 10px;
            height: 10px;

            border-radius: 50%;

            margin-top: -30px;
            margin-left: 25px;

            z-index: 9999;
        }
    }
`;