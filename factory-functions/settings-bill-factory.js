function billWithSettings() {

    var theCallCost = 0;
    var theSmsCost = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    //settingBill.setSmsCost(0.80);


    function setCallCost(callCost) {
        theCallCost = callCost;
    }
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }
    function getCallCost() {
        return theCallCost;
    }
    function getSmsCost() {
        return theSmsCost;
    }
    function getWarningLevel() {
        return theWarningLevel;
    }
    function getCriticalLevel() {
        return theCriticalLevel;
    }
    function makeCall() {
        if (!hasReachedCriticalLevel()) {
            callCostTotal += theCallCost;
        }
    }
    function getTotalSmsCost() {
        return 0;
    }
    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }
    function getTotalCallCost() {
        return callCostTotal;
    }
    function getTotalSmsCost() {
        return smsCostTotal;
    }
    function sendSms() {
        if (!hasReachedCriticalLevel()) {
            return smsCostTotal += theSmsCost;
        }
    }
    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();
    }
    function totalClassName() {
        if (getTotalCost() >= getCriticalLevel()) {
            return "danger";
        }
       else if (getTotalCost() >= getWarningLevel()) {
            return "warning";
        }
    }
    // function totalClassName() {
    //     if (getTotalCost() >= getWarningLevel()) {
    //         return "warning";
    //     }
    // }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        hasReachedCriticalLevel

    }
}
