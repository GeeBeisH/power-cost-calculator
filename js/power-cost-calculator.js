const costPerKWH = (price, efficiency, cycles, energyKWH, dischargeDepth) =>{
    return (price/(efficiency*cycles*energyKWH*dischargeDepth))*1000;
}

let slider1 = document.getElementById("powerRange");
let powerOutput = document.getElementById("powerSliderInfo");

let energySlider = document.getElementById("energyRange");
let energyOutput = document.getElementById("energySliderInfo");

let chargeTime = document.getElementById("chargeTime");
var solarMD_cost = 0.00;

var competitor_cost = 21.00;

document.getElementById("solarmd-competitor-cost-value").textContent = competitor_cost;

//Event listener - Mouse up
document.getElementById("powerRange").addEventListener("mouseup", mouseUp) ||
document.getElementById("energyRange").addEventListener("mouseup", mouseUp);

powerOutput.innerHTML = slider1.value;
energyOutput.innerHTML = energySlider.value;

slider1.oninput = function() {
powerOutput.innerHTML = this.value;
}

//Update Energy Slider on slider event
function mouseUp() {
let stepMultiplier = slider1.value/60;

//Dynamic energy slider output
energySlider.step = (stepMultiplier*67.2).toFixed(1);
energySlider.min = (stepMultiplier*67.2).toFixed(1);
energySlider.max = (stepMultiplier*268.8).toFixed(1);

energyOutput.innerHTML = energySlider.value;
powerOutput.innerHTML = slider1.value;

//Charge time calculation
chargeTime.innerHTML = (energyOutput.innerHTML/powerOutput.innerHTML).toFixed(2);

solarMD_cost = (costPerKWH(500000, 92, 8, energySlider.value, 100)).toFixed(2);

document.getElementById("solarmd-cost-value").textContent = solarMD_cost;
if (solarMD_cost > competitor_cost) {
        document.getElementById("solarmd-costing").style.color = "#ff0000";
        document.getElementById("solarmd-competitor-costing").style.color = "#009900";
    } else {
        document.getElementById("solarmd-costing").style.color = "#009900";
        document.getElementById("solarmd-competitor-costing").style.color = "#ff0000";
    }

}

energySlider.oninput = function() {
    energyOutput.innerHTML = this.value;
    }

// Cost per kW calculation





