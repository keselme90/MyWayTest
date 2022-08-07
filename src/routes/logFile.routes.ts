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

        const base64 = Buffer.from(fileData).toString('base64'); // TODO: idk why we need 3 conversions here
        const download = Buffer.from(base64, 'base64').toString('ascii');
        const resValue = Buffer.from(download, 'base64').toString('ascii');

        
        response.end(resValue);
    })
    .catch((e:any) => response.json("error findOneById"))
});

logfileRouter.post('/', (request, response) => {
    const { timestamp, logFileData} = request.body;

    console.log(`timestamp ${timestamp} logFileData ${logFileData}`)
    
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

