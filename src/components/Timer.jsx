import React from 'react'
import { useState, useEffect } from 'react'

import './styles/Timer.scss'

import click from '../assets/audio/click.flac';
import alarm from '../assets/audio/alert.mp3';

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
        <div className='timer'>
            <div className='circle'>
                <span className='counter'>{ timer.counter }</span>
                <span className='text'>min</span>
            </div>
        </div>
    )
}