describe("The values of the button for radioBillTotal factory function", function () {
    it("should be able to get the call cost ", function () {
        let radioBill = radioBillTotal();
        //radioBill.getCallCost(0.75);
        assert.equal(2.75, radioBill.getCallCost1());
        assert.equal(0.00, radioBill.getTotalCost1());


        let radioBill2 = radioBillTotal();

        assert.equal(0.75, radioBill2.getSmsCost1());
        assert.equal(0.00, radioBill2.getTotalCost1());

    })
    it("should be able to get call and sms cost", function () {
        let radioBill = radioBillTotal();
        //radioBill.getCallCost(2.75);
        //radioBill.getSmsCost(0.75);
        assert.equal(0.75, radioBill.getSmsCost1());
        assert.equal(2.75, radioBill.getCallCost1());
        assert.equal(0.00, radioBill.getTotalCost1());

        let radioBill2 = radioBillTotal();
        //radioBill2.setSmsCost(0.75);
        assert.equal(0.75, radioBill2.getSmsCost1());
        assert.equal(2.75, radioBill2.getCallCost1());
        assert.equal(0.00, radioBill2.getTotalCost1());
    })
    it("should be able to get warning level", function () {
        let radioBill = radioBillTotal();
        //radioBill.setWarningLevel(20)
        assert.equal(30, radioBill.getWarningLevel1());

        let radioBill2 = radioBillTotal();
        //radioBill2.setWarningLevel(20)
        assert.equal(30, radioBill2.getWarningLevel1());
    });
    it("should be able to get critical level", function () {
        let radioBill = radioBillTotal();
        //settingBill.setCriticalLevel(20)
        assert.equal(50, radioBill.getCriticalLevel1());

        let radioBill2 = radioBillTotal();
        //settingBill.getCriticalLevel(20)
        assert.equal(50, radioBill2.getCriticalLevel1());
    });
});