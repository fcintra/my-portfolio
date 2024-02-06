'use client'
import { ContentContainer, KanbanColumn, KanbanTask } from "./style";

export function Content(){
    return (
        <ContentContainer>
            <KanbanColumn>
                <h2>Tarefas expirando</h2>
                <KanbanTask>Tarefa 1</KanbanTask>
                <KanbanTask>Tarefa 2</KanbanTask>
            </KanbanColumn>

            <KanbanColumn>
                <h2>Em Andamento</h2>
                <KanbanTask>Tarefa 3</KanbanTask>
            </KanbanColumn>

            <KanbanColumn>
                <h2>Concluído</h2>
                <KanbanTask>Tarefa 4</KanbanTask>
                <KanbanTask>Tarefa 5</KanbanTask>
            </KanbanColumn>
        </ContentContainer>
    )
}