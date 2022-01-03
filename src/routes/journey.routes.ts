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
    const {
        eventName,
        theFloJourneyId,
        theFloCarId,
        device,
        batteryLevel,
        hasUserCompletedOnBoarding,
        btUUID,
        btName,
        btTheFloVehicleId,
        version,
        time } = request.body
    const journey = new Journey({
        eventName,
        theFloJourneyId,
        theFloCarId,
        device,
        batteryLevel,
        hasUserCompletedOnBoarding,
        btUUID,
        btName,
        btTheFloVehicleId,
        version,
        time
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
