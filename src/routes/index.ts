import { Router } from 'express';
import journeyRouter from './journey.routes';

const routes = Router();

routes.get('/', (request, response) => {
    response.send('We are on home');
});

routes.use('/journeys', journeyRouter);

export default routes;