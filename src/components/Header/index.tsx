'use client'
import { useState } from "react";
import { ModalNewTask } from "../ModalNewTask";
import { ButtonCreateTask, HeaderContainer, LogoSpace } from "./styles";

export function Header(){
    const [modal, setModalOpen] = useState<boolean>(false)

    function handleOpenModal(): void {
        setModalOpen(true);
    }

    function handleCloseModal(): void {
        setModalOpen(false);
    }

    return (
        <HeaderContainer>
            {/**Logo */}
            <LogoSpace>
            ToDo
            </LogoSpace>

            {/** Button create task */}
            <ButtonCreateTask onClick={handleOpenModal}>
                +
            </ButtonCreateTask>
            
            {modal && <ModalNewTask visible={modal} onClose={handleCloseModal}/>}
        </HeaderContainer>
    );
}