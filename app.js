import {config} from "./config/config";
import {initServer} from "./src/init/initServer"
import "reflect-metadata";

initServer()
  .then(() => {
      console.log("Server Started");
  })
  .catch((e) => {
    console.log("server init failed",e);
    process.exit(1);
  });