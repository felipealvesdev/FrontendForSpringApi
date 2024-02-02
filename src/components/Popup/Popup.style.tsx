import styled from "styled-components";
import PopupStruct from "./PopupStruct";

export const Popup = styled(PopupStruct)<{$inputColor: string}>`


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;

    background-color: ${props => props.$inputColor ? `${props.$inputColor}` : "white" };
    width: 20rem;
    height: 10rem;

    border: none;
    border-radius: 1rem;
`