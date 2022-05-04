import { Router } from 'express';
import { BluetoothPairing } from '../models';
import { RequestType } from '../types';

const bluetoothPairingRouter = Router();

bluetoothPairingRouter.get('/', (request, response) => {
    BluetoothPairing.find()
    .then((data:any) => {
        response.json(data.reverse())
    })
    .catch((e:any)=>{
        console.log(e);
        response.send(`failed with error ${e}`);
    });
});

bluetoothPairingRouter.post('/', (request, response) => {
    const {
        date,
        btUUID,
        btName,
        vehicleName,
        vehicleNumber,
        appVersion,
        buildVersion,
        manufacturer,
        deviceBrand,
        deviceName,
        osVersion
    } = request.body
    const bluetoothPairing = new BluetoothPairing({
        date,
        btUUID,
        btName,
        vehicleName,
        vehicleNumber,
        appVersion,
        buildVersion,
        manufacturer,
        deviceBrand,
        deviceName,
        osVersion
    });
    bluetoothPairing.save()
    .then((data:any) => response.json(data))
    .catch ((e:any) => {
       response.send(`failed with error ${JSON.stringify(e)}`)
    })
});

export default bluetoothPairingRouter;
