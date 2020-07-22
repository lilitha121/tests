function calculateBill(bill) {

    var billTotal = 0;
    //  * this calculate.totalBill(billTypeEntered)
    //function should read the string value entered - split it on a comma.
    var billItems = bill.split(',')
    //  * loop over all the entries in the the resulting list
    for (var i = 0; i < billItems.length; i++) {
        var billItemType = billItems[i].trim();

        //  * check if it is a call or an sms and 
        // add the right amount to the overall total
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