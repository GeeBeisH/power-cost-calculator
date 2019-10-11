const costPerKWH = (price, efficiency, cycles, energyKWH, dischargeDepth) =>{
    return (price/(efficiency*cycles*energyKWH*dischargeDepth))*100000;
}
//! -- For much later -- !//
// setInputFilter(document.querySelectorAll(".numbersOnly"), function(value) {
//     return /^\d*\.?\d*$/.test(value);
//     });


let RRP = 500000;
let slider1 = document.getElementById("powerRange");
let powerOutput = document.getElementById("powerSliderInfo");

let energySlider = document.getElementById("energyRange");
let energyOutput = document.getElementById("energySliderInfo");

let chargeTime = document.getElementById("chargeTime");
var solarMD_cost = 0.00;

var competitor_cost = 0.00;
let competePrice = document.getElementById("competePrice");
let competeOutput = document.getElementById("competeOutput");
let competeEnergy = document.getElementById("competeEnergy");
let competeCycles = document.getElementById("competeCycles");
let competeEfficiency = document.getElementById("competeEfficiency");
let competeDOD = document.getElementById("competeDOD");
let competitorChargeTime = document.getElementById("competitorChargeTime");

document.querySelector("body").addEventListener("change", changeResults);

powerOutput.innerHTML = slider1.value;
energyOutput.innerHTML = energySlider.value;

slider1.oninput = function() {
powerOutput.innerHTML = this.value;
}

//Update Energy Slider on slider event
function changeResults() {    

let stepMultiplier = slider1.value/60;

//Dynamic energy slider output
energySlider.step = (stepMultiplier*67.2).toFixed(1);
energySlider.min = (stepMultiplier*67.2).toFixed(1);
energySlider.max = (stepMultiplier*268.8).toFixed(1);

energyOutput.innerHTML = energySlider.value;
powerOutput.innerHTML = slider1.value;

//Charge time calculation
chargeTime.innerHTML = (energyOutput.innerHTML/powerOutput.innerHTML).toFixed(2);

solarMD_cost = (costPerKWH(
        RRP, 
        92, 
        8000, 
        energySlider.value, 
        100
        )).toFixed(2);

competitor_cost = (costPerKWH(
        competePrice.value, 
        competeEfficiency.value, 
        competeCycles.value, 
        competeEnergy.value, 
        competeDOD.value
        )).toFixed(2);

competitorChargeTime.innerHTML = (competeEnergy.value/competeOutput.value).toFixed(2);

document.getElementById("solarmd-cost-value").textContent = solarMD_cost;

if (competePrice.value == "" || 
    competeOutput.value == "" ||
    competeEfficiency.value == "" || 
    competeCycles.value == "" ||
    competeEnergy.value == "" ||
    competeDOD.value == "") { 
    document.getElementById("remindUser").style.visibility = "visible";
} else {
    document.getElementById("remindUser").style.visibility = "hidden";
}


if (competitor_cost === "NaN" || competitor_cost === "Infinity") {
    toString(competitor_cost);
    competitor_cost = "..."
    document.getElementById("solarmd-competitor-cost-value").textContent = competitor_cost;       
    document.getElementById("solarmd-competitor-costing").style.color = "#0000ff";
    }else if (parseFloat(solarMD_cost) > parseFloat(competitor_cost)) { 
        document.getElementById("solarmd-competitor-cost-value").textContent = competitor_cost;       
        document.getElementById("solarmd-costing").style.color = "#ff0000";
        document.getElementById("solarmd-competitor-costing").style.color = "#009900";
    } else {
        document.getElementById("solarmd-competitor-cost-value").textContent = competitor_cost;
        document.getElementById("solarmd-costing").style.color = "#009900";
        document.getElementById("solarmd-competitor-costing").style.color = "#ff0000";
    }
}

energySlider.oninput = function() {
    energyOutput.innerHTML = this.value;
};