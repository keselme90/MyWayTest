import { Router } from 'express';
import { Journey, Error } from '../models';

const journeyRouter = Router();

journeyRouter.get('/', (request, response) => {
    Journey.find()
    .then((data:any) => {
        response.json(data)
    })
    .catch((e:any)=>{
        console.log(e);
        response.send(`failed with error ${e}`);
    });
});

journeyRouter.post('/', (request, response) => {
    const journey = new Journey({
        journeyId: request.body.journeyId,
        eventName: request.body.eventName,
        fPolicyId: request.body.fPolicyId || '0',
        fDriverId: request.body.fDriverId || '0',
        fCarId: request.body.fCarId || '0',
        btUUID: request.body.btUUID || '0',
        btName: request.body.btName || 'default',
        device: request.body.device,
        hasUserCompletedOnBoarding: request.body.hasUserCompletedOnBoarding,
        time: request.body.time
    });
    journey.save()
    .then((data:any) => response.json(data))
    .catch ((e:any) => {
        const error = new Error({
            errorMessage: JSON.stringify(`failed to add journey with id ${request.body.journeyId} with error: ${e}`),
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

export default journeyRouter;