
import { useParams, useNavigate } from "react-router-dom";
import { format, addDays, isToday, parseISO } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { fetchEvents } from "../../services/api";
import { useEffect, useState } from "react"; 

const DayScreen = () => {
  const { date } = useParams(); //get date from URL
  const navigate = useNavigate(); //navigation function
  const [events, setEvents] = useState([]) //set initial state as empty array to hold events

  const dateObj = new Date(date);
  const adjustedDate = addDays(dateObj, 1); //increment day by 1 since was one off before
  const selectedDate = format(adjustedDate, "yyyy-MM-dd"); //increment day by 1 since was one off before

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []); //only runs on first render cuz dependency []

  let userFormattedDate = format(adjustedDate, 'MMMM dd, yyyy');


  if(isToday(adjustedDate)){
    userFormattedDate = "Today";
  } 

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const filteredEvents = events.filter(event => formatInTimeZone(parseISO(event.date), timeZone, "yyyy-MM-dd") === selectedDate); //filters to only events for this day



  return (
    <div className="day-screen">
      <button onClick={() => navigate("/")} className="back-to-calendar-button">
        ← Back to Calendar
      </button>
      <div className="day-screen-content">
        <h2 className="day-screen-title">Events for {userFormattedDate}</h2>
        {filteredEvents.length > 0 ? (
          <ul>
            {filteredEvents.map(event => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>
        ) : (
          <p className="day-screen-no-events">No events scheduled.</p>
        )}
      </div>
    </div>
  );
};

export default DayScreen;