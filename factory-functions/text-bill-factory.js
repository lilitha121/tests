function TextBillTotal() {

    var callPrice = 0;
    var smsPrice = 0;
    var grandPrice = 0;

    // function getCallPrice() {
    //     return callPrice;
    // }
    // function getSmsPrice() {
    //     return smsPrice;
    // }

    function text(type) {
        if (type === "sms") {
            smsPrice += 0.75;
        } else if(type === "call") {
            callPrice += 2.75;
        }
    }
    // function getGrandPrice() {
    //     return grandPrice;
    // }
    // function getTotalCost1(){
    //    return callCostTotal += smsCostTotal;
    //  }
    function getGrandPrice() {
       grandPrice = callPrice + smsPrice;
        return grandPrice;
    }
    function getTotalCallCost1(){
    return callPrice;
    }
      function getTotalSmsCost1(){
          return smsPrice;
     }
    //function sendSms1(){
    //smsCostTotal += theSmsCost;
    //}
    function colourPrice(){
    if (getGrandPrice() >= 50){
        // adding the danger class will make the text red
        return ("danger");
    }
    else if (getGrandPrice() >= 30){
        return ("warning");
    }
}
    return {

        getTotalCallCost1,
        getTotalSmsCost1,
        getGrandPrice,
        text,
        colourPrice
        // getTotalCost1,



    }
}
