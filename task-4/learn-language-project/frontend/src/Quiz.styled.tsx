import styled from "styled-components";

export const ContainerQuiz = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const QuizButton = styled.button`
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
export const QuizWord = styled.p`
  color: #4256d0;
  margin: 15px;
  font-size: 22px;
  font-weight: 700;
`;
export const Question = styled.input`
  width: 265px;
  height: 43px;
  background-color: #4256d0;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  border-radius: 8px;
  border: 0;
  margin: 0 0 10px 0;
`;
export const Answer = styled.input`
  width: 250px;
  height: 38px;
  background-color: #ffffff;
  color: #5c73db;
  border-radius: 12px;
  border: 1px solid #5c73db;
  font-size: 16px;
  margin: 10px;
  padding-left: 10px;
`;
export const Check = styled.button`
  width: 265px;
  height: 43px;
  background-color: #ffffff;
  color: #5c73db;
  text-align: center;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid #5c73db;
  margin: 10px;
`;
export const QuizMessage = styled.div`
  position: fixed;
  justify-self: center;
  align-self: end;
  padding: 10px;
`;
export const Success = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #166534;
  background-color: #dcfce7;
  text-align: center;
  width: 105px;
  height: 43px;
  border-radius: 10px;
  font-size: 16px;
`;
export const Close = styled.button`
  cursor: pointer;
  float: right;
  margin-left: 30px;
  color: #dc2626;
  background: none;
  border: none;
  outline: none;
`;
export const Error = styled.p`
  display: flex;
  color: #ffffff;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  width: 292px;
  height: 43px;
  border-radius: 10px;
  font-size: 16px;
`;
