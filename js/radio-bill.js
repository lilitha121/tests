const callsElement = document.querySelector(".callTotalTwo");
// get reference to the sms total
const smsElement = document.querySelector(".smsTotalTwo");
// get reference to the overall total
const totalElement = document.querySelector(".totalTwo");

const addBtnRadioElement = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callsTotal2 = 0;
var smsTotal2 = 0;
//add an event listener for when the add button is pressed
var billRadio = RadioBillTotal()
function radioBillTotal() {

    //    get the value entered in the billType textfield
    var checkedRadioBtnBill = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtnBill) {
        var billItemType = checkedRadioBtnBill.value
        // billItemType will be 'call' or 'sms'

        // update the correct total
        if (billItemType === "call") {
            billRadio.makeCall1()
        }
        else if (billItemType === "sms") {
            billRadio.sendSms1()
        }

    }


    //update the totals that is displayed on the screen.
    callsElement.innerHTML = billRadio.getTotalCallCost1().toFixed(2);
    smsElement.innerHTML = billRadio.getTotalSmsCost1().toFixed(2);
    // var totalCost2 = callsTotal2 + smsTotal2;
    totalElement.innerHTML = billRadio.getTotalCost1().toFixed(2);
    radioBillTotalColor();
};
function radioBillTotalColor() {
    totalElement.classList.remove("danger");
    totalElement.classList.remove("warning");
    totalElement.classList.add(billRadio.totalClassName1());

    //color the total based on the criteria
    // if (totalCost2 >= 50) {
    //     // adding the danger class will make the text red
    // }
    // else if (totalCost2 >= 30) {
    //     totalElement.classList.add("warning");
    // }
}
addBtnRadioElement.addEventListener("click", radioBillTotal);
