import styled from "styled-components"
import { colors } from "../../pages/Home/styles"

export const QueryLabel = styled.label`
     &:hover{
        border: 1px solid ${colors.mediumGreen};
    }
    
    padding: 3rem;
    border: ${props => props.$submitted && !props.$checked ? "1px solid red" : null};
    border-radius: 10px;

`