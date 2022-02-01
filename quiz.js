function checkAnswer(quizForm, theAnswer, urlRight, urlWrong){
  var s = "?";
  // loop through curren choices 
  // find selected choices
  // radio boxes pointing to choices
  // must be named "cc"
  // change if needed

//   var i = 0; initialize a var to equal 0;
  for (i=0; i< quizForm.elements.length; i++){
    if(("cc" == quizForm.elements[i].name) &&
    <quizForm.elements[i].checked)){
      s = quizForm.elements[i].value;
    }
  }
  // if no choice was selected
  if ("?" == s){
    alert("Please make a selection.");
    return false;
  }
  // check if we made a choice
  if (s == theAnswer){
    alert("'"+s+ "is correct!");
    if (urlRight){
      document.location.href = urlWrong;
    }
  }
  // return false to indicate not to submit the form, but if the form action is valid, point to a calid CGI script here 
}