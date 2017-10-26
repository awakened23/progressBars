import axios from "axios";

export function fetchFromApi(dispatch, path, actionCreator) {
    axios.get(path)
        .then(response => {
            console.log(response);
            dispatch(actionCreator(response.data));
        })
        .catch(error => {
            console.log(error);
        });
}
