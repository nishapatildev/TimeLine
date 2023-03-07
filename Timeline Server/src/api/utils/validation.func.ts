
import Ajv, { JSONSchemaType } from 'ajv';
import { json } from 'stream/consumers';
import { errorList } from './error';
import { frameErrorObject } from './utils';
let ajv = new Ajv();

export function validateSchema<T>(schema: JSONSchemaType<T>, data: T): any {
    try {
        const validate = ajv.compile(schema)
        if (validate(data)) {
        }
        else {
            throw frameErrorObject(validate.errors, errorList.ERR_FIELD_IMPROPER, `Incoming Request Is Not Proper [Function: validateSchema] [Data: ${data}]`)
        }
    } catch (err) {
        throw frameErrorObject(err, errorList.ERR_VALIDATION, `Unable to validate using ajv [Function: validateSchema] [Data: ${data}]`)
    }
}


