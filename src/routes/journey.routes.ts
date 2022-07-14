import { Router } from 'express';
import { Journey, Error, IncomingRequest as Req } from '../models';
import { RequestType } from '../types';

const journeyRouter = Router();

journeyRouter.get('/', (request, response) => {
    Journey.find()
    .then((data:any) => {
        response.json(data.reverse())
    })
    .catch((e:any)=>{
        console.log(e);
        response.send(`failed with error ${e}`);
    });
});

journeyRouter.put('/:id', (request, response) => {
    const { id } = request.params;
    const updates = request.body;
    const query = { 'theFloJourneyId': id, 'eventName': 'STARTED' };
    Journey.findOneAndUpdate(query, updates).then((data:any) => response.json(data)).catch((e) => response.send(`failed with error ${JSON.stringify(e)}`));
})

journeyRouter.post('/', (request, response) => {
    const x = 1 / 0;
    const {
        time,
        eventName,
        theFloJourneyId,
        theFloCarId,
        btTheFloVehicleId,
        btUUID,
        btName,
        hasUserCompletedOnBoarding,
        appVersion,
        buildVersion,
        manufacturer,
        deviceBrand,
        deviceId,
        deviceModel,
        deviceName,
        osVersion,
        bluetoothOn,
        isLocationEnabled,
        batteryLevel,
        isBatteryCharging,
        isEmulator
    } = request.body
    const journey = new Journey({
        time,
        eventName,
        theFloJourneyId,
        theFloCarId,
        btTheFloVehicleId,
        btUUID,
        btName,
        hasUserCompletedOnBoarding,
        appVersion,
        buildVersion,
        manufacturer,
        deviceBrand,
        deviceId,
        deviceModel,
        deviceName,
        osVersion,
        isBluetoothOn: bluetoothOn,
        isLocationEnabled,
        batteryLevel,
        isBatteryCharging,
        isEmulator
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
    .finally(() =>  {
        const req = new Req({
            requestType: 'DRIVING_EVENT',
            incomingRequest: JSON.stringify(request.body),
            time: new Date()
        });
        req.save()
        .then((data:any) => {
            // response.send('Reqeust added successfully')
        })
        .catch((e:any) => {
            const error = new Error({
                errorMessage: JSON.stringify(`failed to add reqeust with error: ${e}`),
                time: new Date()
            });
            error.save()
            .then((data:any) => {
                // response.send(`Error logged successfully for reqeust`);
            })
            .catch((e:any) => {
                console.log(e);
                // response.send(`failed with error ${JSON.stringify(e)}`)
            });
        })
    })
});

export default journeyRouter;
