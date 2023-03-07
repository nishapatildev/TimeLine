import { UserData } from "../lib/dto/branch.dto";
import { TransXpedia } from "../lib/interfaces/Common.interfaces";
import { userDataLogin } from "../repositories/login.repository";
import { errorList } from "../utils/error";
import { frameErrorObject } from "../utils/utils";

export namespace UserService {
  export async function userLogin(transXpedia:TransXpedia): Promise<UserData[]> {
    try {
      let userData: any = await userDataLogin(transXpedia)
      return userData;
    } catch (err: any) {
      throw frameErrorObject(
        err,
        errorList.ERR_BRANCH_DATA,
        `Not Able To get user Data [Function: userLogin] `
      );
    }
  }
}
