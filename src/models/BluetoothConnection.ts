import mongoose from 'mongoose';

const BluetoothConnectionSchema =  new mongoose.Schema({
    journeyId: {
      type: String,
      default: undefined
    },
    connectionState: {
        type: String,
        default: undefined,
    },
    connectionStateTimestamp: {
        type: Date,
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
