import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    map: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Map',
    },
    users: {
        type: Array(),
    },
    date: {
        type: String,
        default: new Date(new Date().getTime() + 3 * 3600 * 1000).toUTCString().replace(/ GMT$/, ''),
    },

    winning: {
        type: String,
    },
});


export default mongoose.model('Game', gameSchema);