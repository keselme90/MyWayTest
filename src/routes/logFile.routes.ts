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
    .then((data:any) => response.json("success"))
    .catch((e:any) => response.json("error saving log file"));
})

export default logfileRouter;

