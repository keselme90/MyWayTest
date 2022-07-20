import mongoose from 'mongoose';

const ErrorSchema = new mongoose.Schema({
    journeyId: String,
    sdkVehicleId: String,
    errorMessage: String,
    time: Date,
    appVersion: {
        type: String,
        default: '0.0'
    },
    buildVersion: {
        type: String,
        default: '0.0'
    },
    manufacturer: {
        type: String,
        default: 'Unknown'
    },
    deviceBrand: {
        type: String,
        default: 'Unknown'
    },
    deviceId: {
        type: String,
        default: 'Unknown'
    },
    deviceModel: {
        type: String,
        default: 'Unknown'
    },
    deviceName: {
        type: String,
        default: 'Unknown'
    },
    osVersion: {
        type: String,
        default: '0.0'
    },
    batteryLevel: {
        type: Number,
        default: -1
    },
});

export default mongoose.model('Error', ErrorSchema);
