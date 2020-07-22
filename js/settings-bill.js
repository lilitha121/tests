const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields

const callsTotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
const totalCostSettingsElement = document.querySelector(".totalSettings");
//get a reference to the add button
const addBtnPrimary = document.querySelector(".xbtn");
const updateBtnElement = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callsCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");


// create a variables that will keep track of all three totals.
// var totalCall = 0;
// var totalSmes = 0;
// var totalBills = 0;
//create variables that will keep track of all the settings total
// var callsCostSetting = 0;
// var smsCostSetting = 0;
// var warningLevelSetting = 0;
// var criticalLevelSetting = 0;
var callCostSettings = billWithSettings()
function updateSettings() {
    callCostSettings.setCallCost(Number(callsCostSettingElement.value))
    callCostSettings.setSmsCost(Number(smsCostSettingElement.value))
    callCostSettings.setWarningLevel(Number(warningLevelSettingElement.value))
    callCostSettings.setCriticalLevel(Number(criticalLevelSettingElement.value))
    settingsColor()
}


//add an event listener for when the 'Update settings' button is pressed
function radioBillSettingTotal() {
    // if (totalBills < criticalLevelSetting) {
        //in the event listener get the value from the billItemTypeRadio radio buttons
        var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        if (checkedRadioBtn) {
            var billItemTypeWithSettings = checkedRadioBtn.value;
            //. console.log(billItemTypeWithSettings);

            if (billItemTypeWithSettings === "call") {
                callCostSettings.makeCall()
            }
            else if (billItemTypeWithSettings === "sms") {
                callCostSettings.sendSms()
            }
            // * add the appropriate value to the call / sms total
            callsTotalSettingsElement.innerHTML = callCostSettings.getTotalCallCost().toFixed(2);
            smsTotalSettingsElement.innerHTML = callCostSettings.getTotalSmsCost().toFixed(2);

            totalCostSettingsElement.innerHTML = callCostSettings.getTotalCost().toFixed(2);
            settingsColor();

        }
    }
// }
// * add the appropriate value to the overall total
function settingsColor() {

    totalCostSettingsElement.classList.remove("warning");
    totalCostSettingsElement.classList.remove("danger");
    totalCostSettingsElement.classList.add(callCostSettings.totalClassName());
    //color the total based on the criteria
    //   if (totalBills >= criticalLevelSetting){
    //     // adding the danger class will make the text red
    //     //totalCostSettingsElement.classList.add("danger");
    // }
    // else if (totalBills >= warningLevelSetting){
    //     totalCostSettingsElement.classList.add("warning");

    // }      

}
addBtnPrimary.addEventListener("click", radioBillSettingTotal);
updateBtnElement.addEventListener("click", updateSettings);


// * add nothing for invalid values that is not 'call' or 'sms'.



// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.

// * check the value thresholds and display the total value in the right color.
