export const errorList = {
  //client category errocodes 300 - 399
  ERR_FIELD_IMPROPER: { errorCode: "300", errorMsg: "Field Is Not Proper" },
  ERR_DATA_MISSING: { errorCode: "301", errorMsg: "Request Data Missing" },
  ERR_DATA_FORMAT: {
    errorCode: "302",
    errorMsg: "Improper Foramat of Request",
  },
  ERR_VALIDATION: { errorCode: "303", errorMsg: "Unable To Validate Request" },
  //database category errorcodes 100 - 199
  ERR_BRANCH_DATA: {
    errorCode: "100",
    errorMsg: "Unable To Fetch Branch List",
  },
  ERR_CENSUS_DATA: {
    errorCode: "101",
    errorMsg: "Unable To Fetch Census List",
  },

  ERR_USERENROLL_DATA: {
    errorCode: "102",
    errorMsg: "Unable to insert User Data"
  },
  
  ERR_STAN_RRN: {
    errorCode: "103",
    errorMsg: "Unable to generate stan/rrn"
  },

  ERR_BATCHID: {
    errorCode: "104",
    errorMsg: "Unable to generate batch id"
  },


  ERR_EKYC_DATA: {
    errorCode: "105",
    errorMsg: "Unable to Insert EKYC Data"
  },

  ERR_USER_DATA: {
    errorCode: "106",
    errorMsg: "Unable to Fetch User Data"
  },


  ERR_USER_STATUSCHECK: {
    errorCode: "107",
    errorMsg: "Unable to Fetch User status"
  },

  ERR_SIGNUPLOAD : {
    errorCode: "108",
    errorMsg: "Unable To Update Signature Data",  
  
  },

  ERR_EnrollStatusUpdate : {
    errorCode: "109",
    errorMsg: "Unable To Update Enrollment Status",  
  },

  ERR_DEV: {
    errorCode: "501",
    errorMsg: "Development Error"
  },

  ERR_EKYC: {
    errorCode: "201",
    errorMsg: "Unable to process EKYC"
  },

  ERR_GENERATE_OTP: {
    errorCode: "202",
    errorMsg: "Unable to Generate OTP"
  },
  ERR_SEND_TO_CLIENT: {
    errorCode: "900",
    errorMsg: "Unable To Send Response To Client",
  },
  ERR_SUCCESS: { errorCode: "00", errorMsg: "SUCCESS" },

  ERR_SUBMIT_DATA: {
    errorCode: "FAILURE",
    errorMsg: "6721 CIF VALIDATION FAILED -- A/c creation failed ",
  }
};
