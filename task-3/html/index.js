window.addEventListener('DOMContentLoaded', function()  {
  let header = document.getElementById('header');
  header.innerHTML = `
  <p class="header-text" onclick="openPage('words')" id="wordsPage">Добавление слова</p>
  <p class="header-text" onclick="openPage('dictionary')" id="dictionaryPage">Словарь</p>
  <p class="header-text" onclick="openPage('quiz')" id="quizPage">Квиз</p>
  `;
   highlightActivePage(sessionStorage.getItem('activePage'));
})
function openPage(pageName) {
  sessionStorage.setItem('activePage', pageName);
  window.location.href = pageName + '.html';
}    
function highlightActivePage(pageName) {
      let pages = ['words', 'dictionary', 'quiz'];
      pages.forEach((page) => {
        let pageElement = document.getElementById(page + 'Page');
        if (page === pageName) {
          pageElement.classList.add('active');
        } else {
          pageElement.classList.remove('active');
        }
      });
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
  let word = wordInput.value.trim();
  let translation = translationInput.value.trim();

  if (word === "" || translation === "") {
    showToast("Пожалуйста, введите слово и его перевод");
    return;
  }

  let newWord = {
    word: word,
    translation: translation,
  };

  localStorage.setItem(word, JSON.stringify(newWord));

  wordInput.value = "";
  translationInput.value = "";

  showToast("Слово добавлено");
}
window.addEventListener('DOMContentLoaded', function() {
  let words = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
  let tableBody = document.querySelector('.tbody');
  let message = document.querySelector('.container-message');
  let tableContainer = document.querySelector('.table-container');
  
  if (!tableBody) return;
  
  if (words.length === 0) {
    message.style.display = 'flex';
    return;
  }
  
  message.style.display = 'none';
  tableContainer.style.display = 'block';
  
  words.forEach((word) => {
    let newTr = document.createElement('div');
    newTr.classList.add('tr');
    newTr.innerHTML = `
      <div class="td">${word.word}</div>
      <div class="td">${word.translation}</div>
      <div class="td">
        <button onclick="deleteWord('${word.word}')">Удалить</button>
      </div>
    `;
    tableBody.appendChild(newTr);
  });
});

function deleteWord(word) {
  localStorage.removeItem(word);
  location.reload();
}

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
