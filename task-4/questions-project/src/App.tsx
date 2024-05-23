import React, { useState } from "react";

import FinalPage from "./FinalPage";
import { QUESTIONS } from "./utils/constant";
import {
  QuestionHeader,
  MainContainer,
  Container,
  Answer,
  AnswerText,
  QuestionImage,
} from "./App.styled";

const CORRECT_ANSWER_MESSAGE = "Вы ответили верно!";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerAStyle, setAnswerAStyle] = useState("");
  const [answerBStyle, setAnswerBStyle] = useState("");
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [isFinalPage, setIsFinalPage] = useState(false);

  function onAnswerClick(answer: string) {
    const correctAnswer = QUESTIONS[questionIndex].correct;
    if (answer === correctAnswer) {
      onRightAnswerClick(answer);
    } else {
      onWrongAnswerClick(answer);
    }
  }

  function onRightAnswerClick(answer: string) {
    if (answer === "A") {
      setTextA(CORRECT_ANSWER_MESSAGE);
      setAnswerAStyle("#E3FFEE");
    }
    if (answer === "B") {
      setTextB(CORRECT_ANSWER_MESSAGE);
      setAnswerBStyle("#E3FFEE");
    }
    setTimeout(() => {
      if (answer === "A") {
        setTextA("");
        setAnswerAStyle("");
      }
      if (answer === "B") {
        setTextB("");
        setAnswerBStyle("");
      }
      if (questionIndex !== QUESTIONS.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setIsFinalPage(true);
      }
    }, 3000);
  }

  function onWrongAnswerClick(answer: string) {
    if (answer === "A") {
      setAnswerAStyle("#FFEAE3");
    } else {
      setAnswerBStyle("#FFEAE3");
    }
    setTimeout(() => {
      setAnswerAStyle("");
      setAnswerBStyle("");
    }, 3000);
    alert("Вы ошиблись, попробуйте ещё раз");
  }

  if (isFinalPage) {
    return <FinalPage />;
  }

  return (
    <div className="App">
      <QuestionHeader>{QUESTIONS[questionIndex].question}</QuestionHeader>
      <MainContainer>
        <Container>
          <Answer color={answerAStyle} onClick={() => onAnswerClick("A")}>
            <QuestionImage src={QUESTIONS[questionIndex].answer.a.image} />
            <h2>{QUESTIONS[questionIndex].answer.a.label}</h2>
            <AnswerText>{textA}</AnswerText>
          </Answer>
          <Answer color={answerBStyle} onClick={() => onAnswerClick("B")}>
            <QuestionImage src={QUESTIONS[questionIndex].answer.b.image} />
            <h2>{QUESTIONS[questionIndex].answer.b.label}</h2>
            <AnswerText>{textB}</AnswerText>
          </Answer>
        </Container>
      </MainContainer>
    </div>
  );
}

export default App;
