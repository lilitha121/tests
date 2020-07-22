function RadioBillTotal() {

    var theCallCost = 2.75;
    var theSmsCost = 0.75;
    var callCostTotal = 0;
    var smsCostTotal = 0;
    var theWarningLevel = 30;
    var theCriticalLevel = 50;
    //settingBill.setSmsCost(0.80);



    function getCallCost1() {
        return theCallCost;
    }
    function getSmsCost1() {
        return theSmsCost;
    }
    function getWarningLevel1() {
        return theWarningLevel;
    }
    function getCriticalLevel1() {
        return theCriticalLevel;
    }
    function makeCall1() {
        callCostTotal += theCallCost;

        // alert( callCostTotal)
    }
   
    function getTotalCost1() {
        return callCostTotal += smsCostTotal;
        
    }
   
    //   function getTotalSmsCost(){
    //       return 0;
    //  }
    function sendSms1() {
        smsCostTotal += theSmsCost;
        // alert( smsCostTotal)

    }
    function getTotalSmsCost1() {
        return smsCostTotal;
    }
    function getTotalCallCost1() {
        return callCostTotal;
    }
    function hasReachedCriticalLevel1() {
        return getTotalCost1() >= getCriticalLevel1();
    }
    // function totalClassName1() {
    //     if (getTotalCost() >= getCriticalLevel()) {
    //         return "critical";
    //     }
    // }
    function totalClassName1() {
        if (getTotalCost1() >=  getCriticalLevel1()) {
            return "danger";
        }
        else if (getTotalCost1() >= getWarningLevel1() ) {
            return "warning" ;
        }
    }
    return {

        getCallCost1,
        getSmsCost1,
        getWarningLevel1,
        getCriticalLevel1,
        makeCall1,
        getTotalCost1,
        getTotalCallCost1,
        getTotalSmsCost1,
        sendSms1,
        totalClassName1,
        hasReachedCriticalLevel1


    }
}