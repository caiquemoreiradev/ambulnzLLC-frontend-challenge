import styled from "styled-components";

export const CartContainer = styled.div`

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: end;

    width: 100%;
    height: 100vh;

    background-color: rgba(30, 30, 30, 0.5);

    div.cart__content {

        display: flex;
        flex-direction: column;

        background-color: ${({ theme }) => theme.colors.shape};
        width: 30%;

        padding: 3rem;

        div.order__header {

            display: flex;
            align-items: center;
            justify-content: space-between;
            
            margin-bottom: 2rem;
            
            h3 {

                font-size: 2rem;
            }

            svg {

                transition: all 0.2s;

                &:hover {

                    cursor: pointer;
                    opacity: 0.7;
                }
            }

        }

        div.items__content {

            flex: 1;

            span {

                font-size: 1.2rem;

                text-align: center;
            }
        }

      div.order__footer {

        p {

            font-weight: bold;
            font-size: 1.5rem;
        }

        button.finish__order {

            width: 100%;

            padding: 1rem 2rem;

            border: none;
            border-radius: 1rem;

            margin-top: 2rem;

            background-color: ${({ theme }) => theme.colors.green};
            color: ${({ theme }) => theme.colors.shape};

            font-size: 1.2rem;

            transition: all 0.2s;

            &:hover {

                opacity: 0.7;
                cursor: pointer;
            }

            &:disabled {

                background-color: #ddd;

                &:hover {

                    cursor: not-allowed;
                    opacity: 1;
                }
            }
        }
      }
    }
`;