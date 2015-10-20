ex1 = function() {
  var myList;
  myList = document.querySelector('#nodot');
  nodot = document.createElement("li");
  li = document.createTextNode("input");
  
  input = document.querySelector('#Task').value; //id in HTML
  
  p = document.querySelector("#priority"); //make new box
  
  myList.appendChild(nodot);
  //myList.appendChild(todo);

}
