import {fetchProgressBars} from "./apiService"
import * as fetcher from "./fetcher"

describe('fetchProgressBars', () => {
    it('calls fetchFromApi with correct parameters', () => {
        fetcher.fetchFromApi = jest.fn();

        fetchProgressBars('dispatch', 'actionCreator');

        expect(fetcher.fetchFromApi).toHaveBeenCalledWith('dispatch', 'http://localhost:3001/bars', 'actionCreator');
    });
});
