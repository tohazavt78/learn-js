import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #4256d0;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  margin: 25px 40px;
  font-size: 20px;
  font-weight: 400;
  width: 190px;
  text-align: center;
  text-decoration: none; 
  }
`;
const ContainerWords = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewWords = styled.div`
  margin: 15px;
`;

const NewWordsP = styled.p`
  font-size: 16px;
  margin: 5px;
`;

const NewWordsInput = styled.input`
  width: 400px;
  height: 38px;
  border-radius: 10px;
  border: solid 1px #5c73db;
`;

const Confirm = styled.button`
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

const ConfirmP = styled.p`
  color: #ffffff;
  font-size: 18px;
`;

const ContainerDictionary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.p`
  color: #dc2626;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  width: 89px;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
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
const TableContainer = styled.div`
  height: 100%;
  width: 800px;
  margin-top: 150px;
`;

const Table = styled.table`
  width: 100%;
`;

const Tbody = styled.tbody`
  width: 100%;
`;

const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Th = styled.th`
  color: #a1a1aa;
  font-size: 16px;
  width: 33%;
  height: 19px;
  margin: 0 0 20px 0;
`;

const Td = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 34%;
  height: 34px;
  margin: 3px 0;
  border-bottom: solid #f4f4f5;
`;

const TdButton = styled.button`
  width: 100px;
  height: 26px;
  border-radius: 10px;
  background-color: #dc2626;
  color: white;
  border: 0;
`;

const ContainerQuiz = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const QuizButton = styled.button`
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
const QuizWord = styled.p`
  color: #4256d0;
  margin: 15px;
  font-size: 22px;
  font-weight: 700;
`;
const Question = styled.input`
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
const Answer = styled.input`
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
const Check = styled.button`
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
const QuizMessage = styled.div`
  position: fixed;
  justify-self: center;
  align-self: end;
  padding: 10px;
`;
const Toast = styled.div`
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
const Success = styled.p`
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
const Close = styled.button`
  cursor: pointer;
  float: right;
  margin-left: 30px;
  color: #dc2626;
  background: none;
  border: none;
  outline: none;
`;
const Error = styled.p`
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

interface Word {
  word: string;
  translation: string;
}

const Words = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    axios.get("/api/words").then((response) => {
      setWords(response.data);
    });
  }, []);

  const showToast = (message: React.SetStateAction<string>) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const addWord = () => {
    if (word === "" || translation === "") {
      showToast("Пожалуйста, введите слово и его перевод");
      return;
    }

    axios.post("/api/words", { word, translation }).then((response) => {
      setWords([...words, response.data]);
      setWord("");
      setTranslation("");
      showToast("Слово добавлено");
    });
  };

  return (
    <ContainerWords>
      <NewWords>
        <NewWordsP>Слово</NewWordsP>
        <NewWordsInput
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
      </NewWords>
      <NewWords>
        <NewWordsP>Перевод</NewWordsP>
        <NewWordsInput
          type="text"
          onChange={(e) => setTranslation(e.target.value)}
          value={translation}
        />
      </NewWords>
      <Confirm onClick={addWord}>
        <ConfirmP>Добавить</ConfirmP>
      </Confirm>
      {toastMessage && <Toast>{toastMessage}</Toast>}
    </ContainerWords>
  );
};

const Dictionary = () => {
  const [words, setWords] = useState<Word[]>([]);
  const messageRef = useRef<HTMLDivElement | null>(null);
  const tableContainerRef = useRef<HTMLDivElement | null>(null);

  const deleteWord = (wordToDelete: string) => {
    axios
      .delete(`/api/words/${wordToDelete}`)
      .then(() => {
        setWords(words.filter((word) => word.word !== wordToDelete));
      })
      .catch((error) => console.error("Ошибка:", error));
  };

  useEffect(() => {
    axios.get("/api/words").then((response) => {
      setWords(response.data);
    });
  }, []);

  useEffect(() => {
    if (words.length === 0) {
      if (messageRef.current) messageRef.current.style.display = "flex";
      if (tableContainerRef.current)
        tableContainerRef.current.style.display = "none";
    } else {
      if (messageRef.current) messageRef.current.style.display = "none";
      if (tableContainerRef.current)
        tableContainerRef.current.style.display = "block";
    }
  }, [words]);

  return (
    <ContainerDictionary>
      {words.length === 0 ? (
        <ContainerMessage>
          <Message>Слов нет</Message>
          <AddButton onClick={() => (window.location.href = "words")}>
            Добавить слово
          </AddButton>{" "}
        </ContainerMessage>
      ) : (
        <TableContainer>
          <Table>
            <thead className="thead">
              <Tr>
                <Th>Слово</Th>
                <Th>Перевод</Th>
                <Th>Действие</Th>
              </Tr>
            </thead>
            <Tbody>
              {words.map((word, index) => (
                <Tr key={index}>
                  <Td>{word.word}</Td>
                  <Td>{word.translation}</Td>
                  <Td>
                    <TdButton onClick={() => deleteWord(word.word)}>
                      Удалить
                    </TdButton>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </ContainerDictionary>
  );
};

const Quiz = () => {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [message, setMessage] = useState("");
  const [quizWords, setQuizWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("/api/words").then((response) => {
      setWords(response.data);
    });
  }, []);

  const startQuiz = async () => {
    setIsQuizStarted(true);
    const response = await axios.get("/api/words");
    const shuffledWords = response.data.sort(() => 0.5 - Math.random());
    setQuizWords(shuffledWords.slice(0, 20));
    setCurrentWord(shuffledWords[0]);
    setCurrentIndex(0);
  };

  const checkAnswer = () => {
    if (currentWord && userAnswer === currentWord.translation) {
      setMessage("Ура!");
      setIsCorrect(true);
      setTimeout(() => {
        setMessage("");
        if (currentIndex + 1 < quizWords.length) {
          setCurrentIndex(currentIndex + 1);
          setCurrentWord(quizWords[currentIndex + 1]);
          setUserAnswer(""); // Переместите сюда
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
            value={currentWord ? currentWord.word : ""}
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
const App = () => {
  return (
    <Router>
      <MainContainer>
        <Header>
          <StyledLink to="/words">Добавление слова</StyledLink>
          <StyledLink to="/dictionary">Словарь</StyledLink>
          <StyledLink to="/quiz">Квиз</StyledLink>
        </Header>
        <Routes>
          <Route path="/words" element={<Words />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </MainContainer>
    </Router>
  );
};

export default App;
