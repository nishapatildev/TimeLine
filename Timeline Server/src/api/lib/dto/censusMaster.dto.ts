// Interface for Fetching State List
export interface StateNames {
  userName: string,
  timeEpoch: string
}


// Interface for Fetching district List
export interface DistNames {
  userName: string,
  stateCode : string,
  timeEpoch : string
}

// Interface for Fetching sub-dist List
export interface SubdistNames {
  userName: string,
  timeEpoch : string,
  distCode: string
}




// Interface for Fetching Village List
export interface VillageNames {
  userName: string,
  timeEpoch : string,
  subdistCode: string
}