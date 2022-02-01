/* This function allows the output of the divs to be or not be displayed based on the current step in the form.  */

  var currentTab = 0; // Current tab is set to be the first tab (0)

  showTab(currentTab); // assigning the currentTab parameter name to pass through the function that displays the current tab

  function showTab(n){ // assigning temporary local variable to represent currentTab in parameter based on it's unique value or tab position in the form
  
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

if (currentTab > x.length){ // if the currentTab is greater than the length f the currentTab defined by x - meaning the user has reached the end of the form, then submit
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
  }