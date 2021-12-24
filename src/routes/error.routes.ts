import { Router} from 'express';
import { Error } from '../models';

const errorRouter = Router();

errorRouter.get('/', (reqeust, response) => {
    Error.find()
    .then((data:any) => {
        response.json(data)
    })
    .catch((e:any) => {
        console.log(e);
        response.send(`failed with error ${e}`)
    })
})

export default errorRouter;
