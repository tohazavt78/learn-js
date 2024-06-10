import { useState } from "react";
import axios from "axios";

import {
  ContainerQuiz,
  QuizButton,
  QuizWord,
  Question,
  Answer,
  Check,
  QuizMessage,
  Success,
  Close,
  Error,
} from "./Quiz.styled";

interface Word {
  word: string;
  translation: string;
}

export const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [message, setMessage] = useState("");
  const [quizWords, setQuizWords] = useState<Word[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startQuiz = async () => {
    setIsQuizStarted(true);
    const response = await axios.get("/api/words");
    const shuffledWords = response.data.sort(() => 0.5 - Math.random());
    setQuizWords(shuffledWords.slice(0, 20));
    setCurrentIndex(0);
  };

  const checkAnswer = () => {
    if (
      quizWords[currentIndex] &&
      userAnswer === quizWords[currentIndex].translation
    ) {
      setMessage("Ура!");
      setIsCorrect(true);
      setTimeout(() => {
        setMessage("");
        if (currentIndex + 1 < quizWords.length) {
          setCurrentIndex(currentIndex + 1);
          setUserAnswer("");
        } else {
          alert("Тест завершён");
          setIsQuizStarted(false);
        }
      }, 3000);
    } else {
      setMessage("Неверно, попробуйте снова");
      setIsCorrect(false);
    }
  };
  const closeMessage = () => {
    setMessage("");
  };

  return (
    <ContainerQuiz>
      {!isQuizStarted ? (
        <QuizButton onClick={startQuiz}>Начать тест</QuizButton>
      ) : (
        <>
          <QuizWord>Слово</QuizWord>
          <Question
            type="text"
            readOnly
            value={quizWords[currentIndex] ?.word || ""}
          />
          <Answer
            type="text"
            onChange={(e) => setUserAnswer(e.target.value)}
            value={userAnswer}
            placeholder="Введите перевод"
          />
          <Check onClick={checkAnswer}>Проверить</Check>
          {message && (
            <QuizMessage>
              {isCorrect ? (
                <Success>{message}</Success>
              ) : (
                <Error>
                  {message} <Close onClick={closeMessage}>X</Close>
                </Error>
              )}
            </QuizMessage>
          )}
        </>
      )}
    </ContainerQuiz>
  );
};
