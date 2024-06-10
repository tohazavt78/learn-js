import styled from "styled-components";

export const ContainerDictionary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Message = styled.p`
  color: #dc2626;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  width: 89px;
  margin-bottom: 10px;
`;
export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 38px;
  background-color: #4763e4;
  border: 0;
  border-radius: 10px;
  color: #ffffff;
  font-size: 15px;
`;
export const TableContainer = styled.div`
  height: 100%;
  width: 800px;
  margin-top: 150px;
`;
export const Table = styled.table`
  width: 100%;
`;
export const Tbody = styled.tbody`
  width: 100%;
`;
export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Th = styled.th`
  color: #a1a1aa;
  font-size: 16px;
  width: 33%;
  height: 19px;
  margin: 0 0 20px 0;
`;
export const Td = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 34%;
  height: 34px;
  margin: 3px 0;
  border-bottom: solid #f4f4f5;
`;
export const TdButton = styled.button`
  width: 100px;
  height: 26px;
  border-radius: 10px;
  background-color: #dc2626;
  color: white;
  border: 0;
`;
