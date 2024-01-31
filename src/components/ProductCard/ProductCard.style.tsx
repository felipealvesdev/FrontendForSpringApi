import styled from "styled-components";
import ProductCardStruct from "./ProductCardStruct";

export const ProductCard = styled(ProductCardStruct)`

    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem 6rem;
    background-color: crimson;
    width: 100%;

    & .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10rem;
        width: 100%;

        & button {
            border: none;
            padding: 1rem 2rem;
            background-color: brown;
            color: #fff;
            transition: all 300ms ease-in-out;

            &:hover {
                transform: scale(1.1);
                cursor: pointer;
                color: brown;
                background-color: #fff;
            }
        }
    }

`