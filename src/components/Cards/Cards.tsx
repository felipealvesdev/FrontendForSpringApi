/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    height: 70rem;
    width: 50rem;
    background-color: #19212b;
    font-size: 5rem;
    border: none;
    border-radius: 1rem;
    
    box-shadow: 0px 0px 5px 0.1px #ffd000;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        h1 {
            padding: 3rem 10rem;
            color: #fff;
            font-size: 3rem;
            text-align: center;
        }

        h2 {
            padding: 0rem 10rem;
            color: #fff;
            font-size: 2rem;
        }

        input {
            padding: 1.5rem 2rem;
            border-radius: 1rem;
            border: none;
            height: 5rem;
            width: 30rem;
            transition: all 300ms ease-in-out;
        }

        input:hover {
            background-color: #cecece;
        }

        input::placeholder {
            font-size: 1.5rem;
            color: #ffd000;
            opacity: 1;
            transition: all 500ms ease-in-out;
        }

        input:focus::placeholder {
            padding: 0.5rem 1rem;
            position: absolute;
            color: #19212b;
            top: 0;
            left: 0;
            opacity: 0.5;
            transition: all 1000ms ease-in-out;
        }
        

        button {
            background-color: #ffd000;
            border: none;
            border-radius: 1rem;
            padding: 1.5rem 5rem;
            transition: all 300ms ease-in-out;

            &:hover {
                cursor: pointer;
                transform: scale(1.1);
                color: #19212b;
                background-color: #fff;
                box-shadow: 0px 0px 5px 1px #fff;
            }
        }
    }
`