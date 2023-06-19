console.log("Hello from app.js");
const btn = document.querySelector("#btn");
const blague = document.querySelector("#blague");

const url = "https://apiblaguesstjo.onrender.com/api/v1/blagues/random";

btn.addEventListener("click", () => {
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      //   console.log(data);
      blague.innerHTML = `<p class="bulle">${data.result.question}</p><br><p class="bulle">${data.result.answer}</p>`;
      btn.innerHTML = "une autre <span>😆</span>";
    });
});
