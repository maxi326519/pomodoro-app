import React from 'react'
import useState from 'react'
/* 
import Timeline from './components/Timeline.jsx';
import Timer from './components/Timer.jsx';
import Controls from './components/Controls.jsx'; */

import './App.css';

import click from './assets/audio/click.flac';
import alarm from './assets/audio/alert.mp3';

function App() {
  const [timer, setState] = useState({ active: false, minutes: 25, seconds: 5, counter: '25:00'});
  const [className, setClassname] = useState({class: ''});
  const [display, setDisplay] = useState({ play: '', pause: 'display',  settings: '', background: 'display'});
  const [setting, setSetting] = useState({pomoTime: 25, short: 5, long: 15, count: 4});

  var id = null;
  var sound = new Audio(click);
  var alert = new Audio(alarm);

  function handleTime(){
    if((timer.active === false) && (timer.seconds !== -1)){
        sound.play();
        setState({ ...timer, active: true })
        setClassname({ class: 'block' })
        setDisplay({ ...display, play: 'display', pause: ''});
    }else{
        sound.play();
        clearTimeout(id);
        setState({ ...timer, active: false })
        setClassname({ class: '' })
        setDisplay({ ...display, pause: 'display', play: ''});
    }
  }

  function settings(){
    if(timer.active === false){
        if(display.background === 'display'){
            setDisplay({ ...display, settings: '', background: '' });
        }else{
            setDisplay({ ...display, settings: 'animation' });
            setTimeout(()=>{setDisplay({ ...display, background: 'display' })}, 500)
        }
    }
    restart(setting.pomoTime);
}

function format(seconds){
    return `${('0' + Math.floor(seconds/60)).slice(-2)}:${('0' + (seconds%60)).slice(-2)}`
}

function restart(minutes){
  if(!minutes)
      minutes = timer.minutes;

  if(timer.active === false){
      setState({
          ...timer,
          minutes: minutes,
          seconds: minutes*60,
          counter: format(minutes*60)
      });
  }
}

  return (
    <div className="App">
{/*       <Timeline
        count={settings.count}
      />
      <Timer
        timer={timer}
        setState={setState}
        alert
        handleTime={handleTime}
        format={format}
        id={id}
      />
      <Controls
        display={display}
        className={className}
        sound={click}
        handleTime={handleTime}
        settings={settings}
      /> */}
    </div>
  );
}

export default App;
