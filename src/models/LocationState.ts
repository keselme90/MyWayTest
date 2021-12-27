import mongoose from 'mongoose';

const LocationStateSchema =  new mongoose.Schema({
    locationState: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    }
});


export default mongoose.model('LocationState', LocationStateSchema);
