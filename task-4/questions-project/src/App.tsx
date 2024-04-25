import React, { useState, useEffect } from "react";
import FinalPage from "./FinalPage";
import Styled from 'styled-components';

const QuestionHeader = Styled.h1`
  text-align: center;
  font-size: 26px;
  margin: 10px;
  font-weight: bold;
  font-family: "News Cycle";
`;

const MainContainer = Styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
`;

const Container = Styled.div`
  display: flex;
`;

const Answer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 600px;
  background-color: ${props => props.color || "#f0efef"};
    border: 1px solid white;
`;

const AnswerText = Styled.p`
  font-size: 20px;
  font-weight: bold;
  justify-self: flex-end;
`;

const QuestionImage = Styled.img`
  margin: 70px 0 30px 0;
  object-fit: cover;
  width: 330px;
  height: 250px;
`;
const QUESTIONS = [
  {
    question: "Выберите собаку?",
    answer: {
      a: {
        label: "",
        image: "images/blackpuppy.jpg",
      },
      b: {
        label: "",
        image: "images/whitepuppy.jpg",
      },
    },
    correct: "A",
  },
  {
    question: "Чем обработать собаку от клещей?",
    answer: {
      a: {
        label: "А) Таблетки Бравекто ",
        image: "images/bravecto.jpg",
      },
      b: {
        label: "Б) Капли Барс",
        image: "images/bars.jpg",
      },
    },
    correct: "A",
  },
  {
    question: "Каким кормом кормить собаку?",
    answer: {
      a: {
        label: "А) Педигри",
        image: "images/pedigree.jpg",
      },
      b: {
        label: "Б) Грандорф",
        image: "images/grandorf.jpg",
      },
    },
    correct: "B",
  },

];

const CORRECT_ANSWER_MESSAGE = "Вы ответили верно!";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(
    QUESTIONS[questionIndex]["correct"]
  );
  const [answerAStyle, setAnswerAStyle] = useState("");
  const [answerBStyle, setAnswerBStyle] = useState("");
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [isFinalPage, setIsFinalPage] = useState(false);
  
  useEffect(() => {
    setCorrectAnswer(QUESTIONS[questionIndex]["correct"]);
  }, [questionIndex]);

  function onAnswerClick(answer: string) {
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
      <QuestionHeader>{QUESTIONS[questionIndex]["question"]}</QuestionHeader>
      <MainContainer>
        <Container>
          <Answer color={answerAStyle} onClick={() => onAnswerClick("A")}>
            <QuestionImage src={QUESTIONS[questionIndex]["answer"].a.image} />
            <h2>{QUESTIONS[questionIndex]["answer"].a.label}</h2>
            <AnswerText>{textA}</AnswerText>
          </Answer>
          <Answer color={answerBStyle} onClick={() => onAnswerClick("B")}>
            <QuestionImage src={QUESTIONS[questionIndex]["answer"].b.image} />
            <h2>{QUESTIONS[questionIndex]["answer"].b.label}</h2>
            <AnswerText>{textB}</AnswerText>
          </Answer>
        </Container>
      </MainContainer>
    </div>
  );
}

export default App;
