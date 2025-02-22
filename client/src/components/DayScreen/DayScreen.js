
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const DayScreen = () => {
  const { date } = useParams(); // Get date from URL
  const navigate = useNavigate(); // Used to navigate programmatically

  // Convert the date from string format to Date object
  const selectedDate = new Date(date);

  return (
    <div className="day-screen">
      <button onClick={() => navigate("/")} className="day-screen__back-button">
        ← Back to Calendar
      </button>
      <h2 className="day-screen-title">Events for {format(selectedDate, "MMMM d, yyyy")}</h2>
      <div className="day-screen-content">
        {/* Placeholder for events */}
        <p className="day-screen-no-events">No events scheduled.</p>
      </div>
    </div>
  );
};

export default DayScreen;