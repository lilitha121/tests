describe("calculateBill button is pressed to show the total phone bill for the string entered. ", function () {
    it("should be able to get the call and sms cost ", function () {

        assert.equal(CalculateBill("call,sms,call"), 6.15);



    });
});