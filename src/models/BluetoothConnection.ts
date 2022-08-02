import mongoose from 'mongoose';

const BluetoothConnectionSchema =  new mongoose.Schema({
    connectionState: {
        type: String,
        default: undefined,
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
    reportTimestamp: {
        type: Date,
        default: undefined
    }
});



export default mongoose.model('BluetoothConnection', BluetoothConnectionSchema);
