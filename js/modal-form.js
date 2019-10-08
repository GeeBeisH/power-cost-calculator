function openForm() {
    document.getElementById("myForm").style.display = "block";
    // document.getElementById("myForm").style.top = `${ev.clientY - 20}px`;
    // document.getElementById("myForm").style.left = `${ev.clientX - 20}px`;
    document.getElementById("remindUser").style.visibility = "hidden";

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