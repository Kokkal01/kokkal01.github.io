ex1 = function() {
  var myBox;
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
  
doneTask = function() {
  if(this.checked) {
    this.parentNode.classList.add("done")
  }
  else {
    this.parentNode.classList.remove("done")
  }
}
  
  /*
  myList = document.querySelector('#nodot');
  nodot = document.createElement("li");
  li = document.createTextNode("input");
  
  input = document.querySelector('#Task'); //id in HTML
  input.innerHTML = li;
  
  p = document.querySelector("#priority"); //make new box
  
  myList.appendChild(nodot);
  //myList.appendChild(todo);
  */
}
