const title = document.querySelector(".hello1 h1");

function handleTitleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
