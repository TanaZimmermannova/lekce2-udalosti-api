// tady je místo pro náš program

let text = document.querySelector (".odstavec");
let velikost = 16;
let zvuk = document.querySelector (".zvuk");

function tucne() {
    text.style.fontWeight = "bold";
}

function normalni() {
    text.style.fontWeight = "normal";
}

function zmenaBarvy() {
    text.classList.toggle("cervena");
}

function velikostPisma() {
        velikost++;
        //console.log(velikost);
        let size = velikost + "px";
        //console.log(size);
        text.style.fontSize = size;
}

function play() {
    zvuk.play();
}

function stop() {
    zvuk.pause();
    zvuk.currentTime = 0;
}

function pause() {
    zvuk.pause();
}

function zpet() {
    zvuk.currentTime = 0;
}

function mute() {
    zvuk.volume = 0;
}

function tise() {
    zvuk.volume = 0.5;
}

function normal() {
    zvuk.volume = 1;
}