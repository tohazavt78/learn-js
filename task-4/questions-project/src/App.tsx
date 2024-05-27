import React, { useEffect, useState } from "react";

import FinalPage from "./FinalPage";
import { QUESTIONS } from "./utils/constant";
import { RED_COLOR } from "./utils/constant";
import { GREEN_COLOR } from "./utils/constant";
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
  const [clickedAnswer, setClickedAnswer] = useState<string | null>(null);
  const [isFinalPage, setIsFinalPage] = useState(false);

  useEffect(() => {
    if (clickedAnswer === null) return;

    const correctAnswer = QUESTIONS[questionIndex].correct;
    if (clickedAnswer === correctAnswer) {
      setTimeout(() => {
        if (questionIndex !== QUESTIONS.length - 1) {
          setQuestionIndex(questionIndex + 1);
        } else {
          setIsFinalPage(true);
        }
        setClickedAnswer(null);
      }, 3000);
    } else {
      alert("Вы ошиблись, попробуйте ещё раз");
      setTimeout(() => {
        setClickedAnswer(null);
      }, 3000);
    }
  }, [clickedAnswer]);

  if (isFinalPage) {
    return <FinalPage />;
  }

  return (
    <div className="App">
      <QuestionHeader>{QUESTIONS[questionIndex].question}</QuestionHeader>
      <MainContainer>
        <Container>
          <Answer
            color={
              clickedAnswer === "A"
                ? clickedAnswer === QUESTIONS[questionIndex].correct
                  ? GREEN_COLOR
                  : RED_COLOR
                : ""
            }
            onClick={() => setClickedAnswer("A")}
          >
            <QuestionImage src={QUESTIONS[questionIndex].answer.a.image} />
            <h2>{QUESTIONS[questionIndex].answer.a.label}</h2>
            <AnswerText>
              {clickedAnswer === "A" &&
              clickedAnswer === QUESTIONS[questionIndex].correct
                ? CORRECT_ANSWER_MESSAGE
                : ""}
            </AnswerText>
          </Answer>
          <Answer
            color={
              clickedAnswer === "B"
                ? clickedAnswer === QUESTIONS[questionIndex].correct
                  ? GREEN_COLOR
                  : RED_COLOR
                : ""
            }
            onClick={() => setClickedAnswer("B")}
          >
            <QuestionImage src={QUESTIONS[questionIndex].answer.b.image} />
            <h2>{QUESTIONS[questionIndex].answer.b.label}</h2>
            <AnswerText>
              {clickedAnswer === "B" &&
              clickedAnswer === QUESTIONS[questionIndex].correct
                ? CORRECT_ANSWER_MESSAGE
                : ""}
            </AnswerText>
          </Answer>
        </Container>
      </MainContainer>
    </div>
  );
}
export default App;
