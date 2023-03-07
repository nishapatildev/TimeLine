import { LoggerService } from "../lib/logger/log4jsLogger";

export let logger: LoggerService;

export function initLogger(type:string):void {
  logger = new LoggerService(type);  
}