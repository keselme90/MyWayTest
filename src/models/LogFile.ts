import mongoose from 'mongoose';

const LogFileSchema = new mongoose.Schema({
    date: { type: Date },
    type: { type: String},
    data: { type: Buffer }
});

export default mongoose.model('LogFile', LogFileSchema);