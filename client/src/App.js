import './App.css';
import React from 'react';
//import axios from 'axios';
import CalendarGrid from "./components/CalendarGrid/CalendarGrid.js";
import DayScreen from './components/DayScreen/DayScreen.js';
import Navbar from './components/Navbar/Navbar.js';
import ToDo from './components/ToDo/ToDo.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {





  return (
    <Router>
      <div className="App">
        <Navbar />


      </div>
      <Routes>
        <Route path="/" element={<CalendarGrid />} />
        <Route path="/day/:date" element={<DayScreen />} /> 
        <Route path="/to-do" element={<ToDo />} />
      </Routes>
    </Router>
  );  
}

export default App;
