'use client'
import { ButtonCreateTask, HeaderContainer, LogoSpace } from "./styles";

export function Header(){
    return (
        <HeaderContainer>
            {/**Logo */}
            <LogoSpace>
            ToDo
            </LogoSpace>

            {/** Button create task */}
            <ButtonCreateTask>
                +
            </ButtonCreateTask>
        </HeaderContainer>
    );
}