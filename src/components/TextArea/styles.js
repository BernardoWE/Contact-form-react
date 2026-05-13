import styled from "styled-components"
import { colors } from "../../pages/Home/styles"

export const TextArea = styled.textarea`
        padding: 1rem;
        /* padding-block: 2rem; */
        outline: none;
        border: 1px solid;
        border-radius: 10px;
        margin-top: 0.5rem;
        /* border: none; */
        /* border: 1px solid #ccc; */
        /* transition: outline .5s ease; */
         &:hover{
            outline: 1px solid ${colors.mediumGreen};
        }
        &:focus{
            outline: 1px solid ${colors.mediumGreen};
        }
        outline: ${props => props.$submitted && props.value === "" ? "1px solid red" : null};
        
    resize: none;

`
