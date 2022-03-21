export default class DonutMaker {
    constructor(donutCount, donutMultiplier, autoClicker){
    this.donutCount = 0;
    this.donutMultiplier = 0;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
    this.donutMultCost = 10;
    }

    addToDonutCount() {
        this.donutCount += Math.pow(1.2, this.donutMultiplier);
    }

    addToAutoClickerCount(){
        if (this.donutCount >= this.autoClickerCost){
        this.autoClicker ++;
        this.donutCount -= this.autoClickerCost;
        this.autoClickerCost = this.autoClickerCost*1.1;
    }
    console.log("Not enough donuts");
}
    activateAutoClickers(){
        for(let i=0; i<this.autoClicker; i++){
            this.addToDonutCount();
        }
        console.log(this.autoClicker);
    }

    addToDonutMultCount() {
        if (this.donutCount >= this.donutMultCost){
        this.donutMultiplier ++;
        this.donutCount -= this.donutMultCost;
        this.donutMultCost = this.donutMultCost*1.2;
    }
    else console.log("Not enough donuts to purchase a multiplier");
       
}

    disableAutoClicker(){
        const autoClickerBtn = document.querySelector(".autoClicker");
        if(this.donutCount < this.autoClickerCost) {
            autoClickerBtn.disabled = true;
        }
        else autoClickerBtn.disabled = false;
    }

    disableDonutMult(){
        const donMultBtn = document.querySelector(".donutMultiplier");
        if(this.donutCount < this.donutMultCost){
            donMultBtn.disabled = true;
        }
        else donMultBtn.disabled = false;
    }
}
    