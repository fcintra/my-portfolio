import { useState } from "react";
import { DataInput } from "./Data";
import { ButtonSaveTask, ModalContainer, ModalContent, ModalHeader, ModalInputDate, ModalInputDescription, ModalInputsTitle, TaskInput, TaskInputDescription, TaskTitle } from "./styles";

interface ModalProps{
    visible: boolean;
    onClose: () => void;
}

export function ModalNewTask({visible, onClose}: ModalProps){

    if(!visible) null

    const [inputTitleValue, setInputTitleValue] = useState('');
    const [inputDescriptionValue, setInputDescriptionValue] = useState('');


    const handleInputTitleChange = (e: any) => {
        const value = e.target.value;
        setInputTitleValue(value);
    };

    const handleInputDescriptionChange = (e: any) => {
        const value = e.target.value;
        setInputDescriptionValue(value);
    };
    
    return (
        <ModalContainer>
            <ModalContent>
                <ModalHeader>
                    <h1>Planejar uma nova tarefa</h1>

                    <button onClick={onClose}>X</button>
                </ModalHeader>
                
                <ModalInputsTitle>
                    <TaskTitle>Titulo</TaskTitle>
                    <TaskInput minLength={1} maxLength={50} onChange={handleInputTitleChange}/>
                    <span>{inputTitleValue.length}/50</span>
                </ModalInputsTitle>

                <ModalInputDescription>
                    <TaskTitle>Descrição</TaskTitle>
                    <TaskInputDescription minLength={1} maxLength={250} onChange={handleInputDescriptionChange} rows={5}/>
                    <span>{inputDescriptionValue.length}/250</span>
                </ModalInputDescription>

                <ModalInputDate>
                    <DataInput title="Data limite para a finalização" />
                </ModalInputDate>
                
                <ButtonSaveTask>
                    Salvar
                </ButtonSaveTask>
            </ModalContent>
        </ModalContainer>
    )
}