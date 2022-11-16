var count = 3;
var countElement = document.querySelector("#count");

console.log(countElement);



function moreLikes() {
    count++;
    countElement.innerText = count + " Like(s)";
    console.log(count);
}