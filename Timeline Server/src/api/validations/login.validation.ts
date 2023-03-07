import Ajv, { JSONSchemaType } from "ajv";
import { UserData } from '../lib/dto/branch.dto';
const ajv = new Ajv()

/// Schema for Branchlist Request 
export const userData_schema : JSONSchemaType<UserData> ={
    type : "object",
    properties : {
        userName: { type: "string" },
        password : {type: "string"}
    },
    required : ["userName", "password"]
}
