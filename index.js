(function(){
    'use strict';

    const TadpolesLogger = require('tadpoles-logger');

    exports.handler = function index(event, context, callback) {
        let logBuilder = TadpolesLogger.logBuilder;
        let logs = [
                logBuilder.buildSleepLog(),
                logBuilder.buildBathroomLog(),
                logBuilder.buildFoodLog()
            ];
        
        let babyLogger = TadpolesLogger.babyLogger;
        babyLogger.log(logs);
    };
})();