let text =
  "whois         Who is Lithum?\n" +
  "video         View YouTube videos\n" +
  "social        Display social networks\n" +
  "secret        Crack the password\n" +
  "projects      View coding projects\n" +
  "help          You know what this command does\n" +
  "email         Email me\n" +
  "clear         Clear terminal\n" +
  "banner        Display the ASCII art\n";

let isHelp = false;

const helpText =
  "whois         Who is Lithum?\n" +
  "video         View YouTube videos\n" +
  "social        Display social networks\n" +
  "secret        Crack the password\n" +
  "projects      View coding projects\n" +
  "help          You know what this command does\n" +
  "email         Email me\n" +
  "clear         Clear terminal\n" +
  "banner        Display the ASCII art\n";

document.addEventListener("keypress", (key) => {
  if (key.keyCode !== 13) return;
  let x = document.getElementById("keyboard-input");
  let y = document.getElementById("output-textarea");
  if (x.value === "help") {
    y.innerHTML = helpText;
    isHelp = true;
  } else if (isHelp && x.value === "whois") {
    y.innerHTML =
      "Hey there! 👋 My name is Lithum Bandara, and I'm a 15-year-old aspiring full-stack developer from Sri Lanka 🇱🇰. I've always been fascinated by technology 💻, and I love creating websites and apps that are both functional and aesthetically pleasing. My journey started with HTML, CSS, and JavaScript 🌐, and I'm constantly learning new technologies to expand my skill set. \n\nI'm currently building my portfolio website, which showcases some of my recent projects and skills. My ambition is to become a professional full-stack developer 👨‍💻, and I'm willing to put in the hard work to achieve my goals. I believe that every project is an opportunity to learn something new and improve my skills, and I'm always looking for new challenges and opportunities to grow 🌱. \n\nIn my free time, I enjoy playing video games 🎮, watching tech tutorials on YouTube 📺, and exploring the beautiful nature around me 🌳🏞️. I also love spending time with my family and friends 👨‍👩‍👧‍👦, and trying out new food 🍔🍕🌮. Thanks for taking the time to learn a little bit about me, and I'm excited to see where my journey in tech takes me! 🚀";
    y.classList.add("special-text");
  } else if (isHelp && x.value === "video") {
    window.open(
      "https://www.youtube.com/channel/UCeP2LZa7Iz0BxdyL6PGnZnA",
      "_blank"
    );
  } else if (isHelp && x.value === "social") {
    window.open("https://github.com/YodaKiller0", "_blank");
  } else if (isHelp && x.value === "secret") {
    y.innerHTML = "4";
  } else if (isHelp && x.value === "projects") {
    window.open("https://github.com/YodaKiller0", "_blank");
  } else if (isHelp && x.value === "email") {
    window.location.href = "mailto:lithumbandara885@gmail.com";
  } else if (isHelp && x.value === "clear") {
    y.innerHTML = "";
  } else if (isHelp && x.value === "banner") {
    y.innerHTML = `
  
██╗   ██╗ ██████╗ ██████╗  █████╗     ██╗  ██╗██╗██╗     ██╗     ███████╗██████╗ 
╚██╗ ██╔╝██╔═══██╗██╔══██╗██╔══██╗    ██║ ██╔╝██║██║     ██║     ██╔════╝██╔══██╗
 ╚████╔╝ ██║   ██║██║  ██║███████║    █████╔╝ ██║██║     ██║     █████╗  ██████╔╝
  ╚██╔╝  ██║   ██║██║  ██║██╔══██║    ██╔═██╗ ██║██║     ██║     ██╔══╝  ██╔══██╗
   ██║   ╚██████╔╝██████╔╝██║  ██║    ██║  ██╗██║███████╗███████╗███████╗██║  ██║
   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝©
    `;
  } else {
    y.innerHTML =
      "Command not recognized. Type 'help' to see a list of available commands.";
    isHelp = false;
  }
  x.value = "";
});
