(function(){
    'use strict';

    const TadpolesLogger = require('tadpoles-logger');

    exports.handler = function index(event, context, callback) {
        let logBuilder = TadpolesLogger.logBuilder;
        let foodLog = logBuilder.buildFoodLog();
        foodLog.meal_type = 'bottle';
        foodLog.amount = 3;
        foodLog.contents = "breastmilk";
        let logs = [
                logBuilder.buildSleepLog(),
                logBuilder.buildBathroomLog(),
                foodLog
            ];
        
        let babyLogger = TadpolesLogger.babyLogger;
        babyLogger.log(logs);
    };
})();