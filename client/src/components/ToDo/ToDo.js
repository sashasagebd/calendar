//import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; //we use useState instead of native html
import NewEventScreen from '../NewEventScreen/NewEventScreen';
//import { format } from "date-fns";

const ToDo = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false) //initial modal state is not open

  useEffect(() => {
    const fetchEvents = async () => {
      try{
        const res = await fetch('http://localhost:5000/api/events');
        const data = await res.json();
        setEvents(data);
      } catch(error){
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);
  
  const handleEventCreated = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowModal(false);
  }

  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
  

  return(
    <div className="to-do">
      <h1 className="to-do-header">To-Do List</h1>
    
      {events.length > 0 ? ( /*if there are events*/

        <ul id="to-do-list">
         {sortedEvents.map((event) => ( 
          <li key={event._id || event.id}>
            <strong>{event.title}</strong> — {new Date(event.date).toLocaleDateString()}
          </li>
         ))}
        </ul>
      ) : (
        <p>No events</p>
      )}

      <button
        onClick={() => setShowModal(true)}
        className="new-event-button"
      >
        Add New Event
      </button>
      
      {showModal && <NewEventScreen onClose={() => setShowModal(false)} onEventCreated={handleEventCreated} /> /*show new event screen when showModal is true*/} 
    </div>
  );
};

export default ToDo;