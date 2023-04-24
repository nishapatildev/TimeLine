import express, { Request, Response } from 'express';
import { TransXpedia } from '../lib/interfaces/Common.interfaces';
import { logger } from '../utils/logger';
import { TransXpediaTemplate } from '../utils/transXpedia';
import { sendToClient } from '../utils/utils';
import { validateSchema } from '../utils/validation.func';
import { userData_schema } from '../validations/login.validation';
import { UserData } from '../lib/dto/branch.dto'
import { UserService } from '../services/login.service';
import { errorList } from "../utils/error";
import { userDataLogin } from '../repositories/login.repository';


const router = express.Router();

// Router for Fetching branch List
router.post('/login', async (req: Request, res: Response) => {
   

    const TransXpedia: TransXpedia = new TransXpediaTemplate(req, res);
    try {

        logger.info(TransXpedia, 'FROM CLIENT', TransXpedia.req.body);
        validateSchema<UserData>(userData_schema, TransXpedia.req.body)
        //console.log("TransXpedia.req.body", TransXpedia.req.body.userName);
        let userData:any  = await UserService.userLogin(TransXpedia)
       // console.log("userData.username",userData.username);
        
        let responseJson : any=''
        
        if( userData && userData.username == TransXpedia.req.body.userName){
            responseJson = {
                errorCode: "00",
                errorMsg: "success",
            }
            
        }else{
            responseJson = {
                errorCode: "201",
                errorMsg: "USER NOT FOUND!",
            } 
        }
        console.log("responseJson",responseJson);
        
        sendToClient(res, responseJson, TransXpedia)
        
    }
    catch (err: any) {
        sendToClient(res, err, TransXpedia)
    }
})


export default router;

