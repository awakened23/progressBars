import {fetchFromApi} from "./fetcher"

export function fetchProgressBars(dispatch, actionCreator){
    fetchFromApi(dispatch, 'http://pb-api.herokuapp.com/bars', actionCreator);
}
