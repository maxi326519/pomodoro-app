import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import Pomodoro from './components/Pomodoro.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
{/*         <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Pomodoro/>}/>
      </Routes>
    </div>
  );
}

export default App;
