import mongoose from 'mongoose';

const JourneySchema =  new mongoose.Schema({
    time: {
        type: Date,
        default: new Date()
    },
    eventName: {
        type: String,
        default: 'Unknown'
    },
    theFloJourneyId: {
        type: String,
        default: 'Unknown',
    },
    theFloCarId: {
        type: String,
        default: 'Unknown'
    },
    btTheFloVehicleId: {
        type: String,
        default: 'Unknown'
    },
    btUUID: {
        type: String,
        default: '00:00:00:00:00'
    },
    btName: {
        type: String,
        default: 'Unknown'
    },
    hasUserCompletedOnBoarding: {
        type: Boolean,
        default: false
    },
    keepAliveTrueTimestamp: {
        type: Date,
        default: new Date()
    },
    keepAliveTrueCounter: {
        type: number,
        default: -1
    },
    keepAliveFalseTimestamp: {
        type: Date,
        default: new Date()
    },
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
    isBluetoothOn: {
        type: Boolean,
        default: false
    },
    isLocationEnabled: {
        type: Boolean,
        default: false
    },
    batteryLevel: {
        type: Number,
        default: -1
    },
    isBatteryCharging: {
        type: Boolean,
        default: false
    },
    isEmulator: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('Journeys', JourneySchema);
