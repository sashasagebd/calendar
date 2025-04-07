import express from 'express';
import Event from '../models/Event.js';

const router = express.Router();


router.post('/', async (req, res) => {
    try{
        const { title, date} = req.body;
        const newEvent = new Event({ title, date });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch(error){
        res.status(500).json({ error: "Error creating event" })
    }
});

router.get('/', async (req, res) => {
    try{
        const events = await Event.find();
        res.json(events);
    } catch(error){
        res.status(500).json({ error: "Error fetching events" });
    }
});

export default router;