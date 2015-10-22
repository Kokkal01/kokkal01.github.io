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


doneTask = function() {
  if(this.checked) {
    this.parentNode.classList.add("done")
  }
  else {
    this.parentNode.classList.remove("done")
  }
}


color = function() {
  document.querySelector('#high').innerHTML = document.body.style.color("#high");
  document.querySelector('#medium').innerHTML = document.body.style.color("#medium");
  document.querySelector('#low').innerHTML = document.body.style.color("#low");
}
window.onload = function() {
  color();
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

