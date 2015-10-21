ex1 = function() {
  var myList;
  myBox = document.querySelector(“#textbox”);
  myPriority = document.querySelector(“#priority”);
  myUl = document.querySelector(“#tasklist”);
  myUl.appendChild(myLi);
  myLi = document.createElement(“li”);
  myLi.classList.add(myPriority.value);
  myLi.appendChild(myInput);
  myLi.appendChild(myText);
  myInput = document.createElement(“INPUT”);
  myInput.type = “checkbox”;
  myText = document.createTextNode(myBox.value);
  
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
