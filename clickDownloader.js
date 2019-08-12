document.addEventListener("click", function(el) {
  el.preventDefault();

  console.log("something was clicked");
  checkElementType(el);
});

function checkElementType(el) {
  var elTagName = el.srcElement.tagName;
  console.log("you clicked on " + elTagName);
  switch (elTagName) {
    case "IMG":
      handleImgEl(el.srcElement);
      break;
    case "A":
      handleLinkEl(el.srcElement);
      break;
    default:
      handleAnomaly(el.srcElement);
  }
}

function handleImgEl(el) {
  //if (el.src)
  console.log("within handleImgEl function");
  console.log(el.src);
}

function handleLinkEl(el) {
  //if (el.src)
  console.log("within handleLinkEl function");
  // el.setAttribute('download', ).click();
}

function handleAnomaly(el) {
  //if (el.src)
  console.log("within handleAnomaly function");
}
