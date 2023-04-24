//import { appDataSource } from "../init/mongodb";
// import { BranchMaster } from "../lib/entities/tab_branch_master.entity"

// export const branchMasterRepository = appDataSource.getRepository(BranchMaster).extend({
//     getAllBranch() {
//         return this.createQueryBuilder()
//             .select('*')
//             .getRawMany();
//     }
// })
import {  mongoDB } from '../init/mongodb';
import { ObjectId } from 'mongodb';
import { TransXpedia } from '../lib/interfaces/Common.interfaces';
import { UserData } from '../lib/dto/branch.dto';
var mongoose = require('mongoose');



export function userDataLogin(transXpedia: TransXpedia) {
    return new Promise((resolved, rejected) => {
        let userName = transXpedia.req.body.userName;
        let password = transXpedia.req.body.password;
        let result: any = ""

       

    

        mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(async () => {
                console.log('Connected to MongoDB successfully');
               
                const userSchema = new mongoose.Schema({
                    _id: ObjectId,
                    username: String,
                    password: String
                });  

                const User = mongoose.model('mycollection', userSchema);
                 User.findOne({username: userName, password:password}, 
                     function (err: any, results: any){
                    if (err) {
                        console.log('Error getting users:', err);
                        return rejected(results);

                    }else{
                    //    console.log('Users found:', results);
                        return resolved(results);
                        // Close the MongoDB connection


                    }
                    

                });






            })

            .catch((err: any) => {
                console.log('Error connecting to MongoDB:', err);
                return err;
            });


           
    })



}
