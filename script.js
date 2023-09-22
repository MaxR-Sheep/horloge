const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwitch = document.querySelector(".mode-switch");

// modification texte avec changement de mode

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

//avec le click modification des couleur selon ce qui est ecrit

modeSwitch.addEventListener("click", () => {
  body.classList.add("dark");
  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

// fonction pour les mouvements aiguilles selon le temps

const updateTime = () => {
  let date = new date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minToDeg = (date.getMinutes() / 60) * 360;
  let hrToDeg = (date.getHours() / 12) * 360;

  secondHand.style.transform = rotate({ secToDeg });
  minuteHand.style.transform = rotate({ minToDeg });
  hourHand.style.transform = rotate({ hrToDeg });
};

setInterval(updateTime, 1000);
updateTime();
