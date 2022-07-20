import mongoose from 'mongoose';

const ErrorSchema = new mongoose.Schema({
    journeyId: String,
    sdkVehicleId: String,
    errorMessage: String,
    time: Date
});

export default mongoose.model('Error', ErrorSchema);
