import { useEffect, useState } from "react";
import axios from "axios";

import {
  ContainerDictionary,
  ContainerMessage,
  Message,
  AddButton,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TdButton,
} from "./Dictionary.styled";

interface Word {
  word: string;
  translation: string;
}

export const Dictionary = () => {
  const [words, setWords] = useState<Word[]>([]);

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
