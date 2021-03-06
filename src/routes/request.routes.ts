import { Router } from "express";
import { IncomingRequest as Req, Error } from "../models";

const reqeustRouter = Router();

reqeustRouter.get('/', (reqeust, response) => {
    Req.find()
    .then((data:any) => {
        response.json(data.reverse())
    })
    .catch((e:any) => {
        console.log(e);
        response.send(`failed with error ${e}`)
    })
});

export default reqeustRouter;
