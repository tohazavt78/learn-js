const questions = [
  {question : 'Выберите собаку',
    answer :{
      a : {
        label : 'Вы ответили верно!',
        image : 'images/blackpuppy.jpg'
      },
      b : {
        label : 'Попробуйте ещё раз',
        image : 'images/whitepuppy.jpg'
      },
    },
    correct :'A'
  },
  {question : 'Чем обработать собаку от клещей?', 
    answer :{
      a : {
        label : 'Вы ответили верно!',
        image : 'images/bravecto.jpg'
      },
      b : {
        label : 'Попробуйте ещё раз',
        image : 'images/bars.jpg'
      },
    },
    correct :'A'
  },
  {question : 'Каким кормом кормить собаку?',
    answer :{
      a : {
        label : 'Попробуйте ещё раз',
        image : 'images/pedigree.jpg'
      },
      b : {
        label : 'Вы ответили верно!',
        image : 'images/grandorf.jpg'
      },
    },
  correct :'B'
  }
] 

let questionIndex = 0;
let correctAnswer = questions[questionIndex]['correct'];


showQuestion(questionIndex);



function showQuestion(){
document.getElementById('question').innerHTML = questions[questionIndex]['question'];
document.getElementById('image-A').setAttribute('src',questions[questionIndex]['answer'].a.image) ;
document.getElementById('image-B').setAttribute('src',questions[questionIndex]['answer'].b.image) ;
correctAnswer = questions[questionIndex]['correct'];
};

let container = document.getElementById('container');
container.onclick = function(event){
  let target = event.target;
  let answer = target.dataset.answer;
  if (target.className != "answer") return;
  if(answer == correctAnswer){
      target.style.background = 'green';
      setTimeout(() => target.style.background = '',3000);
      alert('Вы ответили верно!');
      if (questionIndex !== questions.length - 1){
      setTimeout(() => showQuestion(questionIndex++),3000);
      }else{
        setTimeout(()=> window.location.href ='finalPage.html',3000);
      }
  }else{
      target.style.background = 'red';
      setTimeout(() => target.style.background = '',3000);
      alert('Вы ошиблись, попробуйте ещё раз');
  }
  };

/*function onRightAnswerClick(){
  let target = Event.target;
  if ( target.dataset.answer == A){
    document.getElementById('text-A').innerText = questions[questionIndex]['answer'].a.label;
    setTimeout(()=> document.getElementById('text-A').innerText ='',3000);
    document.getElementById('answer-A').style.backgroundColor = 'green';
    setTimeout(()=>document.getElementById('answer-A').style.backgroundColor = '',3000);
  }
  if ( answer == B){
    document.getElementById('text-B').innerText = questions[questionIndex]['answer'].B.label;
    setTimeout(()=> document.getElementById('text-A').innerText ='',3000);
    document.getElementById('answer-B').style.backgroundColor = 'green';
    setTimeout(()=>document.getElementById('answer-A').style.backgroundColor = '',3000);
};
setTimeout(()=> showQuestion(questionIndex++),3000);
console.log(target);
};*/


/*function onAnswerClick (A,B) {
  if (A == correctAnswer || B == correctAnswer){
    onRightAnswerClick();
    setTimeout(()=> showQuestion(questionIndex++),3000);
  } 
  else {
    onWrongAnswerClick();
  };
};*/

/*function onRightAnswerClick(A,B){
document.getElementById('text-A').innerText = questions[questionIndex]['answer'].a.label;
setTimeout(()=> document.getElementById('text-A').innerText ='',3000);
document.getElementById('answer-A').style.backgroundColor = 'green';
setTimeout(()=>document.getElementById('answer-A').style.backgroundColor = '',3000);
setTimeout(() => showQuestion(questionIndex++),3000);
};

function onWrongAnswerClick(){
document.getElementById('answer-B').style.backgroundColor = 'red';
setTimeout(()=>document.getElementById('answer-B').style.backgroundColor = '',3000);
alert('Вы ошиблись, попробуйте ещё раз');
};*/

