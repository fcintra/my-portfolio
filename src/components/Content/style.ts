import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 75vh;
    width: 95%;
    background: #FAFAFA;
    box-shadow: 10px 5px 5px #BDBDBD;
`;


export const KanbanColumn = styled.div`
  flex: 1; 
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
`;

export const KanbanTask = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 8px;
`;