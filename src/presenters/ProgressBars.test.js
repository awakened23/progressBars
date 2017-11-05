import React from 'react';
import ProgressBars from './ProgressBars';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from 'react-select';
import {Line} from 'rc-progress';

Enzyme.configure({ adapter: new Adapter() });

describe('ProgressBars', () => {

    let fetchProgressBars= jest.fn();
    let modifyBar= jest.fn();

    let props = {
        fetchProgressBars: fetchProgressBars,
        progressBars: {},
        modifyBar: modifyBar
    }

    beforeEach(() => {
        fetchProgressBars.mockClear();
        modifyBar.mockClear();
    });

    it('renders without crashing', () => {
        let wrapper = shallow(<ProgressBars {...props}/>);
        expect(fetchProgressBars).toHaveBeenCalled();
        expect(wrapper.find('button')).toHaveLength(0);
        expect(wrapper.find(Select)).toHaveLength(0);
    });
    it('renders components when progressBars are available', () => {
        let wrapper = shallow(<ProgressBars {...props}/>);

        wrapper.setProps({
            progressBars: {
                buttons: [18,49,-45,-26],
                bars: [52,17,30,58],
                limit: 190
            }});

        expect(wrapper.find(Line)).toHaveLength(4);
        expect(wrapper.find(Line).get(0).props.percent).toEqual(27);
        expect(wrapper.find(Line).get(1).props.percent).toEqual(8);
        expect(wrapper.find(Line).get(2).props.percent).toEqual(15);
        expect(wrapper.find(Line).get(3).props.percent).toEqual(30);

        expect(wrapper.find('button')).toHaveLength(4);
        expect(wrapper.find('button').get(0).props.children).toEqual(18);
        expect(wrapper.find('button').get(1).props.children).toEqual(49);
        expect(wrapper.find('button').get(2).props.children).toEqual(-45);
        expect(wrapper.find('button').get(3).props.children).toEqual(-26);

        expect(wrapper.find(Select)).toHaveLength(1);
        expect(wrapper.find(Select).props().options).toHaveLength(4);
        expect(wrapper.find(Select).props().options[0].value).toEqual(0);
        expect(wrapper.find(Select).props().options[1].value).toEqual(1);
        expect(wrapper.find(Select).props().options[2].value).toEqual(2);
        expect(wrapper.find(Select).props().options[3].value).toEqual(3);
        expect(wrapper.find(Select).props().options[0].label).toEqual('bar 1');
        expect(wrapper.find(Select).props().options[1].label).toEqual('bar 2');
        expect(wrapper.find(Select).props().options[2].label).toEqual('bar 3');
        expect(wrapper.find(Select).props().options[3].label).toEqual('bar 4');
    });

    it('calls modifyBar with correct parameters when button is clicked', () => {
        let newProps = {
            progressBars: {
                buttons: [18,49,-45,-26],
                bars: [52,17,30,58],
                limit: 190
            }};
        let wrapper = shallow(<ProgressBars {...props} {...newProps}/>);

        wrapper.find(Select).props().onChange({ value: 1 });
        wrapper.find('button').get(1).props.onClick();
        expect(modifyBar).toHaveBeenCalledWith(1, 49);
    });
});
