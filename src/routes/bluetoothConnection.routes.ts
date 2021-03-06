import { Router } from 'express';
import { BluetoothConnection, Error } from '../models';

const bluetoothConnectionRouter = Router();

bluetoothConnectionRouter.get('/', (request, response) => {
    BluetoothConnection.find()
    .then((data:any) => {
        response.json(data.reverse())
    })
    .catch((e:any)=>{
        console.log(e);
        response.send(`failed with error ${e}`);
    });
});

bluetoothConnectionRouter.post('/', (request, response) => {
    const bluetoothConnection = new BluetoothConnection({
        journeyId: request.body.journeyId,
        connectionState: request.body.connectionState,
        connectionStateTimestamp: request.body.connectionStateTimestamp,
        btUUID: request.body.btUUID,
        btName: request.body.btName,
        reportTimestamp: request.body.reportTimestamp,
    });
    bluetoothConnection.save()
    .then((data:any) => response.json(data))
    .catch ((e:any) => {
        const error = new Error({
            errorMessage: JSON.stringify(`failed to add bluetoothConnection with uuid ${request.body.btUUID} with error: ${e}`),
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

export default bluetoothConnectionRouter;
