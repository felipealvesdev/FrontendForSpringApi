import styled from "styled-components";
import ProductCardStruct from "./ProductCardStruct";

export const ProductCard = styled(ProductCardStruct)`

    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem 6rem;
    background-color: #19212b;
    color: #ffd000;
    border-radius: 2.5rem;
    width: 60rem;

    & .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10rem;
        width: 100%;

        & button {
            margin-top: 2rem;
            border: none;
            padding: 1rem 2rem;
            background-color: brown;
            color: #fff;
            transition: all 300ms ease-in-out;
            border-radius: 1rem;

            &:hover {
                transform: scale(1.1);
                cursor: pointer;
                color: brown;
                background-color: #fff;
            }
        }

        & .previousPageBtn {
            background-color: #0084ff;

            &:hover {
                color: #0084ff;
            }
        }
        & .updateBtn {
            background-color: #ffd000;

            &:hover {
                color: #ffd000;
            }
        }
        & .deleteBtn {
            background-color: #ff0000;

            &:hover {
                color: #ff0000;
            }
        }
    }

`