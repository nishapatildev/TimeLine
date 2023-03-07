import {initServer,appConfig} from "./api/init/initServer";
import "reflect-metadata"; // typeorm setup

initServer()
  .then(() => {
    console.log(appConfig)
    appConfig.serverCommType.toUpperCase() == "HTTP"
      ? require("./api/init/commType/http")()
      : process.exit(1);
      console.log("Server Started");
  })
  .catch((e:any) => {
    console.log("server init failed",e);
    process.exit(1);
  });