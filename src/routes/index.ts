import { Router } from 'express';
import journeyRouter from './journey.routes';
import errorRouter from './error.routes';

const routes = Router();

routes.get('/', (request, response) => {
    response.send('We are on home');
});

routes.use('/journeys', journeyRouter);
routes.use('/errors', errorRouter);

export default routes;