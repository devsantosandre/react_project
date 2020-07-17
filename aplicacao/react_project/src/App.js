import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

function getArtist() {
  var artist = "";
  var raw = "";
  var requestOptions = {
    method: 'GET',
    body: raw,
    redirect: 'follow'
  };

  fetch(`http://ws.audioscrobbler.com/2.0/?format=json&method=artist.getsimilar&artist=${artist}&api_key=53701585b00198db3a80dcf69bc4ef8c`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


export default App;
