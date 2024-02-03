import { ModalContainer, ModalContent, ModalHeader } from "./styles";

interface ModalProps{
    visible: boolean;
    onClose: () => void;
}

export function ModalNewTask({visible, onClose}: ModalProps){

    if(!visible) null
    
    return (
        <ModalContainer>
            <ModalContent>
                <ModalHeader>
                    <h1>Planejar uma nova tarefa</h1>

                    <button onClick={onClose}>X</button>
                </ModalHeader>
                
            </ModalContent>
        </ModalContainer>
    )
}