
import { useParams, useNavigate } from "react-router-dom";
import { 
  format,
  addDays,
  isToday,
} from "date-fns";

const DayScreen = () => {
  const { date } = useParams(); // Get date from URL
  const navigate = useNavigate(); // navigation function

  let selectedDate = date;
  selectedDate = addDays(selectedDate, 1); //increment day by 1 since was one off before

  let formattedDate = format(selectedDate, 'MMMM dd, yyyy');
  if(isToday(formattedDate)){
    formattedDate = "Today";
  }

  return (
    <div className="day-screen">
      <button onClick={() => navigate("/")} className="back-to-calendar-button">
        ← Back to Calendar
      </button>
      <h2 className="day-screen-title">Events for {formattedDate}</h2>
      <div className="day-screen-content">
        {/* Placeholder for events */}
        <p className="day-screen-no-events">No events scheduled.</p>
      </div>
    </div>
  );
};

export default DayScreen;