ex1 = function() {
  var myBox, myPriority, myUl;
  myBox = document.querySelector("#textbox");
  myPriority = document.querySelector("#priority");
  myUl = document.querySelector("#nodot");
  
  myLi = document.createElement("li");
  myInput = document.createElement("INPUT");
  myText = document.createTextNode(myBox.value);
  myLi.classList.add(myPriority.value);
  
  myUl.appendChild(myLi);
  myLi.appendChild(myInput);
  myLi.appendChild(myText);
  
  myInput.type = "checkbox";
  myInput.onclick = doneTask;
}




doneTask = function() {
  if(this.checked) {
    this.parentNode.classList.add("done")
  }
  else {
    this.parentNode.classList.remove("done")
  }
  /*localSave("nodot");
  restoreList("nodot", doneTask);*/
}

window.onload = function() {
  localSave("nodot");
  restoreList("nodot",doneTask);
}

