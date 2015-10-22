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

localSave("nodot");
restoreList(doneTask);
    

if(document.documentElement && document.documentElement.innerHTML){
       var a=document.getElementById("tblive").innerHTML;
       a=a.replace(/</g,'&lt;');
       var w=window.open();
       w.document.open();
       w.document.write('<pre>&lt;tblive>\n'+a+'\n&lt;/tblive></pre>');
       w.document.close();
       }
    }

doneTask = function() {
  if(this.checked) {
    this.parentNode.classList.add("done")
  }
  else {
    this.parentNode.classList.remove("done")
  }
}

/*
window.onload = function() {
  color();
}*/

