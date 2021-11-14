let x = 0;
let g = 0;


function addDiv(){
  let newElt = document.createElement("div");
  //create a HTML element
  newElt.style.backgroundColor = "grey";
  newElt.style.width = "50px";
  newElt.style.height = "50px";
  newElt.style.margin = "30px";
  //newElt.style.position = "absolute";
  //newElt.style.right = "100px";
  //newElt.style.top = "100px";
  //change properties
  //attach the element to document
  document.getElementById('box').appendChild.(newElt);
}


function change(){

  g += 20;
  x += 20;

  let b = document.getElementById("box");
  b.innerHTML = "WOW!";
  b.style.left = x+"px";
  b.style.backgroundColor = "rgb(255,"+ g +",0)";
}
