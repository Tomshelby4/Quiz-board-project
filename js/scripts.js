function Check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

  if (question1 == "ECMAScript") {
    correct ++;
  }
  if (question2 == "Brendan Eich") {
    correct ++;
  }
  if (question3 == "Slides") {
    correct ++;
  }
  document.getElementById("after-submit").style.visibility = "visible";
  document.getElementById("number-correct").innerHTML = "You got " + correct + " correct.";
}
