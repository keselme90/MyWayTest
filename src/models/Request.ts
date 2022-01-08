import mongoose from 'mongoose';
import { RequestType } from '../types';

const RequestSchema = new mongoose.Schema({
    requestType: RequestType,
    request: Request,
    time: Date
});

export default mongoose.model('Request', RequestSchema);