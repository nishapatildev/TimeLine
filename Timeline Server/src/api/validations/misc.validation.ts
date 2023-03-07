import Ajv, { JSONSchemaType } from "ajv";
import { BatchId } from "../lib/dto/misc.dto";
const ajv = new Ajv()

export const batchId_schema : JSONSchemaType<BatchId> ={
    type : "object",
    properties : {
        userName : {type : "string",minLength : 1},
        deviceId : {type: "string", minLength:1},
        clientAppType: {type: "string",enum: ["TAB","tab"]},
        timeEpoch: {type: "string", minLength : 10, maxLength: 10}
    },
    required : ["userName","deviceId","clientAppType","timeEpoch"]
}