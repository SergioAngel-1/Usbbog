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
function showTable() {
  document.getElementById("elementsHide").style.display = "block";
  document.getElementById("hideShowTable").style.display = "flex";
  document.getElementById("showShowTable").style.display = "none";
}

function hideTable() {
  document.getElementById("elementsHide").style.display = "none";
  document.getElementById("hideShowTable").style.display = "none";
  document.getElementById("showShowTable").style.display = "block";
}
