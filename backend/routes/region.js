import express from 'express';
import Region from '../models/Region.js';

const router = express.Router();

router.get('/', async (req, res) => {
    let regions;
    try {
        regions = await Region.find();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: error.message
        });
    }
    return res.status(200).json({
        regions
    });
});


export default router;