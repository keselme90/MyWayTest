import { Router } from 'express';
import { LocationState, Error } from '../models';

const locationStateRouter = Router();

locationStateRouter.get('/', (request, response) => {
    locationState.find()
    .then((data:any) => {
        response.json(data)
    })
    .catch((e:any)=>{
        console.log(e);
        response.send(`failed with error ${e}`);
    });
});

locationStateRouter.post('/', (request, response) => {
    const locationState = new LocationState({
        locationState: request.body.locationState,
        date: request.body.date,
    });
    locationState.save()
    .then((data:any) => response.json(data))
    .catch ((e:any) => {
        const error = new Error({
            errorMessage: JSON.stringify(`failed to add location state with error: ${e}`),
            time: new Date()
        });
        error.save()
        .then((data:any) => {
            response.send(`Error logged successfully for journey with id of ${request.body.journeyId}`);
        })
        .catch((e:any) => {
            console.log(e);
            response.send(`failed with error ${JSON.stringify(e)}`)
        });
    })
});

export default locationStateRouter;
