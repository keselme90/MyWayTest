import mongoose from 'mongoose';

const BluetoothPairing =  new mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    brand: {
        type: String,
        default: '',
    },
    licence: {
        type: String,
        default: ''
    },
    btUUID: {
      type: String,
      default: ''
    },
    btName: {
      type: String,
      default: ''
    },
    sentFrom: {
      type: String,
      default: ''
    }
});



export default mongoose.model('BluetoothPairing', BluetoothPairing);
