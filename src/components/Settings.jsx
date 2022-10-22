import React  from 'react'

export default function Settings(){
    return(
        <div className={`settings`}>
            <div className={`settings__container`}>
                <button className='setting__close' {}>X</button>
                <h2>SETTINGS</h2>

                <label>Pomo time</label>
                <input type='range' step='5' min='15' max='60' value={setting.pomoTime} onChange={e=>setSetting({ ...setting, pomoTime: e.target.value })}/>
                <span></span>

                <label>Short</label>
                <input type='range' step='5' max='15' value={setting.short} onChange={e=>setSetting({ ...setting, short: e.target.value })}/>
                <span></span>


                <label>Long</label>
                <input type='range' step='5' max='20' value={setting.long} onChange={e=>setSetting({ ...setting, long: e.target.value })}/>
                <span></span>

                <label>Count</label>
                <input type='range' max='5' value={setting.count} onChange={e=>setSetting({ ...setting, count: e.target.value })}/>
                <span></span>

                <button className='setting__save' onClick={settings}>Save</button>
            </div>
        </div>
    )
}