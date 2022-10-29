import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, reset } from './redux/actions'

import Timeline from './components/Timeline.jsx'
import Timer from './components/Timer.jsx'
import Controls from './components/Controls.jsx'

import click from './assets/audio/click.flac'
import alarm from './assets/audio/alert.mp3'

import './App.css';

function App() {

/*   const [className, setClassname] = useState({class: ''});
  const [display, setDisplay] = useState({ play: '', pause: 'display',  settings: '', background: 'display'}); */

  const [timer, setTimer] = useState(false);
  const [setting, setSettings] = useState(false);

  const [seconds, amount] = useSelector( state => [state.seconds, state.amount] );
  const dispatch = useDispatch();

  var clickAudio = new Audio(click)
  var alarmAudio = new Audio(alarm)

  function clickSound(){ clickAudio.play() }
  function alarmSound(){ alarmAudio.play() }

  function handleToggle(){
    timer ? setTimer(false) : setTimer(true)
    clickSound();
  }

  function handleReset(){
    if(!timer){
      dispatch(reset());
      clickSound();
    }
  }

  function handleSettings(){
    setting ? setSettings(false) : setSettings(true);
  }

  useEffect(()=>{
    console.log(seconds);
      var id = setTimeout(()=>{
        if(timer){
          if(seconds > 0){
            dispatch(decrement());
          }else if(timer){
            alarmSound();
            handleToggle();
          }
        }
      }, 1000);

      return()=>{
        clearTimeout(id);
      }

  }, [timer, seconds]);

  return (
    <div className="App">
      <Timeline amount={amount}/>
      <Timer seconds={seconds}/>
      <Controls
        clickSound={ clickSound }
        handleToggle={ handleToggle }
        handleReset={handleReset}
        handleSettings={handleSettings}
      />
{/*       <Settings
        handleSettings={handleSettings}
        
      /> */}
    </div>
  );
}

export default App;