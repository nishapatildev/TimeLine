// //import { appDataSource } from "../init/mongodb";
// import oracledb from "oracledb"
// import { appConfig } from '../init/initServer';
// import { TransXpedia } from "../lib/interfaces/Common.interfaces";

// export const commonRepository = {
//  generateStanRrn(transactionId: string): Promise<string[]> {
//     return Promise.resolve(['']);
//     return appDataSource.query("call TAB_GENERATESTANRRN(:txnid,:stan,:rrn)", [
//       transactionId,
//       { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
//       { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
//     ]);
//  },

//   generateBatchId(
//     deviceId: string,
//     agentCode: string,
//     clientAppType: string,
//     vendorId: string
//   ): Promise<string[]> {
//     return appDataSource.query(
//       "call TAB_GENERATEBATCHID(:deviceId,:agentCode,:clientAppType,:vendorId,:batchId)",
//       [
//         deviceId,
//         agentCode,
//         clientAppType,
//         vendorId,
//         { type: oracledb.DB_TYPE_VARCHAR, dir: oracledb.BIND_OUT },
//       ]
//     );
//  },
// };





















