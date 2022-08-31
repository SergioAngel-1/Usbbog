function showText() {
  document.getElementById("spanHideText").style.display = "block";
  document.getElementById("seeLess").style.display = "block";
  document.getElementById("seeMore").style.display = "none";
}

function hideText() {
  document.getElementById("spanHideText").style.display = "none";
  document.getElementById("seeLess").style.display = "none";
  document.getElementById("seeMore").style.display = "block";
}

function hideTable() {
  document.getElementById("hideTable").style.display = "none";
}

function showTable() {
  document.getElementById("hideTable").style.display = "flex";
}
