import { Response } from "express";
import { CommonError, ErrorObject, TransXpedia } from "../lib/interfaces/Common.interfaces";
import { errorList } from "./error";
import { logger } from "./logger";

export function maskCardNumber(unmaskedCardNo: string, transXpedia: TransXpedia) {
  try {
    if (unmaskedCardNo == '' || unmaskedCardNo == undefined) {
      return undefined;
    } else {

      const regex = new RegExp("[A-Z, a-z, 0-9]", "g")
      var maskedCardNo = unmaskedCardNo.replace(regex, "X");

      maskedCardNo = (maskedCardNo.slice(0, maskedCardNo.length - 4) + unmaskedCardNo.slice(-4).slice(-unmaskedCardNo.length))
      return maskedCardNo;
    }
  } catch (error) {
    logger.error(transXpedia, 'INVALID UIDAI NUMBER', error)
  }
}

export function dateformat(transXpedia: TransXpedia, unformatteddate: string) {
  try {

    if (unformatteddate == '' || unformatteddate == undefined) {
      return undefined
    } else {
      if (unformatteddate.includes("/")) {
        var resultdate: string = ""
        //console.log("unformatteddate", unformatteddate)
        var d = unformatteddate.substring(0, 2)
        var m = unformatteddate.substring(3, 5)
        var y = unformatteddate.substring(6, 9)
        var dash = "/"

        var resultdate = (((m.concat(dash)).concat(d)).concat(dash)).concat(y);
        var formattedDate = new Date(resultdate)
        return formattedDate

      }
      else {
        var resultdate: string = ""
       // console.log("unformatteddate", unformatteddate)
        var d = unformatteddate.substring(0, 2)
        var m = unformatteddate.substring(2, 4)
        var y = unformatteddate.substring(4, 7)
        var dash = "/"

        var resultdate = (((m.concat(dash)).concat(d)).concat(dash)).concat(y);
        var formattedDate = new Date(resultdate)
        return formattedDate

      }
    }

  } catch (error) {
    logger.error(transXpedia, 'INPUT DATE INVALID', error)
  }


}


export function frameErrorObject(systemError: any, errorObject: ErrorObject, errorDesciption: string) {
  const error: CommonError = {
    systemError,
    errorObject,
    errorDesciption,
    
  }
  return error;
}


export function sendToClient(res: Response, data: any, TransXpedia: TransXpedia) {
  try {
    if (data.errorObject) {
      res.json(data.errorObject);
    }
    else {
      
      res.json(data)
    }
    logger.info(TransXpedia, 'TO CLIENT', data);
  }
  catch (err) {

    logger.error(TransXpedia, 'TO CLIENT', err);
    // throw frameErrorObject(err, errorList.ERR_SEND_TO_CLIENT, `Unable to send response to client [Function: sendToClient] [Data: ${data}]`)
    res.json(frameErrorObject(err, errorList.ERR_SEND_TO_CLIENT, `Unable to send response to client [Function: sendToClient] [Data: ${data}]`))
  }
}