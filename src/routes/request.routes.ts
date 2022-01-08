import { Router } from "express";
import { Request as Req, Error } from "../models";

const reqeustRouter = Router();

reqeustRouter.get('/', (reqeust, response) => {
    Req.find()
    .then((data:any) => {
        response.json(data)
    })
    .catch((e:any) => {
        console.log(e);
        response.send(`failed with error ${e}`)
    })
});

export default reqeustRouter;