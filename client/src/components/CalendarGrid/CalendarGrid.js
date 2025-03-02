import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  format,
  isToday,
} from "date-fns";
import "./CalendarGrid.css";
import { Link } from "react-router-dom"; 

const CalendarGrid = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = [];
  let day = startDate;
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <div className="calendar">

      <div className="header">
        <button onClick={() => setCurrentDate(addMonths(currentDate, -1))} className="nav-button">←</button>
        <h2>{format(monthStart, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))} className="nav-button">→</button>
      </div>

      <div className="weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="monthgrid">
        {days.map((day, index) => (
          <Link
            key={index}
            to={`/day/${format(day, "yyyy-MM-dd")}`} 
            className={`day ${format(day, "MM") !== format(monthStart, "MM") ? "dim" : ""} ${isToday(day) ? "day-current" : ""}`} //if day not in current month, dim square
          >
            {format(day, "d")}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
