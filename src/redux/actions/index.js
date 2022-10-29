export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET'
export const SET_TIMER = 'SET_TIMER'

export function decrement(){
    return {
        type: DECREMENT,
    }
}

export function reset(){
    return {
        type: RESET,
    }
}

export function setTimer(payload){
    return {
        type: SET_TIMER,
        payload
    }
}