import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../SearchBar/SearchBar';
import '../SearchResult/SearchResult';
import '../PlayList/PlayList';


function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResult />
          <PlayList />
        </div>
      </div>
    </div>
  );
}

export default App;
