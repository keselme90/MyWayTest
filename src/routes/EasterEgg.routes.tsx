import { Router } from 'express';
import { EasterEgg, Error } from '../models';

const easterEggRouter = Router();

easterEggRouter.get('/', (request, response) => {
    EasterEgg.find()
    .then((data:any) => {
        response.json(data.reverse())
    })
    .catch((e:any)=>{
        console.log(e);
        response.send(`failed with error ${e}`);
    });
});

easterEggRouter.post('/', (request, response) => {
    const easterEggData = new EasterEgg({
        timestamp: request.body.timestamp,
        env: request.body.env,
        sdkDriverId: request.body.sdkDriverId,
        sdkPolicyId: request.body.sdkPolicyId,
        sdkVehicleId: request.body.sdkVehicleId,
        hafakaVehicleId: request.body.hafakaVehicleId,
        sdkVersion: request.body.sdkVersion,
        isLoggedIn: request.body.isLoggedIn,
        isServiceReady: request.body.isServiceReady,
        manufacturer: request.body.manufacturer,
        deviceName: request.body.deviceName,
        model: request.body.model
        osName: request.body.osName,
        osVersion: request.body.osVersion
    });
    easterEggData.save()
    .then((data:any) => response.json(data))
    .catch ((e:any) => {
        const error = new Error({
            errorMessage: JSON.stringify(`failed to add easterEggData with sdkDriverId ${request.body.sdkDriverId} with error: ${e}`),
            time: new Date()
        });
        error.save()
        .then((data:any) => {
            response.send(`Error logged successfully for easter egg with sdkDriverId of ${request.body.sdkDriverId}`);
        })
        .catch((e:any) => {
            console.log(e);
            response.send(`failed with error ${JSON.stringify(e)}`)
        });
    })
});

export default easterEggRouter;
