import mongoose from 'mongoose';

const regionSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    gold: {
        type: Number,
    },
    wars: {
        type: Number,
    },
    neighboringRegion: {
        type: [],
    },
    // map: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Map',
    // },
});


export default mongoose.model('Region', regionSchema);