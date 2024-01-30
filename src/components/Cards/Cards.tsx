/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    height: 30rem;
    width: 60rem;
    background-color: brown;
    font-size: 5rem;
    border: none;
    border-radius: 1rem;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        label {
            color: #fff;
        }

        button {
            background-color: #0099ff;
            border: none;
            border-radius: 1rem;
            padding: 1rem 2rem;
            transition: all 300ms ease-in-out;

            &:hover {
                cursor: pointer;
                transform: scale(1.1);
                color: #0099ff;
                background-color: #fff;
            }
        }
    }
`