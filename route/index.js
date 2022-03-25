/** Authentication MiddleWares*/
const authMW = require('../middleware/auth/authMW');
const checkUserCredentialsMW = require('../middleware/auth/checkUserCredentialsMW');
const getUserCredentialsMW = require('../middleware/auth/getUserCredentialsMW');
const saveUserCredentialsMW = require('../middleware/auth/saveUserCredentialsMW');
/** Village MiddleWares */
const getVillageMW = require('../middleware/village/getVillageMW');
const getVillagesMW = require('../middleware/village/getVillagesMW');
const saveVillageMW = require('../middleware/village/saveVillageMW');
const delVillageMW = require('../middleware/village/delVillageMW');
/**Knight MiddleWares */
const getKnightMW = require('../middleware/knight/getKnightMW');
const getKnightsMW = require('../middleware/knight/getKnightsMW');
const saveKnightMW = require('../middleware/knight/saveKnightMW');
const delKnightMW = require('../middleware/knight/delKnightMW');
/**Battle MiddleWares */
const calculateBattleMW = require('../middleware/battle/calculateBattleMW');
/**Other MiddleWares*/
const renderMW = require('../middleware/renderMW');

module.export = function (app) {
    const objRepo = {};

    app.use('/',
        getUserCredentialsMW(objRepo),
        checkUserCredentialsMW(objRepo),
        renderMW(objRepo, 'index'));

    app.use('/forgottenpassword',
        getUserCredentialsMW(objRepo),
        saveUserCredentialsMW(objRepo),
        renderMW(objRepo,'forgottenpassword'));
    
    app.use('/newaccount',
        getUserCredentialsMW(objRepo),
        saveUserCredentialsMW(objRepo),
        renderMW(objRepo, 'registration'));
    
    app.get('/village',
        authMW(objRepo),
        getVillagesMW(objRepo),
        renderMW(objRepo, 'villagelist'));

    app.use('/village/new',
        authMW(objRepo),
        saveVillageMW(objRepo),
        renderMW(objRepo, 'newvillage'));
    
    app.get('/village/del/:villageid',
        authMW(objRepo),
        getVillageMW(objRepo),
        delVillageMW(objRepo));

    app.get('/village/view/:villageid',
        authMW(objRepo),
        getVillageMW(objRepo),
        getKnightsMW(objRepo),
        renderMW(objRepo, 'villageview'));

    app.use('/village/edit/:villageid',
        authMW(objRepo),
        getVillageMW(objRepo),
        saveVillageMW(objRepo),
        renderMW(objRepo, 'renamevillage'));
    
    app.use('/village/addknight/:villageid',
        authMW(objRepo),
        saveKnightMW(objRepo),
        renderMW(objRepo, 'newknight'));

    app.use('/knight/:villageid/:knightid/edit',
        authMW(objRepo),
        getVillageMW(objRepo),
        getKnightMW(objRepo),
        saveKnightMW(objRepo),
        renderMW(objRepo, 'editknight'));    

    app.get('/knight/:villageid/:knightid/del',
        authMW(objRepo),
        getKnightMW(objRepo),
        delKnightMW(objRepo));

    app.use('/attack/:villageid',
        authMW(objRepo),
        getVillagesMW(objRepo),
        renderMW(objRepo, 'attack'));

    app.get('/attack/:villageid/report',
        authMW(objRepo),
        getVillageMW(objRepo),
        getKnightsMW(objRepo),
        calculateBattleMW(objRepo),
        renderMW(objRepo, 'battlereport'));
};