import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import {
  ContainerWords,
  NewWords,
  NewWordsP,
  NewWordsInput,
  Confirm,
  ConfirmP,
  Toast,
} from "./Words.styled";

interface Word {
  word: string;
  translation: string;
}

export const Words = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message: React.SetStateAction<string>) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const addWord = useCallback(() => {
    if (word === "" || translation === "") {
      showToast("Пожалуйста, введите слово и его перевод");
      return;
    }

    axios.post("/api/words", { word, translation }).then((response) => {
      setWords((prevWords) => [...prevWords, response.data]);
      setWord("");
      setTranslation("");
      showToast("Слово добавлено");
    });
  }, [word, translation, words]);

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
