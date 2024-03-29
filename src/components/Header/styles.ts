import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    height: 25vh;
    width: 95%;
    background: #E6E6E6;
    justify-content: space-between;
    padding: 50px;
    box-shadow: 10px 5px 5px #BDBDBD;
`

export const LogoSpace = styled.div`
    height: 15vh;
    width: 15vh;
    border-radius: 7.5vh;
    background: white;
    margin: auto 0;
    color: black;
    padding: 50px;
`



export const ButtonCreateTask = styled.button`
    text-align: center;
    height: 8vh;
    width: 8vh;
    border-radius: 7.5vh;
    background: white;
    margin: auto 0;
    color: black;
    font-size: 36px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: none;

    &:hover{
        transition: 0.5s;
        background-color: black; /* Adapte a cor de fundo do hover conforme necessário */
        color: #ffffff;
    }
`