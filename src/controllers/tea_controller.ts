import { Request,Response } from 'express';
import * as teaService from '../services/tea_service';

export const getTea = async (req: Request<object, object, object, { teaName: string | undefined }>, res: Response) => {
    const teaName  = req.query.teaName;
    const tea = teaService.getTea(teaName as string);
    res.json(tea).status(200);
    };
    
    export const getTeaString = async (req: Request,res: Response) => {
        const tea = teaService.getTeaString();
        res.status(200).send(tea)
    }   