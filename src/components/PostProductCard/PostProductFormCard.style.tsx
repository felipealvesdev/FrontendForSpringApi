import styled from "styled-components";
import PostProductFormCardStruct from "./PostProductFormCardStruct";

export const PostProductFormCard = styled(PostProductFormCardStruct)`


    font-size: 3rem;
    height: 40rem;
    background-color: darkcyan;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;


    & .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
`