function onClick() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   alert(randomColor);
  document.getElementsByClassName("container")[0].style.backgroundColor = "#" + randomColor;;
  document.getElementById("background-color").innerHTML = "#" + randomColor;
  document.getElementById("background-color").style.color = "#" + randomColor;
}
