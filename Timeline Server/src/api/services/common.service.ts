// import { TransXpedia } from "../lib/interfaces/Common.interfaces";
// //import { commonRepository } from "../repositories/common.repository";
// import { errorList } from "../utils/error";
// import { frameErrorObject } from "../utils/utils";

// export namespace CommonService {
//   export async function generateStanRrn(
//     transactionId: string
//   ): Promise<string[]> {
//     try {
//       let stanRrn: string[] = await commonRepository.generateStanRrn(
//         transactionId
//       );
//       return stanRrn;
//     } catch (err: any) {
//       throw frameErrorObject(
//         err,
//         errorList.ERR_STAN_RRN,
//         `Not Able To generate STAN RRN[Function: generateStanRrn] [Table: TAB_STANRRNGENERATION]`
//       );
//     }
//   }
//   export async function generateBatchId(
//     deviceId: string,
//     agentCode: string,
//     clientAppType: string,
//     vendorId: string
//   ): Promise<string[]> {
//     try {
//       let stanRrn: string[] = await commonRepository.generateBatchId(
//         deviceId,
//         agentCode,
//         clientAppType,
//         vendorId
//       );
//       return stanRrn;
//     } catch (err: any) {
//       throw frameErrorObject(
//         err,
//         errorList.ERR_BATCHID,
//         `Not Able To Fetch branch Data [Function: generateBatchId] [Table: TAB_GENERATEBATCHID]`
//       );
//     }
//   }
// }
