//const getVal = num;
const getDice = end => {
  const getRandomDice = () => ({
    num: Math.floor(Math.random() * 6) + 1
  });
  let dice = [];
  for (let i = 0; i < end; i++) dice.push(getRandomDice());
  return dice;
};
var log = [];
let dice = [];
const selection = ryan => {
  let min = 0;
  while (min < ryan.length - 1) {
    for (let i = min + 1; i < ryan.length - 1; i++) {
      if (ryan[min] > ryan[i]) {
        let store = ryan[min];
        ryan[min] = ryan[i];
        ryan[i] = store;
        log.push(ryan.slice(0));
      }
    }
    min++;
  }
  return ryan;
};
const showMeTheCube = cube =>
  `<div class="cube"><span>${getDice(cube)}</span></div>`;
document.querySelector("#roll").addEventListener("click", () => {
  dice = getDice(document.querySelector("#amount").value);
  document.querySelector(".unsortedDice").innerHTML = dice
    .map(cube => showMeTheCube(cube))
    .join("");
  document.querySelector(".unsortedDice").innerHTML = "";
});
document.querySelector("#sort").addEventListener("click", () => {
  selection(dice);
  document.querySelector(".sortPath").innerHTML = log
    .map(
      (iter, i) =>
        `<li><i>${i}</i><div class="cube">${iter
          .map(cube => showMeTheCube(cube))
          .join("")}</div></li>`
    )
    .join("");
});
