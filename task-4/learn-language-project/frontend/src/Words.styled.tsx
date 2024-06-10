import styled from "styled-components";

export const ContainerWords = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewWords = styled.div`
  margin: 15px;
`;

export const NewWordsP = styled.p`
  font-size: 16px;
  margin: 5px;
`;

export const NewWordsInput = styled.input`
  width: 400px;
  height: 38px;
  border-radius: 10px;
  border: solid 1px #5c73db;
`;

export const Confirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 38px;
  background-color: #4763e4;
  border: 0;
  border-radius: 10px;
  margin: 25px;
`;

export const ConfirmP = styled.p`
  color: #ffffff;
  font-size: 18px;
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  justify-self: center;
  align-self: end;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;
