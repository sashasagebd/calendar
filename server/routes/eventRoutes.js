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

router.delete('/:id', async(req, res) => {
    try{
        const deleted = await Event.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json({ message: "Event deleted successfully" });
    } catch(err){
        res.status(500).json({ message: "Server error" });
    }
});

export default router;