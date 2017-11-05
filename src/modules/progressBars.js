import * as apiService from "../services/apiService";

const RECEIVE_PROGRESS_BARS = 'RECEIVE_PROGRESS_BARS';
const MODIFY_PROGRESS_BARS = 'MODIFY_PROGRESS_BARS';

export function receiveProgressBars(json){
    return {
        type: RECEIVE_PROGRESS_BARS,
        buttons: json.buttons,
        bars: json.bars,
        limit: json.limit
    }
}

export function modifyProgressBars(bar, value){
    return {
        type: MODIFY_PROGRESS_BARS,
        bar: bar,
        value: value
    }
}

export function fetchProgressBars(){
    return (dispatch) => {
        apiService.fetchProgressBars(dispatch, receiveProgressBars);
    }
}

export default function reducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PROGRESS_BARS:
            return {...state,
                buttons: action.buttons,
                bars: action.bars,
                limit: action.limit
            };
        case MODIFY_PROGRESS_BARS:
            let newState = {...state};
            let totalPercentage = Math.ceil(newState.bars[action.bar]/newState.limit*100) + action.value;

            if(totalPercentage < 0 ){
                newState.bars[action.bar] = 0;
            }else if(totalPercentage > 100){
                newState.bars[action.bar] = newState.limit;
            }else{
                newState.bars[action.bar] = newState.bars[action.bar] + (action.value/100*newState.limit);
            }
            return newState;
        default:
            return state;
    }
}
