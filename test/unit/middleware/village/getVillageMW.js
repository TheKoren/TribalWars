var expect = require('chai').expect;
const { italic } = require('colors');
var getVillageMW = require('../../../../middleware/village/getVillageMW');

describe('getVillage middleware ', function() {
    it('should return village', function(done) {
        const mw = getVillageMW({
            VillageModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '1', _user: '2'});
                    cb(null, 'mockvillage');
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
            params:{
                villageid: '1'
            },
            session:{
                user_id: '2'
            }
        },resMock,
        (err) => {
            expect(err).to.be.equal(undefined);
            expect(resMock.locals).to.be.eql({village: 'mockvillage'});
            done();
        });
    });
    it('should call next error when there is a db error', function(done) {
        const mw = getVillageMW({
            VillageModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '1', _user: '2'});
                    cb('dberror', null);
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
            params:{
                villageid: '1'
            },
            session:{
                user_id: '2'
            }
        },resMock,
        (err) => {
            expect(err).to.be.equal('dberror');
            done();
        });
    });
    it('should return when no village found for the given id in the db', function(done) {
        const mw = getVillageMW({
            VillageModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '1', _user: '2'});
                    cb(undefined, null);
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
            params:{
                villageid: '1'
            },
            session:{
                user_id: '2'
            }
        },resMock,
        (err) => {
            expect(err).to.be.equal(undefined);
            expect(resMock.locals).to.be.eql({});
            done();
        });
    });
});