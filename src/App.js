import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './App.css';

function App() {
  return (
    <div className="App">
      Rick and Morty Live Stream
      <header className="App-header">
        <ReactPlayer url="https://adultswim-vodlive.cdn.turner.com/live/rick-and-morty/stream.m3u8" playing controls/>
      </header>
    </div>
  );
}

export default App;
