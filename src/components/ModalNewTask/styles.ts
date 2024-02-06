import styled from "styled-components";


export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10vh auto;
    height: 65vh;
    width: 65vh;
    background: #FFFF;
    border-radius: 15px;
`

export const ModalHeader = styled.div`
    display: flex;
    border-radius: 10px 10px 0 0;
    justify-content: space-between;
    height: 75px;
    background-color: #D6D6D6;
    padding: 20px;

    h1{
        margin: auto 0;
    }

    button{
        height: 40px;
        width: 40px;
        border-radius: 20px;
        margin: auto 0;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: none;

        &:hover{
            transition: 0.5s;
            background-color: black; /* Adapte a cor de fundo do hover conforme necessário */
            color: #ffffff;
        }
    }
`;

export const ModalInputsTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    max-width: 90%;

    :nth-child(3n){
        text-align: end;
    }
`;

export const TaskTitle = styled.span`
    font-weight: bold;
    font-size: 18px;
    color: #333; 
    margin-right: 10px;
    margin-bottom: 20px;
`

export const TaskInput = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc; 
    border-radius: 4px; 
    outline: none;
`;

export const ModalInputDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    max-width: 90%;

    :nth-child(3n){
        text-align: end;
    }
`;


export const TaskInputDescription = styled.textarea`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc; 
    border-radius: 4px; 
    outline: none;
    line-break: strict;
`;



export const ModalInputDate = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px auto;
    height: 120px;
    width: 100%;
    color: black;
`;

export const ButtonSaveTask = styled.button`
    height: 50px;
    width: 60%;
    border-radius: 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: none; 
    margin: auto;
    background-color: black;
    color: #ffffff;

    &:hover{
        transition: 0.5s;
        background-color: #D6D6D6;
        color: black;
    }
`;


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
