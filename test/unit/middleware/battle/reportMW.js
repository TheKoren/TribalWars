var expect = require('chai').expect;
const { italic } = require('colors');
var reportMW = require('../../../../middleware/battle/reportMW');

describe('report middleware ', function() {
    it('should return a battle result', function(done) {
        const mw = reportMW({});

        const reqMock = {
            session: {
                result: true
            }
        };

        var resMock = {
            locals: {}
        };

        mw(reqMock,resMock,
        () => {
            expect(resMock.locals).to.be.eql({result: true});
            done();
        });
    });
    it('should return error as theres no valid result for the battle', function(done) {
        const mw = reportMW({});

        const reqMock = {
            session: {
                result: false
            }
        };

        var resMock = {
            locals: {}
        };

        mw(reqMock,resMock,
        () => {
            expect(resMock.locals).to.be.eql({error: "No valid result for battle!"});
            done();
        });
    });
});