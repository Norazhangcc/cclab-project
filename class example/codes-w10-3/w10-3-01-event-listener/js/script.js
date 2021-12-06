for (let i = 0; i < 100; i++) {
  let newBtn = document.createElement('button');
  newBtn.style.width = "50px";
  newBtn.style.height = "50px";
  newBtn.style.margin = "10px";

  // using an anonymous function
  newBtn.addEventListener("click", function(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor =
      "rgb(" + r + "," + g + "," + b + ")";
  } );

  // using an existing function 
  //newBtn.addEventListener("click", change);

  document.body.appendChild(newBtn);
}

function change() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")";
}

/*
for (let i = 0; i < 100; i++) {
  let newDiv = document.createElement('div');
  newDiv.style.backgroundColor = "gray";
  newDiv.style.float = "left";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  document.body.appendChild(newDiv);
}
*/
