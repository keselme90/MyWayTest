import { Router } from 'express';
import errorRouter from './error.routes';
import reqeustRouter from './request.routes';
import journeyRouter from './journey.routes';
import easterEggRouter from './easterEgg.routes';
import locationStateRouter from './locationState.routes';
import bluetoothPairingRouter from './bluetoothPairing.routes'
import bluetoothConnectionRouter from './bluetoothConnection.routes';

const routes = Router();

routes.get('/', (request, response) => {
    response.send('We are on home');
});

routes.use('/errors', errorRouter);
routes.use('/journeys', journeyRouter);
routes.use('/requests', reqeustRouter);
routes.use('/easter', easterEggRouter);
routes.use('/location-states', locationStateRouter);
routes.use('/bluetooth-pairing', bluetoothPairingRouter);
routes.use('/bluetooth-connections', bluetoothConnectionRouter);

export default routes;
