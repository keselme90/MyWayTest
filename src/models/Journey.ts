import mongoose from 'mongoose';

const JourneySchema =  new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    theFloJourneyId: {
        type: String,
        required: true,
    },
    theFloCarId: {
        type: String,
        required: true
    },
    device: {
        type: String,
        required: true
    },
    batteryLevel: {
        type: Number,
        required: true
    },
    hasUserCompletedOnBoarding: {
        type: Boolean,
        required: true
    },
    btUUID: {
        type: String,
        default: '00:00:00:00:00'
    },
    btName: {
        type: String,
        default: 'Unknown'
    },
    btTheFloVehicleId: {
        type: String,
        default: 'Unknown'
    },
    version: {
        type: String,
        default: '0.0'
    },
    time: {
        type: Date,
        default: new Date()
    },
});

export default mongoose.model('Journeys', JourneySchema);
