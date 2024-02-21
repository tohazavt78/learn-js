const questions = [
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

let questionIndex = 0;
let correctAnswer = questions[questionIndex]["correct"];
let answerA = document.getElementById("answer-A");
let answerB = document.getElementById("answer-B");
let textA = document.getElementById("text-A");
let textB = document.getElementById("text-B");
const correctAnswerMessage = "Вы ответили верно!";

showQuestion(questionIndex);

function showQuestion() {
  document.getElementById("question").innerHTML =
    questions[questionIndex]["question"];
  document
    .getElementById("image-A")
    .setAttribute("src", questions[questionIndex]["answer"].a.image);
  document
    .getElementById("image-B")
    .setAttribute("src", questions[questionIndex]["answer"].b.image);
  document.getElementById("answer-A-label").innerHTML =
    questions[questionIndex]["answer"].a.label;
  document.getElementById("answer-B-label").innerHTML =
    questions[questionIndex]["answer"].b.label;
  correctAnswer = questions[questionIndex]["correct"];
}

function onRightAnswerClick() {
  if (correctAnswer == "A") {
    textA.innerHTML = correctAnswerMessage;
    answerA.style.background = "#E3FFEE";
  }
  if (correctAnswer == "B") {
    textB.innerHTML = correctAnswerMessage;
    answerB.style.background = "#E3FFEE";
  }
  setTimeout(() => {
    if (correctAnswer == "A") {
      textA.innerHTML = "";
      answerA.style.background = "";
    }
    if (correctAnswer == "B") {
      textB.innerHTML = correctAnswerMessage;
      answerB.style.background = "#E3FFEE";
    }
    if (questionIndex !== questions.length - 1) {
      showQuestion(questionIndex++);
    } else {
      window.location.href = "finalPage.html";
    }
  }, 3000);
}

function onWrongAnswerClick() {
  if (correctAnswer !== "A") {
    answerA.style.background = "#FFEAE3";
  } else {
    answerB.style.background = "#FFEAE3";
  }
  setTimeout(() => {
    answerA.style.background = "";
    answerB.style.background = "";
  }, 3000);
  alert("Вы ошиблись, попробуйте ещё раз");
}

function onAnswerClick(answer) {
  if (answer == correctAnswer) {
    onRightAnswerClick();
  } else {
    onWrongAnswerClick();
  }
}
