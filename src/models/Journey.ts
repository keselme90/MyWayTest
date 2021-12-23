import mongoose from 'mongoose';

const JourneySchema =  new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    fPolicyId: {
        type: String,
        required: true
    },
    fCarId: {
        type: String,
        required: true
    },
    fDriverId: {
        type: String,
        required: true
    },
    btUUID: {
        type: String,
        required: true
    },
    device: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('Journeys', JourneySchema);
