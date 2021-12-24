import mongoose from 'mongoose';

const ErrorSchema = new mongoose.Schema({
    errorMessage: String,
    time: Date
});

export default mongoose.model('Error', ErrorSchema);
