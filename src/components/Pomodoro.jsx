import React from 'react'

export default function Pomodoro (){
    return (
        <div className='pomodoro'>
            <div className='circle'>
                <span className='counter'>25</span>
                <span className='text'>min</span>
            </div>
            <div className='controls'>
                <button className='play'></button>
                <button className='restart'></button>
            </div>
        </div>
    )
}