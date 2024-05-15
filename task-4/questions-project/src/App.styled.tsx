import styled from "styled-components";

export const QuestionHeader = styled.h1`
  text-align: center;
  font-size: 26px;
  margin: 10px;
  font-weight: bold;
  font-family: "News Cycle";
`;

export const MainContainer = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
`;

type AnswerProps = {
  color?: string;
};

export const Answer = styled.div<AnswerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 600px;
  background-color: ${(props) => props.color || "#f0efef"};
  border: 1px solid white;
`;

export const AnswerText = styled.p`
  font-size: 20px;
  font-weight: bold;
  justify-self: flex-end;
`;

export const QuestionImage = styled.img`
  margin: 70px 0 30px 0;
  object-fit: cover;
  width: 330px;
  height: 250px;
`;
