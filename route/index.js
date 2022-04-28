/** Authentication MiddleWares*/
const authMW = require('../middleware/auth/authMW');
const inverseAuthMW = require('../middleware/auth/inverseAuth');
const loginMW = require('../middleware/auth/loginMW');
const regMW = require('../middleware/auth/regMW');
const forgottenpwMW = require('../middleware/auth/forgottenpwMW');
const logoutMW = require('../middleware/auth/logoutMW');
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

const UserModel = require('../models/user');
const VillageModel = require('../models/village');
const KnightModel = require('../models/knight');
const attackMW = require('../middleware/battle/attackMW');

module.exports = function (app) {
    const objRepo = {
        UserModel: UserModel,
        VillageModel: VillageModel,
        KnightModel: KnightModel
    };
    
    app.get('/village',
        authMW(objRepo),
        getVillagesMW(objRepo, true),
        renderMW(objRepo, 'villagelist'));

    app.use('/village/new',
        authMW(objRepo),
        saveVillageMW(objRepo),
        renderMW(objRepo, 'editvillage'));
    
    app.get('/village/del/:villageid',
        authMW(objRepo),
        getVillageMW(objRepo),
        getKnightsMW(objRepo),
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
        renderMW(objRepo, 'editvillage'));
    
    app.use('/village/addknight/:villageid',
        authMW(objRepo),
        getVillageMW(objRepo),
        saveKnightMW(objRepo),
        renderMW(objRepo, 'editknight'));

    app.use('/knight/:villageid/:knightid/edit',
        authMW(objRepo),
        getVillageMW(objRepo),
        getKnightMW(objRepo),
        saveKnightMW(objRepo),
        renderMW(objRepo, 'editknight'));    

    app.get('/knight/:villageid/:knightid/del',
        authMW(objRepo),
        getVillageMW(objRepo),
        getKnightMW(objRepo),
        delKnightMW(objRepo));

    app.use('/village/attack/:villageid',
        authMW(objRepo),
        getVillageMW(objRepo),
        getVillagesMW(objRepo, false),
        renderMW(objRepo, 'attack'));

    app.get('/village/attack/:villageid/report',
        authMW(objRepo),
        getVillageMW(objRepo),
        getKnightsMW(objRepo),
        calculateBattleMW(objRepo),
        renderMW(objRepo, 'battlereport'));
        
    app.use('/forgottenpassword',
        inverseAuthMW(objRepo),
        forgottenpwMW(objRepo),
        renderMW(objRepo,'forgottenpassword'));
    
    app.use('/registration',
        inverseAuthMW(objRepo),
        regMW(objRepo),
        renderMW(objRepo, 'registration'));

    app.use('/logout',
        logoutMW(objRepo));

    app.use('/',
        inverseAuthMW(objRepo),
        loginMW(objRepo),
        renderMW(objRepo, 'login'));

};