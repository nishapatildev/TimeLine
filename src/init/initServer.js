import config from '../../config/config';
import { AppConfig } from '../lib/interfaces/Common.interfaces';
import { initLogger } from '../utils/logger';
import {db} from './mongoDB'

export let appConfig;

export function initServer(){
  return new Promise((resolved, rejected) => {
    try {
      
      db().then(() => {

        console.log("DB connection established successfully!")
        return resolved();
      }).catch((error) => rejected(error))
    } catch (e) {
      return rejected(e);
    }
  });
}

function readConfig() {
  appConfig = config;
}



