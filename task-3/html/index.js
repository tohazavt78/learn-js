function openPage(page) {
  if (page === "words") {
    window.location.href = "words.html";
  }
  if (page === "dictionary") {
    window.location.href = "dictionary.html";
  }
  if (page === "quiz") {
    window.location.href = "quiz.html";
  }
}

let wordInput = document.querySelector(".adding input");
let translationInput = document.querySelector(".translation input");
let confirmButton = document.querySelector(".confirm");

function saveData() {
  let word = wordInput.value;
  let translation = translationInput.value;

  let data = {
    word: word,
    translation: translation,
  };

  localStorage.setItem(word, JSON.stringify(data));

  wordInput.value = "";
  translationInput.value = "";
}

window.onload = function () {
  let message = document.querySelector(".message");
  let addButton = document.querySelector(".add");
  let dictionaryContainer = document.querySelector(".container-dictionary");

  let words = Object.keys(localStorage);
  if (words.length > 0) {
    message.style.display = "none";
    addButton.style.display = "none";

    let div = document.createElement("div");
    div.className = "table-container";
    div.style.maxHeight = "223px";
    div.style.overflow = "auto";
    dictionaryContainer.appendChild(div);

    let table = document.createElement("table");
    table.className = "table";
    div.appendChild(table);

    words.sort();

    let thead = document.createElement("thead");
    thead.className = "thead";
    table.appendChild(thead);

    let headers = ["Слово", "Перевод", "Действие"];
    let tr = document.createElement("tr");
    tr.className = "tr";
    thead.appendChild(tr);

    headers.forEach((header) => {
      let th = document.createElement("th");
      th.className = "th";
      th.textContent = header;
      tr.appendChild(th);
    });

    let tbody = document.createElement("tbody");
    tbody.className = "tbody";
    table.appendChild(tbody);

    words.forEach((word) => {
      let tr = document.createElement("tr");
      tr.className = "tr";
      tbody.appendChild(tr);

      let data = JSON.parse(localStorage.getItem(word));

      let tdWord = document.createElement("td");
      tdWord.textContent = data.word;
      tdWord.className = "td";
      tr.appendChild(tdWord);

      let tdTranslation = document.createElement("td");
      tdTranslation.className = "td";
      tdTranslation.textContent = data.translation;
      tr.appendChild(tdTranslation);

      let tdAction = document.createElement("td");
      tdAction.className = "td";
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Удалить";
      deleteButton.onclick = function () {
        localStorage.removeItem(word);
        tr.remove();

        if (!localStorage.length) {
          message.style.display = "block";
          addButton.style.display = "block";
          table.remove();
        }
      };
      tdAction.appendChild(deleteButton);
      tr.appendChild(tdAction);
    });
  }
};

let words = Object.keys(localStorage);
let currentWordIndex = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  if (words.length === 0) {
    alert("Добавьте слова в словарь перед началом теста");
    return;
  }

  shuffle(words);

  const quizContainer = document.querySelector(".container-quiz");
  quizContainer.innerHTML = `
        <p class = 'word'>Слово</p>
        <input class = 'question' id="wordInput" readonly />
        <input class = 'answer' id="translationInput" placeholder="Введите перевод" />
        <button class = 'check' id="checkButton">Проверить</button>
        <p class = 'quiz-message' id="message" ></p>
    `;

  document.getElementById("checkButton").addEventListener("click", checkAnswer);
  showWord();
}

function showWord() {
  document.getElementById("wordInput").value = words[currentWordIndex];
}

function checkAnswer() {
  const userTranslation = document.getElementById("translationInput").value;
  let data = JSON.parse(localStorage.getItem(words[currentWordIndex]));

  if (userTranslation === data.translation) {
    showMessage("Ура!", true);
    currentWordIndex++;
    if (currentWordIndex === words.length) {
      alert("Тест завершен!");
      location.reload();
    } else {
      setTimeout(() => {
        document.getElementById("translationInput").value = "";
        showWord();
      }, 3000);
    }
  } else {
    showMessage("Неверно, попробуйте снова", false);
  }
}

function showMessage(text, isSuccess) {
  const messageElement = document.getElementById("message");
  const closeButton = document.createElement("span");
  messageElement.textContent = text;
  messageElement.appendChild(closeButton);
  if (isSuccess) {
    messageElement.classList.add("success");
    messageElement.classList.remove("error");
    setTimeout(() => {
      messageElement.textContent = '';
      messageElement.classList.remove('success');
  }, 3000);
  } else {
    messageElement.classList.add("error");
    messageElement.classList.remove("success");
    closeButton.className = 'close';
    closeButton.textContent = "X";
    closeButton.onclick = function () {
      messageElement.textContent = "";
      messageElement.classList.remove("success", "error");
    };
  }
}
document.querySelector(".quiz").addEventListener("click", startQuiz);
