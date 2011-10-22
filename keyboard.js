function keyListener(e) {
console.log(e.altKey);
console.log(e.shiftKey);
console.log(e.keyCode);
    if (e.altKey && e.shiftKey && e.keyCode == 83) {
        chrome.extension.sendRequest({name: "openPopUp"});
    }
};

window.addEventListener("keyup", keyListener, false);
