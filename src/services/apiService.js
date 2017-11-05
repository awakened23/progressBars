import {fetchFromApi} from "./fetcher"

export function fetchProgressBars(dispatch, actionCreator){
    fetchFromApi(dispatch, 'http://localhost:3001/bars', actionCreator);
}
