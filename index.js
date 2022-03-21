import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();

// let donutCount = donutMaker.donutCount;
// donutMaker.addToDonutCount()
setInterval(function(){
  donutMaker.activateAutoClickers();
},1000);

setInterval(function(){
  donutMaker.disableAutoClicker();
  donutMaker.disableDonutMult();
  totalDisplay.innerText = "Vegetable Count: " + Math.floor(donutMaker.donutCount);
  multDisplay.innerText = "Tractor Count: " + donutMaker.donutMultiplier;
  autoDisplay.innerText = "Farmer Count: " + donutMaker.autoClicker;
  valueOfMult.innerText = "Vegetables Earned Per Click: " + Math.pow(1.2, donutMaker.donutMultiplier).toFixed(2);
  autoClickCostDisplay.innerText = "Farmer Cost: " + Math.round(donutMaker.autoClickerCost);
  donMultCostDisplay.innerText = "Tractor Cost: " + Math.round(donutMaker.donutMultCost);
  restartGameBtn.innerText = "Start Over";
},200);

const addDonutBtn = document.querySelector(".donutButton");
const totalDisplay = document.querySelector(".totalDonutCount")
const addAutoClickBtn = document.querySelector(".autoClicker");
const autoDisplay = document.querySelector(".totalAutoClickerCount");
const addDonutMultBtn = document.querySelector(".donutMultiplier");
const multDisplay = document.querySelector(".totalDonutMultiplierCount");
const valueOfMult = document.querySelector(".earnedPerClick");
const autoClickCostDisplay = document.querySelector(".autoClickerCostDisplay");
const donMultCostDisplay = document.querySelector(".multCostDisplay");
const restartGameBtn = document.querySelector(".restartGameBtn");


addDonutBtn.addEventListener("click", () => {
  donutMaker.addToDonutCount();
})

addAutoClickBtn.addEventListener("click", () =>{
  donutMaker.addToAutoClickerCount();
})

addDonutMultBtn.addEventListener("click", () => {
  donutMaker.addToDonutMultCount();
})

const companyModal = document.querySelector(".companyModal");
const companyBtn = document.querySelector(".companyButton");
const companyClose = document.querySelector(".companyClose");
companyModal.style.display = "none";

companyBtn.addEventListener("click", () =>{
  companyModal.style.display = "block";
})

companyClose.addEventListener("click", () =>{
  companyModal.style.display = "none";
})

const devModal = document.querySelector(".developerModal");
const devButton = document.querySelector(".developerInfoBtn");
const devClose = document.querySelector(".devClose");
devModal.style.display = "none";

devButton.addEventListener("click", () =>{
  devModal.style.display = "block";
})
devClose.addEventListener("click", () => {
  devModal.style.display = "none";
})

restartGameBtn.addEventListener("click", () => {
  window.location.reload();
})




