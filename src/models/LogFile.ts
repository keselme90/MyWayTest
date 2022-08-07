import mongoose from 'mongoose';

const LogFileSchema = new mongoose.Schema({
    date: Date,
    data: Buffer
});

export default mongoose.model('LogFile', LogFileSchema);