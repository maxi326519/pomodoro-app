import { DECREMENT, RESET, SET_TIMER} from '../actions'

const initialState = {
    seconds: 5,
    minutes: 25,
    amount: 2,
    shortBreak: 5,
    longBreak: 10
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case DECREMENT:
            return{
                ...state,
                seconds: state.seconds -1
            }

        case RESET:
            return{
                ...state,
                seconds: state.minutes * 60
            }
            
        case SET_TIMER:
            return{
                seconds: action.payload.minutes * 60,
                ...action.payload
            }

        default:
            return{ ...state }
    }
}
