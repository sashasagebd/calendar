import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
			});
	}, []); //empty array means runs once when component mounts

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
				<p>{message}</p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
