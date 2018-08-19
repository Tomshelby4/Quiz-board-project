function onSubmit(){
  var score=0;
  var numOfQuestions=3;
  var ansArr = ['b','d','c'];

  var q1 = document.forms['quiz']['q1'].value;
  var q1 = document.forms['quiz']['q2'].value;
  var q1 = document.forms['quiz']['q3'].value;

  for(var i =1; i <= numOfQuestions; i++){if(eval('q' + i) == ''){
    alert(" You missed question number " + i);
  }
}
  for(var i =1; i <= numOfQuestions; i++){if(eval('q' + i) == ansArr[i-1]){ score++;
  }
}

var results= document.getElementbyId('results')
results.innerHTML="<h2>You Scored " + score + " points out of " + numOfQuestions + "</h2>"
alert(' You scored ' + score + 'out of' + numOfQuestions)
return false;
}
