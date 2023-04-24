let {config} = require('../../config/config');

export let mongoDB = `mongodb://${config.mongoDbConfig.host}:${config.mongoDbConfig.port}/${config.mongoDbConfig.username}`;

