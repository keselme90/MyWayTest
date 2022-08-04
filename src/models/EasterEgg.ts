import mongoose from 'mongoose';

const EasterEggSchema =  new mongoose.Schema({
    timestamp: {
        type: Date,
        default: undefined
    },
    env: {
        type: String,
        default: undefined,
    },
    sdkDriverId: {
        type: String,
        default: undefined
    },
    sdkPolicyId: {
        type: String,
        default: undefined
    },
    sdkVehicleId: {
        type: String,
        default: undefined
    },
    hafakaVehicleId: {
        type: String,
        default: undefined
    },
    sdkVersion: {
        type: String,
        default: undefined
    },
    isLoggedIn: {
      type: Boolean,
      default: false
    },
    isServiceReady: {
        type: Boolean,
        default: false
    },
    manufacturer: {
        type: String,
        default: undefined
    },
    deviceName: {
        type: String,
        default: false
    },
    model: {
        type: String,
        default: undefined
    },
    osName: {
        type: String,
        default: undefined
    },
    osVersion: {
        type: String,
        default: undefined
    }
});



export default mongoose.model('EasterEgg', EasterEggSchema);
