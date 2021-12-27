import mongoose from 'mongoose';

const BluetoothConnectionSchema =  new mongoose.Schema({
    connectionState: {
        type: String,
        required: true,
    },
    btUUID: {
        type: String,
        required: true
    },
    btName: {
      type: String,
      required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});



export default mongoose.model('BluetoothConnection', BluetoothConnectionSchema);
