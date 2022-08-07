function btn_toogle(){
  const box = document.getElementsByClassName("pop-box")[0];
  const box1 = document.getElementsByClassName("pop-box2")[0];
  const menu_btn = document.getElementsByClassName("btn")[0];
  if(box.style.visibility == "visible"){
    box.style.visibility = "hidden";
    menu_btn.style.background = "transparent";
    menu_btn.style.color = "white";
  }else{
    box.style.visibility ="visible";
    menu_btn.style.background = "white";
    menu_btn.style.color = "black";
    box1.style.visibility = "hidden";
  }
}
function btn_click(){
const box = document.getElementsByClassName("pop-box")[0];
const box1 = document.getElementsByClassName("pop-box2")[0];
const menu_btn = document.getElementsByClassName("btn")[0];
if(box1.style.visibility == "visible"){
    box1.style.visibility = "hidden";
    box.style.visibility = "hidden";
  }else{
    box1.style.visibility ="visible";
    box.style.visibility = "hidden";
    menu_btn.style.background = "transparent";
    menu_btn.style.color = "white";
  }
}

function btn2_toogle(){
  var box = document.getElementsByClassName("pop-course")[0];
  if(box.style.display === "block"){
    box.style.display = "none";
  }else{
    box.style.display = "block";
  }
}

function btn3_toogle(){
  var box = document.getElementsByClassName("pop-course")[1];
  if(box.style.display === "block"){
    box.style.display = "none";
  }else{
    box.style.display = "block";
  }
}

function btn4_toogle(){
  var box = document.getElementsByClassName("pop-course")[2];
  if(box.style.display === "block"){
    box.style.display = "none";
  }else{
    box.style.display = "block";
  }
}
function btn5_toogle(){
  var box = document.getElementsByClassName("pop-course")[3];
  if(box.style.display === "block"){
    box.style.display = "none";
  }else{
    box.style.display = "block";
  }
}
function btn6_toogle(){
  var box = document.getElementsByClassName("pop-course")[4];
  if(box.style.display === "block"){
    box.style.display = "none";
  }else{
    box.style.display = "block";
  }
}
