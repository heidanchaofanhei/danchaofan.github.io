let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox2.png');
    } else {
        myImage.setAttribute('src','images/firefox-icon.png')
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '厉害了'+name+"!";
}

function setUserName() {
    let myName = prompt('请输入姓名');
    localStorage.setItem('name',myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if (!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
// localStorage.clear();