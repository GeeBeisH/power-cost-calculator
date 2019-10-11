var gridSelected = null;
var outputSelected = null;

var onGridIcon = document.querySelector("#on-grid-icon");
var offGridIcon = document.querySelector("#off-grid-icon");

var selfConsumption = document.querySelector("#self-consumption");
var peakLoad = document.querySelector("#peak-load");
var hybridSystem = document.querySelector("#hybrid-system");

var selfConsumptionIcon = document.querySelector("#self-consumption-icon");
var peakLoadIcon = document.querySelector("#peak-load-icon");
var hybridSystemIcon = document.querySelector("#hybrid-system-icon");

var ss4037Choice = document.querySelector("#ss4037");
var ss4074Choice = document.querySelector("#ss4074");
var ss202Choice = document.querySelector("#ss202");
var mssChoice = document.querySelector("#mss");

var submitForm = document.querySelector("#submit-section");

submitForm.style.display = "none";

//Grid Selection
const onGridSelect = () => {
    onGridIcon.style.backgroundColor = "#FFB600";
    offGridIcon.style.backgroundColor = "transparent";
    gridSelected = true;

    selfConsumption.style.display = "grid";
    peakLoad.style.display = "grid";
    hybridSystem.style.display = "none";

    outputSelected = null;
    selfConsumptionIcon.style.backgroundColor = "transparent";
    peakLoadIcon.style.backgroundColor = "transparent";
    hybridSystemIcon.style.backgroundColor = "transparent";

    ss4037Choice.style.display ="none";
    ss4074Choice.style.display ="none";
    ss202Choice.style.display ="none";
    mssChoice.style.display ="none";


};

const offGridSelect = () => {
    offGridIcon.style.backgroundColor = "#FFB600";
    onGridIcon.style.backgroundColor = "transparent";
    gridSelected = false;

    selfConsumption.style.display = "grid";
    peakLoad.style.display = "none";
    hybridSystem.style.display = "grid";

    outputSelected = null;
    selfConsumptionIcon.style.backgroundColor = "transparent";
    peakLoadIcon.style.backgroundColor = "transparent";
    hybridSystemIcon.style.backgroundColor = "transparent";

    ss4037Choice.style.display ="none";
    ss4074Choice.style.display ="none";
    ss202Choice.style.display ="none";
    mssChoice.style.display ="none";
};

// Listen for grid mouseclick selection
document.querySelector("#on-grid-icon").addEventListener("click", onGridSelector);
document.querySelector("#off-grid-icon").addEventListener("click", offGridSelector);

//OutputSelection
const selfConsumptionSelector = () => {
    selfConsumptionIcon.style.backgroundColor = "#FFB600";
    peakLoadIcon.style.backgroundColor = "transparent";
    hybridSystemIcon.style.backgroundColor = "transparent";
    

    if (gridSelected === false){
        outputSelected = 0;
        ss4037Choice.style.display ="none";
        ss4074Choice.style.display ="none";
        ss202Choice.style.display ="grid";
        mssChoice.style.display = "grid";
    } else {
        outputSelected = 1;
        ss4037Choice.style.display ="grid";
        ss4074Choice.style.display ="grid";
        ss202Choice.style.display ="none";
        mssChoice.style.display = "none";
    }
};


const peakLoadSelector = () => {
    selfConsumptionIcon.style.backgroundColor = "transparent";
    peakLoadIcon.style.backgroundColor = "#FFB600";
    hybridSystemIcon.style.backgroundColor = "transparent";
    outputSelected = 2;

    ss4037Choice.style.display ="none";
    ss4074Choice.style.display ="grid";
    ss202Choice.style.display ="none";
    mssChoice.style.display = "none";

};
const hybridSystemSelector = () => {
    selfConsumptionIcon.style.backgroundColor = "transparent";
    peakLoadIcon.style.backgroundColor = "transparent";
    hybridSystemIcon.style.backgroundColor = "#FFB600";
    outputSelected = 3;

    ss4037Choice.style.display ="none";
    ss4074Choice.style.display ="none";
    ss202Choice.style.display ="grid";
    mssChoice.style.display = "none";
};

// Listen for output mouseclick selection
selfConsumptionIcon.addEventListener("click", selfConsumptionSelector);
peakLoadIcon.addEventListener("click", peakLoadSelector);
hybridSystemIcon.addEventListener("click", hybridSystemSelector);

//BatterySelection
const ss4037Selector = () => {
    ss4037Choice.style.display ="";
    ss4074Choice.style.display ="";
    ss202Choice.style.display ="";
    // outputSelected = 0;

    // selfConsumption.style.display = "grid";
    // peakLoad.style.display = "grid";
    // hybridSystem.style.display = "none";

};
const ss4074Selector = () => {
    ss4037Choice.style.display ="";
    ss4074Choice.style.display ="";
    ss202Choice.style.display ="";
    // outputSelected = 2;

    // selfConsumption.style.display = "grid";
    // peakLoad.style.display = "grid";
    // hybridSystem.style.display = "none";

};
const ss202Selector = () => {
    ss4037Choice.style.display ="";
    ss4074Choice.style.display ="";
    ss202Choice.style.display ="";
    // outputSelected = 3;

    // selfConsumption.style.display = "grid";
    // peakLoad.style.display = "grid";
    // hybridSystem.style.display = "none";
};

// Listen for output mouseclick selection
selfConsumptionIcon.addEventListener("click", selfConsumptionSelector);
peakLoadIcon.addEventListener("click", peakLoadSelector);
hybridSystemIcon.addEventListener("click", hybridSystemSelector);

// Open and Close Form
// & Hide Reminder if active
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("remindUser").style.visibility = "hidden";
    location.hash = "popup-wrapper";    
    }
    
    function closeForm() {
    document.getElementById("myForm").style.display = "none";
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
}

function onGridSelector() {    
    onGridSelect();        
}
function offGridSelector() {
    offGridSelect();
}
