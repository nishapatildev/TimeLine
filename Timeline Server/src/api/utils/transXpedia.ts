import { Request, Response } from 'express';
import { TransXpedia } from '../lib/interfaces/Common.interfaces';

export class TransXpediaTemplate implements TransXpedia {
    service: string;
    uuid: string;
    rrn: string;
    stan: string;
    userData: any;
    demographic: any;
    enrollmentGatewayResponse :any;
    dateRecords : any;
    transaction_data : any;
    rd_data : any;
    additional_data : any;
    results : any;
    custSign : any;


    constructor(public req: Request, public res: Response) {
        this.service = '';
        this.uuid = '';
        this.stan = '';
        this.rrn = '';
        this.userData = '';
        this.demographic = '';
        this.enrollmentGatewayResponse ='';
        this.dateRecords ='';
        this.transaction_data ='';
        this.rd_data ='';
        this.additional_data='';
        this.results = '';
        this.custSign ='';
        

    }
}