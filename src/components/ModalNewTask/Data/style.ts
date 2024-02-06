import styled from "styled-components";

export const ContainerInputs= styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    span{
        text-align: center;
        margin: 10px;
    }
`

export const InputForDate = styled.input`
    height: 30px;
    width: 75px;
    color: black;
    margin-top: 10px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc; 
    border-radius: 4px; 
    outline: none;

    appearance: textfield;
    -moz-appearance: textfield;
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;