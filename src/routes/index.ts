import { Router } from 'express';
import journeyRouter from './journey.routes';
import errorRouter from './error.routes';
import locationStateRouter from './locationState.routes';
import bluetoothConnectionRouter from './bluetoothConnection.routes';
import bluetoothPairingRouter from './bluetoothPairing.routes
import reqeustRouter from './request.routes';
const routes = Router();

routes.get('/', (request, response) => {
    response.send('We are on home');
});

routes.use('/journeys', journeyRouter);
routes.use('/location-states', locationStateRouter);
routes.use('/bluetooth-connections', bluetoothConnectionRouter);
routes.use('/bluetooth-pairing', bluetoothPairingRouter);
routes.use('/errors', errorRouter);
routes.use('requests', reqeustRouter);

export default routes;
