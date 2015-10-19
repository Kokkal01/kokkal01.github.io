ex1 = function() {
  var Task;
  myList = document.querySelector('#nodot').value;
  nodot = document.createElement("li");
  li = document.createTextNode(text);
  
  myInput = document.querySelector('#Task').value;
  Task = document.createElement('todo');
  todo = document.createTextNode("ol");
  
  nodot.appendChild(li);
  Task.appendChild(todo);

}
