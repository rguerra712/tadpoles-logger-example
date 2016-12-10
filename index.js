(function(){
    'use strict';

    const TadpolesLogger = require('tadpoles-logger');

    let logBuilder = TadpolesLogger.logBuilder;
    let logs = [
            logBuilder.buildSleepLog(),
            logBuilder.buildBathroomLog(),
            logBuilder.buildFoodLog()
        ];
    
    let babyLogger = TadpolesLogger.babyLogger;
    babyLogger.log(logs);
})();