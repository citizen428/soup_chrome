function keyListener(e) {
  if (e.altKey && e.shiftKey && e.keyCode == 83) {
      chrome.extension.sendRequest({name: "openPopUp"});
  }
};

window.addEventListener("keyup", keyListener, false);
