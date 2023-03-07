import { AppConfig } from "../api/lib/interfaces/Common.interfaces";

export const config: AppConfig = {
    host: '127.0.0.1',
    port: 2233,
    serverCommType: 'http',
    bankConfig: {
        bankName: "CENTRAL BANK OF INDIA",
        bankCode: "CIU",
        acqInstCode: "110001",
        iin: "607115",
        mcc: "6012",
        posCode: "05",
        posEntryMode: "019",
        cbsTerminalId: "register",
        rupayIinList: []
    },
    mongoDbConfig : {
        host: "127.0.0.1",
        username: "timeline",
        password: "04lUHJMnXTEnfCBx8VBUpA==",
        port: 27017  
    }




    
    
}





export default config;
