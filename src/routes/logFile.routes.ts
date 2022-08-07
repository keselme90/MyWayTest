import { Router } from 'express';
import { LogFile } from '../models';
import fs from 'fs';

const logfileRouter = Router();

logfileRouter.get('/:id', (request, response) => {
    const { id } = request.params;
    LogFile.findById(id)
    .then((item) => {
        const {data: fileData} = item;
        const fileName = `log_${id}.txt`
        const fileType = 'text/plain'

        response.writeHead(200, {
            'Content-Disposition': `attachment; filename="${fileName}"`,
            'Content-Type': fileType,
          })

          const download = Buffer.from(fileData, 'base64')
          response.end(download)
    })
    .catch((e:any) => response.json("error findOneById"))
});

logfileRouter.post('/', (request, response) => {
    const { timestamp, logFileData} = request.body;

    console.log(`timestamp ${timestamp} logFileData ${logFileData}`)
    
    const utf8Encode = new TextEncoder();
    const byteArr = Buffer.from(logFileData, 'utf8');
    console.log(`byteArr ${byteArr}`);
    
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

