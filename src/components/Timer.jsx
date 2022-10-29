import './styles/Timer.scss'

export default function Pomodoro ({ seconds }){

    function format(seconds){
        return `${('0' + Math.floor(seconds/60)).slice(-2)}:${('0' + (seconds%60)).slice(-2)}`
    }

    return (
        <div className='timer'>
            <span className='counter'>{ format(seconds) }</span>
            <span className='text'>min</span>
        </div>
    )
}