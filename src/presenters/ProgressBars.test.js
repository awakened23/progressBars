import React from 'react';
import ProgressBars from './ProgressBars';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ProgressBars', () => {

    let fetchProgressBars= jest.fn();

    let props = {
        fetchProgressBars: fetchProgressBars,
        progressBars: {
            buttons: [18,49,-45,-26],
            bars: [52,17,30,58],
            limit: 190
        }
    }
    it('renders without crashing', () => {
        let wrapper = shallow(<ProgressBars {...props}/>);
        expect(fetchProgressBars).toHaveBeenCalled();
    });
});
