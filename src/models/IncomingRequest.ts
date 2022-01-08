import mongoose from 'mongoose';
import { RequestType } from '../types';

const IncomingRequestSchema = new mongoose.Schema({
    requestType: String,
    incomingRequest: String,
    time: Date
});

export default mongoose.model('IncomingRequest', IncomingRequestSchema);