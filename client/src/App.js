import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalendarGrid from "./components/CalendarGrid/CalendarGrid.js";
import DayScreen from './components/DayScreen/DayScreen.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
		//make GET request to fetch data from backend (express)
		axios.get('http://localhost:5000')
			.then(response => {
				setMessage(response.data); //Store response in state
			})
			.catch(error => { 
				console.error('Error fetching data:', error); //log errors
        setMessage("Failed to connect to backend")
			});
	}, []); //empty array means runs once when component mounts

  return (
    <Router>
      <div className="App">

        <div>
        <p>{message}</p>
        </div>


      </div>
      <Routes>
        <Route path="/" element={<CalendarGrid />} /> 
        <Route path="/day/:date" element={<DayScreen />} /> 
      </Routes>
    </Router>
  );  
}

export default App;
