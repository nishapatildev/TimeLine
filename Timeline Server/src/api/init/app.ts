import express, { Express, Request, Response } from "express";
import login from '../controllers/login.controller';
export const app: Express = express();
app.use(express.json());
const cors = require('cors');
app.use((err: Error, req: Request, res: Response, next: any) => {
   if (err instanceof SyntaxError && 'body' in err) {
      return res.status(400).send({ errorCode: 404, errorMsg: "Unexpected  end of JSON Request", description: `Unexpected end of JSON input Request [Function : app.use] [Data: ${req.body}]` }); // Bad request

      next();
   }

});
app.use(cors());
app.use('/login', login);

