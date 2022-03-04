import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();

// donutMaker.addToDonutCount()
// let clicker = setInterval(donutMaker.activateAutoClickers,1000)
// let donutCount = donutMaker.donutCount;

const addDonutBtn = document.querySelector(".donutButton");
const totalDisplay = document.querySelector(".totalDonutCount")
addDonutBtn.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);

})

const addAutoClickBtn = document.querySelector(".autoClicker");
const autoDisplay = document.querySelector(".totalAutoClickerCount");
addAutoClickBtn.addEventListener("click", () =>{
  donutMaker.addToAutoClickerCount();
  autoDisplay.innerText = "Auto Clicker Count: " + donutMaker.autoClicker;
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
})


