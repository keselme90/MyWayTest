import mongoose from 'mongoose';

const JourneySchema =  new mongoose.Schema({
    journeyId: {
        type: String,
        required: true,
    },
    eventName: {
        type: String,
        required: true
    },
    fPolicyId: {
        type: String,
        required: true
    },
    fDriverId: {
        type: String,
        required: true
    },
    fCarId: {
        type: String,
        required: true
    },
    btUUID: {
        type: String,
        required: true
    },
    btName: {
        type: String,
        required: String
    },
    device: {
        type: String,
        required: true
    },
    hasUserCompletedOnBoarding: {
        type: Boolean,
        required: true
    },
    time: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('Journeys', JourneySchema);
