import React from 'react'
import { useState, useEffect } from 'react'

import './styles/Timer.scss'

import click from '../assets/audio/click.flac'
import alarm from '../assets/audio/alert.mp3'

export default function Pomodoro (){
    const [timer, setState] = useState({ active: false, minutes: 25, seconds: 5, counter: '25:00'});
    const [className, setClassname] = useState({class: ''});
    const [display, setDisplay] = useState({ play: '', pause: 'display',  settings: '', background: 'display'});
    const [setting, setSetting] = useState({pomoTime: 25, short: 5, long: 15, count: 4});
    var id = null;
    var sound = new Audio(click);
    var alert = new Audio(alarm);

    function handleTime(){
        if((timer.active === false) && (timer.seconds !== -1)){
            console.log(timer.seconds);
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

    useEffect(()=>{
        if(timer.active === true){
            if(timer.seconds >= 0){
                id = setTimeout(()=>{
                    if(timer.seconds === 0){
                        alert.play();
                        handleTime();
                    }
                    setState({
                        ...timer,
                        seconds: timer.seconds -1,
                        counter: format(timer.seconds)
                    })
                }, 1000);
            }
        }
    }, [timer]);

    return (
        <div className='pomodoro'>
            <div className='content__break-time'>
                <div className='break-time'>
                    <div>
                        <p>It's time a short break</p>
                        <svg className='time-line__break' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">{/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc */}<path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                    </div>
                    <span>05:00</span>
                    <button>Leave</button>
                </div>
            </div>
            <div className='circle'>
                <span className='counter'>{ timer.counter }</span>
                <span className='text'>min</span>
            </div>
            <div className='controls'>
                <button onClick={handleTime}>
                    <svg className={display.play} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">{/*Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                    <svg className={display.pause} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">{/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
                </button>

                <button className={`restart ${className.class}`} onClick={()=>{restart(); sound.play();}}>
                    <svg className='reload' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}<path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"/></svg>
                </button>

                <button className={`${className.class}`} onClick={()=>{settings(); sound.play();}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>
                </button>
            </div>
            <div className={`settings ${display.background}`}>
                <div className={`settings__container ${display.settings}`}>
                    <button className='setting__close' onClick={settings}>X</button>
                    <h2>SETTINGS</h2>

                    <label>Pomo time</label>
                    <input type='range' step='5' min='15' max='60' value={setting.pomoTime} onChange={e=>setSetting({ ...setting, pomoTime: e.target.value })}/>
                    <span>{setting.pomoTime}</span>

                    <label>Short</label>
                    <input type='range' step='5' max='15' value={setting.short} onChange={e=>setSetting({ ...setting, short: e.target.value })}/>
                    <span>{setting.short}</span>


                    <label>Long</label>
                    <input type='range' step='5' max='20' value={setting.long} onChange={e=>setSetting({ ...setting, long: e.target.value })}/>
                    <span>{setting.long}</span>

                    <label>Count</label>
                    <input type='range' max='5' value={setting.count} onChange={e=>setSetting({ ...setting, count: e.target.value })}/>
                    <span>{setting.count}</span>

                    <button className='setting__save' onClick={settings}>Save</button>
                </div>
            </div>
        </div>
    )
}