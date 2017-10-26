import reducer, {receiveProgressBars, fetchProgressBars} from './progressBars';
import * as apiService from "../services/apiService";

describe('action creators', () => {
    describe('receiveProgressBars', () => {

        let json = {
            buttons: [18,49,-45,-26],
            bars: [52,17,30,58],
            limit: 190
        }

        it('returns RECEIVE_PROGRESS_BARS action', () => {
            const action = receiveProgressBars(json);
            expect(action.type).toEqual('RECEIVE_PROGRESS_BARS');
            expect(action.buttons).toEqual([18,49,-45,-26]);
            expect(action.bars).toEqual([52,17,30,58]);
            expect(action.limit).toEqual(190);
        });
    });
});

describe('fetchProgressBars', () => {

    it('calls fetchFromApi with correct parameters', () => {
        const fetchAction = fetchProgressBars();
        apiService.fetchProgressBars = jest.fn();
        fetchAction('dispatch');
        expect(apiService.fetchProgressBars).toHaveBeenCalledWith('dispatch', receiveProgressBars);
    });
});

describe('reducer', () => {
    it('returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual({});
    })

    it('handles RECEIVE_PROGRESS_BARS', () => {
        expect(reducer({}, {
            type: 'RECEIVE_PROGRESS_BARS',
            buttons: [18,49,-45,-26],
            bars: [52,17,30,58],
            limit: 190
        })).toEqual({
            buttons: [18,49,-45,-26],
            bars: [52,17,30,58],
            limit: 190
        });
    });
});
