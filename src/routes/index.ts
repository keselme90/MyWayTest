import { Router } from 'express';
import journeyRouter from './journey.routes';
import errorRouter from './error.routes';
import locationStateRouter from './locationState.routes';
import bluetoothConnectionRouter from './bluetoothConnection.routes';

const routes = Router();

routes.get('/', (request, response) => {
    response.send('We are on home');
});

routes.use('/journeys', journeyRouter);
routes.use('/location-states', locationStateRouter);
routes.use('/bluetooth-connections', bluetoothConnectionRouter);
routes.use('/errors', errorRouter);

export default routes;
