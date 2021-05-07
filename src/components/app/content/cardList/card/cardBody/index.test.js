import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardBody from './';

configure({ adapter: new Adapter() });

describe('CardBody', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            fillData: jest.fn(),
            editable: false,
            body: "body"
        };
        wrapper = shallow(<CardBody {...props} />);
        console.log(wrapper.find('textarea'));

    });

    it('should input be disabled if editable == false', function() {
        expect(wrapper.find('textarea').prop('disabled')).toBe(true)
    });

    it('should textarea have value body', () => {
        expect(wrapper.find('textarea').prop('value')).toBe('body');
    });

    it('should call fillData function', () => {
        wrapper.find('textarea').simulate('change', { target: { value: 'newBody' } });
        expect(props.fillData).toHaveBeenCalled();
    });
});