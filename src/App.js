import React from 'react';
import ReactPlayer from 'react-player';

import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <p>Rick and Morty</p>
        <ReactPlayer url="https://adultswim-vodlive.cdn.turner.com/live/rick-and-morty/stream.m3u8" playing controls />
        <p>
          Created by <a href="https://github.com/ChemicalWonders">@ChemicalWonders</a>
        </p>

      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
