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
        const {
        journeyId,
        sdkVehicleId,
        errorMessage,   
        appVersion,
        buildVersion,
        manufacturer,
        deviceBrand,
        deviceId,
        deviceModel,
        deviceName,
        osVersion,
        batteryLevel,
    } = request.body
    const error = new Error({
        journeyId,
        sdkVehicleId,
        errorMessage,   
        appVersion,
        buildVersion,
        manufacturer,
        deviceBrand,
        deviceId,
        deviceModel,
        deviceName,
        osVersion,
        batteryLevel
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
