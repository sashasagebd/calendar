import React, { useState } from 'react';
import { createEvent } from '../../services/api'
import './NewEventScreen.css';

const NewEventScreen = ({ onClose, onEventCreated }) => { //closes on close or event creation
  const [eventData, setEventData] = useState({ title: '', date: ''}); //setup form state
  const [loading, setLoading] = useState(false); //setup loading state
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent default POST
    
    if(!eventData.title || !eventData.date) return; //if no title or date, return

    try{
      setLoading(true);

      const addedEvent = await createEvent(eventData)//res.json();
      
      if(!addedEvent || addedEvent.error) throw new Error("Failed to create the event");

      onEventCreated(addedEvent); //sends data to parent & handleEventCreated
      setEventData({ title: '', date: '' }); //reset form
      onClose();    
    } catch(err) {
      setError(err.message);
    } finally{
      setLoading(false);
    }
  };

  return(
    <div className = "event-form">
        <h1 className = "event-form-header">New Event</h1>

        {error && <p className = "error-message">{error}</p>}

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={eventData.title}
          onChange={handleInput}
          className="title-input"
        />
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleInput}
          className="date-input"
        />

        <div className="new-event-buttons">
          <button onClick={onClose} className="close-button">
            Cancel
          </button>
          <button onClick={handleSubmit} className="submit-button">
            {loading ? "Adding event" : "Add event"}
          </button>

        </div>

    </div>
  );
};

export default NewEventScreen;
