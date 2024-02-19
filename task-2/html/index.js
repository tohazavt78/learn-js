const questions = [
  {
    question: "Выберите собаку",
    answer: {
      a: {
        label: "Вы ответили верно!",
        image: "images/blackpuppy.jpg",
      },
      b: {
        label: "Попробуйте ещё раз",
        image: "images/whitepuppy.jpg",
      },
    },
    correct: "A",
  },
  {
    question: "Чем обработать собаку от клещей?",
    answer: {
      a: {
        label: "Вы ответили верно!",
        image: "images/bravecto.jpg",
      },
      b: {
        label: "Попробуйте ещё раз",
        image: "images/bars.jpg",
      },
    },
    correct: "A",
  },
  {
    question: "Каким кормом кормить собаку?",
    answer: {
      a: {
        label: "Попробуйте ещё раз",
        image: "images/pedigree.jpg",
      },
      b: {
        label: "Вы ответили верно!",
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
  correctAnswer = questions[questionIndex]["correct"];
}

function onRightAnswerClick() {
  if (correctAnswer == "A") {
    textA.innerHTML = questions[questionIndex]["answer"].a.label;
    answerA.style.background = "#E3FFEE";
    setTimeout(() => {
      textA.innerHTML = "";
      answerA.style.background = "";
    }, 3000);
  }
  if (correctAnswer == "B") {
    textB.innerHTML = questions[questionIndex]["answer"].b.label;
    answerB.style.background = "#E3FFEE";
    setTimeout(() => {
      textB.innerHTML = "";
      answerB.style.background = "";
    }, 3000);
  }
  questionIndex !== questions.length - 1
    ? setTimeout(() => showQuestion(questionIndex++), 3000)
    : setTimeout(() => (window.location.href = "finalPage.html"), 3000);
}

function onWrongAnswerClick() {
  correctAnswer !== "A"
    ? (answerA.style.background = "#FFEAE3")
    : (answerB.style.background = "#FFEAE3");
  setTimeout(() => {
    answerA.style.background = "";
    answerB.style.background = "";
  }, 3000);
  alert("Вы ошиблись, попробуйте ещё раз");
}

function onAnswerClick(answer) {
  answer == correctAnswer ? onRightAnswerClick() : onWrongAnswerClick();
}
