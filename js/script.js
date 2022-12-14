
/* if no task written,
show error message */
function error() {
    var border = document.getElementById("grad")
    var txt = document.getElementById("errormsg")    
    border.style.borderColor = "red";

    txt.style.display = "initial"

    txt.style.color = "#eef5db";
    txt.style.textShadow = "2px 2px black"; 

  }

// does the exact opposite of error()
function clearError() {
  
    var element = document.getElementById("grad")
    element.style.borderColor = "#4f6367";
    
    var text = document.getElementById("errormsg")
    text.style.display = "none"

}

// validate the form, and add the task to the list accordingly.
function validateForm(){
    var li = document.createElement("li");
    var inputVal = document.getElementById("myTask").value;
    var user = document.createTextNode(inputVal);
    
    li.appendChild(user);
    if(inputVal == "") {
        // new task empty, catch error
        error();
    } else {
        document.getElementById("tasks").appendChild(li);
        // new task valid, clear error
        clearError();
    }
    
    document.getElementById("myTask").value = "";

    var span = document.createElement("SPAN");
    var closebtn = document.createElement("button");
    closebtn.innerHTML = "X";
    span.className = "close";
    span.appendChild(closebtn);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          this.parentElement.style.display = "none";
        }
      }   
}

// clear selected task from the list
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    this.parentElement.style.display = "none";
    clearError()
  }
}