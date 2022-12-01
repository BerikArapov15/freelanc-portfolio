const btnDarkNode = document.querySelector(".dark-node-btn");

//1. Проверка темной темы на уровне системных настроек
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkNode.classList.add("dark-node-btn--active");
  document.body.classList.add("dark");
}

//2.Проверка темной темы в LocalStorage
if (localStorage.getItem("darkNode") === "dark") {
  btnDarkNode.classList.add("dark-node-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkNode") === "light") {
  btnDarkNode.classList.remove("dark-node-btn--active");
  document.body.classList.remove("dark");
}

//3.если меняются  системные настройки меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    const newColor = event.matches ? "dark " : "light";
    alert("Change!!!");
    if (newColor === "dark ") {
      btnDarkNode.classList.add("dark-node-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkNode", "dark ");
    } else {
      btnDarkNode.classList.remove("dark-node-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkNode", "light");
    }
  });

// 4.Включение ночного режима по кнопке
btnDarkNode.onclick = function () {
  btnDarkNode.classList.toggle("dark-node-btn--active");
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    localStorage.setItem("darkNode", "dark");
  } else {
    localStorage.setItem("darkNode", "night");
  }
};
