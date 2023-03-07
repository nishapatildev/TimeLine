var {config} = require('../../config/config');

export var mongoDB = `mongodb://${config.mongoDbConfig.host}:${config.mongoDbConfig.port}/${config.mongoDbConfig.username}`;

