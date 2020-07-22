// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const callsTotalElem = document.querySelector(".callTotalOne");
// get reference to the sms total
const smsTotalElem = document.querySelector(".smsTotalOne");
// get reference to the overall total
const totalCostElem = document.querySelector(".totalOne");
//create a variable that will keep track of the total bill
var callsTotal1 = 0;
var smsTotal1 = 0;
 var textBill = TextBillTotal()
//add an event listener for when the add button is pressed
function textBillTotal(){
  
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value;
    textBill.text(billTypeEntered)
    // update the correct total
    // if (billTypeEntered === "call"){
    //     callsTotal1 += 2.75
    // }
    // else if (billTypeEntered === "sms"){
    //     smsTotal1 += 0.75;
    //}
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = textBill.getTotalCallCost1().toFixed(2);
    smsTotalElem.innerHTML =textBill.getTotalSmsCost1().toFixed(2);
    //var totalCost1 = callsTotal1 + smsTotal1;
    totalCostElem.innerHTML = textBill.getGrandPrice().toFixed(2);
    textBillTotalColor();
};

function textBillTotalColor()  {


    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");
   
    totalCostElem.classList.add(textBill.colourPrice());

    //color the total based on the criteria
}
 textTotalAddBtn.addEventListener("click",textBillTotal);

