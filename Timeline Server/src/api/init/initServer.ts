import config from '../../config/config';
import { AppConfig } from '../lib/interfaces/Common.interfaces';
import { initLogger } from '../utils/logger';
import { mongoDB } from './mongodb';
export let appConfig: AppConfig;
var mongoose = require('mongoose');

export function initServer(): Promise<string | void> {
  return new Promise((resolved, rejected) => {
    try {
      readConfig()
      initLogger('file');
    
      mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(async () => {
        console.log("DB connection established successfully!")
        return resolved();
      }).catch((error: any) => rejected(error))

    
    } catch (e: any) {
      return rejected(e);
    }
  });
}

function readConfig(): void {
  appConfig = config;
}



