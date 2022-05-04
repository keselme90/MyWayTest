import mongoose from 'mongoose';

const BluetoothPairing =  new mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    btUUID: {
      type: String,
      default: ''
    },
    btName: {
      type: String,
      default: ''
    },
    vehicleName: {
        type: String,
        default: ''
    },
    vehicleNumber: {
        type: String,
        default: ''
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
    deviceName: {
        type: String,
        default: 'Unknown'
    },
    osVersion: {
        type: String,
        default: '0.0'
    }
});



export default mongoose.model('BluetoothPairing', BluetoothPairing);
