import styled, {css}from "styled-components";
// import DivQueryInput from "../../components/QueryInput/index"

export const colors = {
    lightGreen: 'hsl(148, 38%, 91%)',
    white: '#fff',
    mediumGreen: 'hsl(169, 82%, 27%)',
    red:'hsl(0, 66%, 54%)',
    mediumGray:'hsl(186, 15%, 59%)',
    darkerGray:'hsl(187, 24%, 22%)'
}
export const InputSharedStyle = css`
    padding: 1rem;
    /* padding-block: 2rem; */
    outline: none;
    border: 1px solid;
    border-radius: 10px;
    margin-top: 0.5rem;
    
     &:hover{
        outline: 1px solid ${colors.mediumGreen};
    }
    &:focus{
        outline: 1px solid ${colors.mediumGreen};
    }
    

`

export const ContainerSharedStyle = `
    display: flex;
    flex-direction: column;
`

export const Background = styled.div`
    background-color: ${colors.lightGreen};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    /* min-width: 100vw; */
`
export const Form = styled.form`
    background-color: ${colors.white};
    padding: 2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: clamp(320px, 50vw, 700px);
    .span-error{
            color: red;
            /* margin-bottom: 220px; */
            margin-top: 5px;
            
        }
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
`
export const ContainerInputsName = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    div{
        display: flex;
        flex-direction: column;
        flex: 1 1 ;
        
    }

`
export const ContainerInputRadio = styled.div`
   

.radio-option.error{
   outline: 1px solid red;
}
    .radio-option{
        ${InputSharedStyle}
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        input{
            cursor: pointer;
        }
        
        
    };
 .span-error{
   /* grid-column: 1 / -1; */
   display: block;
}
    section{

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
         gap: 10px;
        
    }

  
`



export const ContainerInputEmail = styled.div`
div{
    ${ContainerSharedStyle};
}
    

`

export const Span = styled.span`
    color: ${colors.mediumGreen};
`


export const ContainerInputTextArea = styled.div`
    div{
        ${ContainerSharedStyle};
    }
    
`

export const ContainerInputCheckbox = styled.div`
    ${ContainerSharedStyle};
    /* flex-direction: row; */
    /* justify-content: center; */
    /* gap: 10px; */
    div{
        display: flex;
        gap: 10px;
    }
    label{
        cursor: pointer ;
    }
    input:checked{
        accent-color: hsl(169, 82%, 27%);
    }
`
export const Button = styled.button`

    padding: .8rem;
    border-radius: 10px;
    border: none;
    background-color: ${colors.mediumGreen};
    color: ${colors.white};
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: ${colors.darkerGray};
    }
    &:active{
        transform: scale(0.98);
        background-color: ${colors.darkerGray};
    }
`

export const Toast = styled.div`
    position: fixed;
    background-color: ${colors.darkerGray};
    padding: 1rem;
    color: ${colors.white};
    border-radius: 8px;
    top: 20px;
    right: 20px;
    header{
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }
`