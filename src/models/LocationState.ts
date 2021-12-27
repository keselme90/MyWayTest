import mongoose from 'mongoose';

const LocationSateSchema =  new mongoose.Schema({
    locationState: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    }
});


export default mongoose.model('LocationSate', LocationSateSchema);
