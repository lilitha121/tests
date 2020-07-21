function TextBillTotal() {


    var callPrice = 2.75;
    var smsPrice = 0.75;
    var grandPrice = 0;




    function getCallPrice() {
        return callPrice;
    }
    function getSmsPrice() {
        return smsPrice;
    }
    function getGrandPrice() {
        return grandPrice;
    }
    // function getTotalCost1(){
    //    return callCostTotal += smsCostTotal;
    //  }
     function getGrandPrice(){
        return callPrice + smsPrice;
    }
   //function getTotalCallCost1(){
      //return callCostTotal;
    // }
    //   function getTotalSmsCost(){
    //       return 0;
    //  }
    //function sendSms1(){
    //smsCostTotal += theSmsCost;
    //}

    return {

        getCallPrice,
        getSmsPrice,
        getGrandPrice,
        // getTotalCost1,



    }
}
