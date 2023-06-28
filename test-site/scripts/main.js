/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/
/*document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
});
*/
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'E:/web-project/test-site/images/1.jpg') {
        myImage.setAttribute('src', 'E:/web-project/test-site/images/2.jpg');
    } else {
        myImage.setAttribute('src', 'E:/web-project/test-site/images/1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function () {
    setUserName();
}