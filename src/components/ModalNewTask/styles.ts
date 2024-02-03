import styled from "styled-components";


export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5)
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
    }
`;