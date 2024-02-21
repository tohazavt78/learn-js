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

let questionIndex = 0;
let correctAnswer = QUESTIONS[questionIndex]["correct"];
let answerA = document.getElementById("answer-A");
let answerB = document.getElementById("answer-B");
let textA = document.getElementById("text-A");
let textB = document.getElementById("text-B");
const CORRECT_ANSWER_MESSAGE = "Вы ответили верно!";

showQuestion(questionIndex);

function showQuestion() {
  document.getElementById("question").innerHTML =
    QUESTIONS[questionIndex]["question"];
  document
    .getElementById("image-A")
    .setAttribute("src", QUESTIONS[questionIndex]["answer"].a.image);
  document
    .getElementById("image-B")
    .setAttribute("src", QUESTIONS[questionIndex]["answer"].b.image);
  document.getElementById("answer-A-label").innerHTML =
    QUESTIONS[questionIndex]["answer"].a.label;
  document.getElementById("answer-B-label").innerHTML =
    QUESTIONS[questionIndex]["answer"].b.label;
  correctAnswer = QUESTIONS[questionIndex]["correct"];
}

function onRightAnswerClick() {
  if (correctAnswer == "A") {
    textA.innerHTML = CORRECT_ANSWER_MESSAGE;
    answerA.style.background = "#E3FFEE";
  }
  if (correctAnswer == "B") {
    textB.innerHTML = CORRECT_ANSWER_MESSAGE;
    answerB.style.background = "#E3FFEE";
  }
  setTimeout(() => {
    if (correctAnswer == "A") {
      textA.innerHTML = "";
      answerA.style.background = "";
    }
    if (correctAnswer == "B") {
      textB.innerHTML = '';
      answerB.style.background = "#E3FFEE";
    }
    if (questionIndex !== QUESTIONS.length - 1) {
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
