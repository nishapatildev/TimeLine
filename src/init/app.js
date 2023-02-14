import express, { Express, Request, Response } from "express";
import userLogin from '../controllers/userLogin.js'


export const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
   if (err instanceof SyntaxError && 'body' in err) {
      return res.status(400).send({ errorCode: 404, errorMsg: "Unexpected  end of JSON Request", description: `Unexpected end of JSON input Request [Function : app.use] [Data: ${req.body}]` }); // Bad request

      next();
   }

});

app.use('/usreLogin', userLogin);






// app.listen(2233,'0.0.0.0',()=>{
//     console.log("listening");
// })
