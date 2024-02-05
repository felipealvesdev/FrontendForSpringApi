import styled from "styled-components";
import PostProductFormCardStruct from "./PostProductFormCardStruct";

export const PostProductFormCard = styled(PostProductFormCardStruct)`

    font-size: 3rem;
    height: 40rem;
    background-color: #ffd000;
    color: #19212b;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 6rem;
    width: 60rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 2.5rem;

    & .popup {
        position: relative;
        top: -30rem;
        

    }

    & .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        label {
            color: #19212b;
        }

        input {
            padding: 1.5rem 2rem;
            border-radius: 1rem;
            border: none;
            height: 3rem;
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
            background-color: #3cff22;
            border: none;
            border-radius: 1rem;
            padding: 1.5rem 5rem;
            transition: all 300ms ease-in-out;

            &:hover {
                cursor: pointer;
                transform: scale(1.1);
                color: #3cff22;
                background-color: #fff;
                box-shadow: 0px 0px 5px 1px #fff;
            }
        }

    }
`