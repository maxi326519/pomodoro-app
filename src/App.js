import React from 'react'

import Timeline from './components/Timeline.jsx';
import Timer from './components/Timer.jsx';
import Controls from './components/Controls.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Timeline/>
      <Timer/>
      <Controls/>
    </div>
  );
}

export default App;
