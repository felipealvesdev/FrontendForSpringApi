import styled from "styled-components";
import ProductStruct from "./ProductStruct";

export const Product = styled(ProductStruct)`

    font-size: 3rem;

    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100%;


    background: linear-gradient(91deg, #19212b, #ffffff, #ffd000);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 7s ease infinite;
    -moz-animation: AnimationName 7s ease infinite;
    animation: AnimationName 7s ease infinite;

    @-webkit-keyframes AnimationName {
    0%{background-position:50% 0%}
    50%{background-position:50% 100%}
    100%{background-position:50% 0%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:50% 0%}
        50%{background-position:50% 100%}
        100%{background-position:50% 0%}
    }
    @keyframes AnimationName {
        0%{background-position:50% 0%}
        50%{background-position:50% 100%}
        100%{background-position:50% 0%}
    }

    
    & .productInfo {
        margin-top: 5rem;
    }
`
