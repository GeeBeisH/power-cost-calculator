var batteryModelSelected = null;
var productSelect = document.getElementsByName("battery-model");

const batteryModelSelect = () => {
    if (productSelect[0].checked) {
        batteryModelSelected = 0;
    } 
    else if (productSelect[1].checked) {
        batteryModelSelected = 1;
    }
    else if (productSelect[2].checked) {
        batteryModelSelected = 2;
    }
    else if (productSelect[3].checked) {
        batteryModelSelected = 3;
    };
}

//! -- configure the information page -- !//!

//! -- build the form information page -- !//

//! -- request user info for information requested -- !//