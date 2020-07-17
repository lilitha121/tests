function CalculateBill(bill){

    var billTotal = 0
var billItems = bill.split(',')
for (var i = 0; i < billItems.length; i++) {
    var billItemType = billItems[i].trim();
    
if (billItemType === "call") {
    billTotal += 2.75;
} else if (billItemType === "sms") {
    billTotal += 0.65;
}
}
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
var roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal;

    
    }
    