import { Request, Response } from "express";

export interface AppConfig {
    host: string,
    port: number,
    serverCommType: string,
    bankConfig: {
        bankName: string,
        bankCode: string,
        mcc : string,
        posCode: string,
        posEntryMode: string,
        cbsTerminalId: string,
        acqInstCode: string,
        iin: string,
        rupayIinList: string[]
    },
    mongoDbConfig : {
        host : string;
        port : number;
        username : string;
        password : string;
    }



}

export interface CommonError {
    errorObject: ErrorObject;
    errorDesciption: string;
    systemError: any;
}

export interface ErrorObject {
    errorCode: string;
    errorMsg: string;
}

export interface TransXpedia {
    enrollmentGatewayResponse: any;
    req: Request,
    res: Response,
    service: string,
    uuid: string,
    stan: string,
    rrn: string,
    userData: any,
    demographic : any,
    dateRecords: any,
    transaction_data : any
    rd_data : any
    additional_data : any
    results : any,
    custSign : any
  

}


