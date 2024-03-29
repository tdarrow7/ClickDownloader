// create necessary iframe
createIframe();

document.addEventListener("click", function(el) {
  //if (el.srcElement.tagName != 'BUTTON')
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
  triggerDownload(el.src);
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

function createIframe() {
  var form = document.createElement('form'),
      button = document.createElement('button');

    form.id = "DownloadForm";
    form.method = 'get';
    form.action = '';
    form.style.display = 'none';
    button.type = 'submit';
    button.id = 'DownloadFormButton'
  form.appendChild(button);
  document.body.appendChild(form);
}

function triggerDownload(elSrc) {
  var form = document.getElementById('DownloadForm'),
      button = document.getElementById('DownloadFormButton');
  form.action = elSrc;
  button.click();
}