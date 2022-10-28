import React from 'react'
import useEffect from 'react'

import './styles/Timer.scss'

export default function Pomodoro ({ timer, setState, alert, handleTime, format, id}){

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