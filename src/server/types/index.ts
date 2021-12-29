import { Request } from 'express';


export interface MySQL_Default_Response {
    insertId:number;  
    affectedRows: number;
}