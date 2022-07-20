import { Router} from 'express';
import { Error } from '../models';

const errorRouter = Router();

errorRouter.get('/', (reqeust, response) => {
    Error.find()
    .then((data:any) => {
        response.json(data.reverse())
    })
    .catch((e:any) => {
        console.log(e);
        response.send(`failed with error ${e}`)
    })
});

errorRouter.post('/', (request, response) => {
    const error = new Error({
            journeyId: reqeust.body.journeyId,
            sdkVehicleId: reqeust.body.sdkVehicleId,
            errorMessage: request.body.errorMessage,
            time: new Date()
        });
     error.save()
        .then((data:any) => {
            response.send(`Error logged successfully`);
        })
        .catch((e:any) => {
            console.log(e);
            response.send(`Failed with error ${JSON.stringify(e)}`)
        });
});

export default errorRouter;
