import { Router } from 'express';
import Journey from '../models';

const journeyRouter = Router();

journeyRouter.get('/', (request, response) => {
    Journey.find()
    .then((data:any) => {
        response.json(data)
    })
    .catch((e:any)=>{
        console.log(e);
        response.send(`failed with error ${JSON.stringify(e)}`);
    });
});

journeyRouter.post('/', (request, response) => {
    const journey = new Journey({
        eventName: request.body.eventName,
        fPolicyId: request.body.fPolicyId,
        fCarId: request.body.fCarId,
        fDriverId: request.body.fDriverId,
        btUUID: request.body.btUUID,
        device: request.body.device
    });
    journey.save()
    .then((data:any) => response.json(data))
    .catch ((e:any) => {
        console.log(e);
        response.send(`failed with error ${JSON.stringify(e)}`)});
});

export default journeyRouter;