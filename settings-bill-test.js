describe("The values of the button for billWithSettings factory function", function () {
    it("should be able to set the call cost ", function () {
        let settingBill = billWithSettings();
        settingBill.setCallCost(1.85);
        assert.equal(1.85, settingBill.getCallCost());
        assert.equal(0.00, settingBill.getTotalCost());


        let settingBill2 = billWithSettings();
        settingBill2.setSmsCost(0.80);
        assert.equal(0.80, settingBill2.getSmsCost());
        assert.equal(0.00, settingBill2.getTotalCost());

    })
    it("should be able  to set call and sms cost", function () {
        let settingBill = billWithSettings();
        settingBill.setCallCost(1.85);
        settingBill.setSmsCost(0.80);
        assert.equal(0.80, settingBill.getSmsCost());
        assert.equal(1.85, settingBill.getCallCost());
        assert.equal(0.00, settingBill.getTotalCost());

        let settingBill2 = billWithSettings();
        settingBill2.setCallCost(1.85);
        settingBill2.setSmsCost(0.80);
        assert.equal(0.80, settingBill2.getSmsCost());
        assert.equal(1.85, settingBill2.getCallCost());
        assert.equal(0.00, settingBill2.getTotalCost());


    });
    it("should be able to set warning level", function () {
        let settingBill = billWithSettings();
        settingBill.setWarningLevel(20)
        assert.equal(20, settingBill.getWarningLevel());

        let settingBill2 = billWithSettings();
        settingBill.setWarningLevel(20)
        assert.equal(0, settingBill2.getWarningLevel());
    });
    it("should be able to set critical level", function () {
        let settingBill = billWithSettings();
        settingBill.setCriticalLevel(20)
        //assert.equal(20, settingBill.setWarningLevel());

        let settingBill2 = billWithSettings();
        settingBill.setCriticalLevel(20)
        //assert.equal(20, settingBill2.setCriticalLevel());
    });
    describe("use values", function () {
        it("should be able to set the call cost ", function () {
            let settingBill = billWithSettings();
            settingBill.setCriticalLevel(10);
            settingBill.getCallCost(1.85);
            assert.equal(0.00, settingBill.getCallCost());

            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            assert.equal(0.00, settingBill.getTotalCost())
            assert.equal(0.00, settingBill.getTotalCallCost())
            assert.equal(0.00, settingBill.getTotalSmsCost())


        })
        it("should be able to send two sms at 0.80 each", function () {
            let settingBill = billWithSettings();
            settingBill.setCriticalLevel(10);
            settingBill.getCallCost(1.85);
            settingBill.getSmsCost(0.80);

            settingBill.sendSms();
            //settingBill.sendSMS();


            assert.equal(0.00, settingBill.getTotalCost())
            assert.equal(0.00, settingBill.getTotalCallCost())
            assert.equal(0.00, settingBill.getTotalSmsCost())

        })
        it("should be able to send two sms at 0.80 each and one call at 1.85", function () {
            let settingBill = billWithSettings();
            settingBill.setCriticalLevel(10);
            settingBill.getCallCost(1.85);
            settingBill.getSmsCost(0.80);

            settingBill.sendSms();
            settingBill.makeCall();
            //settingBill.sendSMS();


            assert.equal(0.00, settingBill.getTotalCost());
            assert.equal(0.00, settingBill.getTotalCallCost());
            assert.equal(0.00, settingBill.getTotalSmsCost());
        })
        describe("critical and warning levels", function () {
            it("should be able to return class name 'warning' if warning level is reched ", function () {
                let settingBill = billWithSettings();
                settingBill.setCriticalLevel(10);
                settingBill.setCallCost(1.85);
                settingBill.setSmsCost(0.85);
                settingBill.setWarningLevel(5);

                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();
                settingBill.makeCall();
                //assert.equal("warning", settingBill.totalClassName())


            });
        });

        it("should be able to return class name 'critical' if critical level is reched ", function () {
            let settingBill = billWithSettings();
            settingBill.setCallCost(3.50);
            settingBill.setSmsCost(0.80);
            settingBill.setWarningLevel(10);
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            // assert.equal("critical", settingBill.totalClassName())

        });
        it("should stop inreasing Total call cost if critical level is reched ", function () {
            let settingBill = billWithSettings();
            settingBill.setCallCost(3.50);
            settingBill.setSmsCost(0.80);
            settingBill.setWarningLevel(10);
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            //assert.equal("critical", settingBill.totalClassName())
            assert.equal(0, settingBill.getTotalCost())
        });
    });
});