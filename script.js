
/* show tab function */
var currentTab = 0; // current tab is set to be the first tab(0)
showTab(currentTab); // display the current tab

function showTab(n){
  // This function will display the specified tab of form 

  var x = document.getElementsByClassName("tab");

  x[n].style.display = "block";
  if (n==0){
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n ==(x.length -1)){
    document.getElementById("nextBtn").innerHTML="Submit"; 
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // function that displays the correct tep on the indicator
  fixStepIndicator(n)
}

function nextPrev(n){
  // This function will figure out which tab to display

  var x = document.getElementsByClassName("tab");
  // exit the function if any field in the current tab is invalid

  if (n == 1 && !validateForm()) return false;
  //hide the current tab
  x[currentTab].style.display = "none";

   // Increase or decrease the current tab by 1:
   currentTab = currentTab + n;
   // if you reach the end of the form 
   if (currentTab >= x.length){
     // hte form gets submitted
     document.getElementById("tab").submit();
     return false;
   }
  // Otherwise, display the correct tab:
  showTab(currentTab)
  }

  function validateForm(){
    // this function deals with the validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    //a loop that checks every input field
    for(i=0; i < y.length; i++){
      // if fields is empty
      if (y[i].value == ""){
        // add an "invalid" class to the field
        y[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid){
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
  }
function fixStepIndicator(n) {
  // this functino removes the "active" class of all steps 
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++){
    x[i].className.replace("active", "");
  }
  // adds the "active" class to the current step 
  x[n].className += " active";
}
/* end tab function */




function displayRadioValue(){
  document.getElementById("result").innerHTML = "";

  var ele = document.getElementsByTagName('input');

  for (i=0; i<ele.length; i++){
    if (ele[i].type="radio"){
      if(ele[i].checked)
      document.getElementById("result").innerHTML
      += ele[i].value + ": "
      + ele[i].name + "<br>";

    }
  }
}

function menuFunction(x){
  x.classList.toggle("change");
}
 



    
/*   document.getElementById("formResults").innerHTML("");
 */
}


/*  function displayRadioValue() {
            document.getElementById("result").innerHTML = "";
            var ele = document.getElementsByTagName('input');
              
            for(i = 0; i < ele.length; i++) {
                  
                if(ele[i].type="radio") {
                  
                    if(ele[i].checked)
                        document.getElementById("result").innerHTML
                                += ele[i].name + " : "
                                + ele[i].value + "<br>";
                }
            }
        }

  */


/* function clearDisplayValues(result){
  document.getElementById("result").innerHTML = ("");
}

const name = document.querySelector(".name");

const btn = document.querySelector("button");

  btn.addEventListener("click", changeColor);
  function changeColor(){
    name.style.color="#28A228";
  }

 */





/* This function allows the output of the divs to be or not be displayed based on the current step in the form.  */
     var x = document.getElementsByClassName("tab"); // let the div class="tabnamehere" that divides the div content into separate displays be represented by the local variable x

     x[n].style.display = "block"; // let the tabs being represented by x organize themselves into an array of data [n] that can be  displayed in a block style 

     if (n == 0){ // if the array position of the currentTab[n is equal to zero, then get the getElementById id="prevBtn" to prevent the element from being displayed by setting the .style.display value to ="none"
      document.getElementById(prevBtn).style.display = "none";
        
     } else { // Otherwise, let the browser show the getElementById(prevBtn) because, that means this position of n, does not equal 0 and there is in fact, a previous view to display
       document.getElementById(prevBtn).style.display = "inline";
     }

     if (n == (x.length - 1)){ // if the position of the currentTab in the [n] array is equal to the last index in the array of tab positions
     document.getElementById("nextBtn").innerHTML = "Next"; // then get getElementById, id = "nextBtn" and write the value, "Next" on the element.
     }



function fixStepIndicator(n){ // creating a function to act on the array of currentTabs represented by parameter (n)
}
function nextPrev(n){

var x = getElementsByClassName("tab");
/* hide current tab */
if (n == 1 && !validateForm())
return false; // if the array number position equals one and the form is not validated then do not display the current tab.
x[currentTab].style.display = "none";

//assigning the current tab to a variable that adds the current tab to the array of current tabs 
currentTab = currentTab + n;

if (currentTab > = x.length){ // if the currentTab is greater than the length f the currentTab defined by x - meaning the user has reached the end of the form, then submit
document.getElementById("regForm").submit();
return false;
}
// Otherwise display the correct tab 
showTab(currentTab);
}

function validateForm(){
  var x, y, i, valid = true; // assigning bool true to variables 

  x = document.getElementsByClassName("tab"); // assigning x to the div with the class= "tab" 

  y = x[currentTab].getElementsByTagName("input"); // assigning y to the element with the tag name <input>

  for (i=0; i < y.length; i++){
    // for loop that cycles through the array of inputs represented by [i] that states ... 
    if (y[i].value == ""){
      // if value of input in the array is equal to an empty string, then...
      y[i].className += " invalid"; // add className = "invalid", and the current true or "valid" status can be set to false.
      valid = false; 
    }
  }
if (valid){   // If the valid status is true and recognized as being filled out, then mark the step as finished and valid: 
  document.getElementsByClassName("step")[currentTab].className += " finish";
}
return valid; 

}

function fixStepIndicator(n){
    // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step"); // assigning addEventListener to vars i and x that getsElementsByClassName "step"
  for (i=0; i<x.length; i++){
    // for every element with class name "step", then loop through the array represented by [i] and replace the className with active
    x[i].className.replace(" active", ""); 
  }
  x[n].className += " active"; // adds the classname "active to the current step"
}