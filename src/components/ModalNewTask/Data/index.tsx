import { DatePicker } from "@mui/x-date-pickers";
import { ContainerInputs } from "./style";

interface InputDataInputProps{
    title: string,
}

export function DataInput({title}: InputDataInputProps){

    return (
        <ContainerInputs>
            <span>{title}</span>
            <DatePicker />
        </ContainerInputs>
    )
}