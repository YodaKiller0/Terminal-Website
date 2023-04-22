//<br> for break line <hr> for put a line under the text allways froget this XD

const text1 = "root@user$: <span class='type_text'>cat welcome.text</span>";

const text2 =
  "Welcome!👏 <br> My name Lithum Bandara and I'm 14 years old type <span class='whois'>'whois'</span> to see more information about me <br> My favourite hobby is to build crazy looking websites like this one😁.<hr>My portfolio is base on a terminal and I wrote it using HTML, CSS and JavaScript. <br> If you are familiar with this sort of terminal, you are welcome to use the commands, <br> Otherwise you can just type <span class='help'>'help'</span> for a list of commands. ";

const text3 = "";

const text4 = "root@user$: ";

const terminalbox1 = document.getElementById("text1");
const terminalbox2 = document.getElementById("text2");
const terminalbox3 = document.getElementById("text3");
const terminalbox4 = document.getElementById("text4");

let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

let typingInterval1;
let typingInterval2;
let typingInterval3;
let typingInterval4;

function typeText1() {
  terminalbox1.innerHTML = text1.slice(0, index1);
  index1++;

  if (index1 > text1.length) {
    terminalbox1.innerHTML = text1;
    clearInterval(typingInterval1);
    setTimeout(startTyping2, 0);
  }
}

function typeText2() {
  terminalbox2.innerHTML = text2.slice(0, index2);
  index2++;

  if (index2 > text2.length) {
    terminalbox2.innerHTML = text2;
    clearInterval(typingInterval2);
    setTimeout(startTyping3, 0);
  }
}

function typeText3() {
  terminalbox3.innerHTML = text3.slice(0, index3);
  index3++;

  if (index3 > text3.length) {
    terminalbox3.innerHTML = text3;
    clearInterval(typingInterval3);
    setTimeout(startTyping4, 0); //start typing when the text2 is over (in milliseconds)
  }
}

function typeText4() {
  let html = "";

  for (let i = 0; i < text4.length; i++) {
    let color = "rgb(79, 255, 208)";
    const letter = text4[i];

    if (letter === "root@user") {
      color = "rgb(255, 255, 255)";
    } else if (letter === ":" || letter === "$") {
      color = "rgb(79, 255, 208)";
    } else if (letter === "~") {
      color = "rgba(0, 98, 255, 0.77)";
    }

    const span = `<span style="color: ${color};">${letter}</span>`;
    html += span;
  }

  terminalbox4.innerHTML = html.slice(0, index4);
  index4++;

  if (index4 > html.length) {
    terminalbox4.innerHTML = html;
    clearInterval(typingInterval4);
  }
}

function startTyping1() {
  typingInterval1 = setInterval(typeText1, 50); //text speed in milliseconds
}

function startTyping2() {
  typingInterval2 = setInterval(typeText2, 10);
}

function startTyping3() {
  typingInterval3 = setInterval(typeText3, 10);
}

function startTyping4() {
  typingInterval4 = setInterval(typeText4, 0);
}

startTyping1();
