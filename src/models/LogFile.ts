import mongoose from 'mongoose';

const LogFileSchema = new mongoose.Schema({
    date: { type: Date },
    data: { type: Buffer },
    zip: { type: Boolean, default: false }
});

export default mongoose.model('LogFile', LogFileSchema);
