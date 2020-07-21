describe("textBill add button is pressed to update the appropriate total and the global total. ", function () {
    it("should be able to get the call price ", function () {
        let textBill = TextBillTotal();
        textBill.getCallPrice(2.75);
        assert.equal(2.75, textBill.getCallPrice());
        assert.equal(2.75, textBill.getCallPrice());



    })
    it("should be able to get sms price", function () {
        let textBill = TextBillTotal();
        //textBill.getCallCost(2.75);
        textBill.getSmsPrice(0.75);
        assert.equal(0.75, textBill.getSmsPrice());
        //assert.equal(2.75, textBill.getCallPrice());
        assert.equal(3.50, textBill.getGrandPrice());

        //let radioBill2 = radioBillTotal();
        //radioBill2.setSmsCost(0.75);
        //assert.equal(0.75, radioBill2.getSmsCost1());
        // assert.equal(2.75, radioBill2.getCallCost1());
        // assert.equal(0.00, radioBill2.getTotalCost1());
    })
    it("should be able to get call and sms price", function () {
        let textBill = TextBillTotal();
        textBill.getCallPrice(2.75);
        textBill.getSmsPrice(0.75);
        assert.equal(0.75, textBill.getSmsPrice());
        assert.equal(2.75, textBill.getCallPrice());
        assert.equal(3.50, textBill.getGrandPrice());
    
    })

});

