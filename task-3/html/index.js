$(function () {
  $("#header").load("header.html", function () {
    let page = window.location.pathname.split("/").pop().split(".")[0];
    openPage(page);
  });
});

function openPage(page) {
  $(".header-text").removeClass("active");
  $("#" + page + "Page").addClass("active");
  if (page !== window.location.pathname.split("/").pop().split(".")[0]) {
    window.location.href = page + ".html";
  }
}

let wordInput = document.querySelector(".adding input");
let translationInput = document.querySelector(".translation input");
let confirmButton = document.querySelector(".confirm");

function showToast(message) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(function() {
    document.body.removeChild(toast);
  }, 3000);
}

function addWord() {
  let word = wordInput.value;
  let translation = translationInput.value;

  let newWord = {
    word: word,
    translation: translation,
  };

  localStorage.setItem(word, JSON.stringify(newWord));

  wordInput.value = "";
  translationInput.value = "";

  showToast("Слово добавлено");
}

window.onload = function () {
  let message = document.querySelector(".message");
  let addButton = document.querySelector(".add");
  let dictionaryContainer = document.querySelector(".container-dictionary");

  let words = Object.keys(localStorage);
  if (words.length > 0) {
    message.style.display = "none";
    addButton.style.display = "none";

    let tableContainer = document.createElement("div");
    tableContainer.className = "table-container";
    dictionaryContainer.appendChild(tableContainer);

    let table = document.createElement("table");
    table.className = "table";
    tableContainer.appendChild(table);

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

      const  parsedWord  = JSON.parse(localStorage.getItem(word));

      let tdWord = document.createElement("td");
      tdWord.textContent =  parsedWord .word;
      tdWord.className = "td";
      tr.appendChild(tdWord);

      let tdTranslation = document.createElement("td");
      tdTranslation.className = "td";
      tdTranslation.textContent =  parsedWord .translation;
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
  let correct = JSON.parse(localStorage.getItem(words[currentWordIndex]));

  if (userTranslation === correct.translation) {
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
      messageElement.textContent = "";
      messageElement.classList.remove("success");
    }, 3000);
  } else {
    messageElement.classList.add("error");
    messageElement.classList.remove("success");
    closeButton.className = "close";
    closeButton.textContent = "X";
    closeButton.onclick = function () {
      messageElement.textContent = "";
      messageElement.classList.remove("success", "error");
    };
  }
}
