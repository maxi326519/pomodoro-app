import { useState } from 'react'

export default function Settings({ handleSettings, state, setTimer}){

    const [settings, setSetting] = useState({minutes: 25, shortBreak: 5, longBreak: 15, amount: 4});

    function handleChange(e){

    }

    function handleSubmit(e){
        e.preventDefault();
/*         setTimer({
            seconds: settings.minutes/60,
            minutes: settings.minutes,
            amount: settings.amount,
            shortBreak: settings.shortBreak,
            longBreak: settings.longBreak
        }); */
    }
    
    return(
        <div className={`settings`}>
            <form className={`settings__containe`} onSubmit={handleSubmit}>
                <button className='setting__close'>x</button>
                <h2>SETTINGS</h2>
        
                <label>Pomo time</label>
                <input type='range' step='5' min='15' max='60' value={state.minutes} onChange={ e => handleChange(e) }/>
                <span>{state.minutes}</span>
        
                <label>Short</label>
                <input type='range' step='5' max='15' value={state.shortBreak} onChange={ e => handleChange(e) }/>
                <span>{state.shortBreak}</span>
        
        
                <label>Long</label>
                <input type='range' step='5' max='20' value={state.longBreak} onChange={ e => handleChange(e) }/>
                <span>{state.longBreak}</span>
        
                <label>Count</label>
                <input type='range' max='5' value={state.amount} onChange={ e => handleChange(e) }/>
                <span>{state.amount}</span>
        
                <button className='setting__save' type='submit'>Save</button>

                <span>{ settings }</span>
            </form>
        </div>
    )
}