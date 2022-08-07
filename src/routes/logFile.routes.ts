import { Router } from 'express';
import { LogFile } from '../models';

const logfileRouter = Router();

logfileRouter.post('/', (request, response) => {
    const { timestamp, logFileData} = request.body;

    const utf8Encode = new TextEncoder();
    const byteArr = utf8Encode.encode(logFileData);

    const logFile = new LogFile({
        date: timestamp,
        data: byteArr
    });

    logFile.save()
    .then((data:any) => {
        console.log('logFileRouter: logFile save success');
        response.json("success")
    })
    .catch((e:any) => {
        console.log('logFileRouter: logFile save error', e);
        response.json("error saving log file")
    });
})

export default logfileRouter;

