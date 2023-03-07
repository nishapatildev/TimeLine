export interface Ekyc {
  userName : string,
  transaction_data: {
    transactionId: string;
    custAadhaar: string;
    pfr: string;
    posCode : string;
    posenTryMode : string;
    txn : string;
  };
  rd_data: {
    uses: {
      pi: string;
      pa: string;
      pfa: string;
      bio: string;
      bt: string;
      pin: string;
      otp: string;
    };
    meta: {
      udc: string;
      dpId: string;
      rdsId: string;
      rdsver: string;
      dc: string;
      mi: string;
      mc: string;
      error: string;
    };
    skey: {
      ci: string;
      encodedSk: string;
    };
    data: {
      type: string;
      encodedValue: string;
    };
    additional_info: {
      srNo: string;
      deviceType: string;
      supportUpto: string;
    };
    encodedHmac: string;
    rc: string;
    ra: string;
    fType: number;
    iCount: number;
    pCount: number;
    errCode: string;
    errInfo: string;
    fCount: number;
    ts: string;
    nmPoints: number;
    qsCore: number;
    lot: string;
    lov: string;
  };
  additional_data: {
    deviceId: string;
    batchId: string;
    client_app_ver: string;
    platform: string;
    client_apptype: string;
    timeEpoch: string;
  };
}

export interface GenerateOtp {
  username: string;
  uid: string;
  timeEpoch: string;
  consentMsg: string;
  consentFlag: string;
  transactionId: string;
  deviceId : string;
}
