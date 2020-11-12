import mongoose from 'mongoose';

const mapSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    region: {
        type: Array()
    },
});

export default mongoose.model('Map', mapSchema);