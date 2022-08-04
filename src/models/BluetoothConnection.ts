import mongoose from 'mongoose';

const BluetoothConnectionSchema =  new mongoose.Schema({
    timestamp: {
        type: Date,
        default: undefined
    },
    env: {
        type: String,
        default: undefined,
    },
    connectionState: {
        type: String,
        default: undefined,
    },
    duringDrive: {
        type: Boolean,
        default: false
    },
    journeyId: {
        type: String,
        default: undefined
    },
    policyId: {
        type: String,
        default: undefined
    },
    driverId: {
        type: String,
        default: undefined
    },
    btUUID: {
        type: String,
        default: undefined
    },
    btName: {
      type: String,
      default: undefined
    },
    recognized: {
        type: Boolean,
        default: false
    },
    pairedUUIDS: {
        type: String,
        default: undefined
    },
    bluetoothStateOn: {
        type: Boolean,
        default: false
    },
    manufacturer: {
        type: String,
        default: undefined
    },
    deviceModel: {
        type: String,
        default: undefined
    },
    deviceName: {
        type: String,
        default: undefined
    }
});



export default mongoose.model('BluetoothConnection', BluetoothConnectionSchema);
