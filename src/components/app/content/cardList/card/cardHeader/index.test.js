import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {CardHeader} from "./";

configure({adapter: new Adapter()});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));

describe('CardHeader', () => {


    let wrapper, props;

    beforeEach(() => {
        props = {
            saveCardDataChanges: jest.fn(),
            restoreCardDataChanges: jest.fn(),
            editMode: jest.fn(),
            fillData: jest.fn(),
            selectCard: jest.fn(),
            readOnly: false,
            card: {
                id: 'id',
                header: 'header'
            },
            cardOptions: {
                checked: false,
                editable: false
            }
        };
        wrapper = shallow(<CardHeader {...props} />);
    });

    it('should render view panel', () => {
        expect(wrapper.find('.fa-pencil')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('should render view panel without edit icon', () => {
        wrapper.setProps({
            ...props, readOnly: true
        })
        expect(wrapper.find('.fa-pencil')).toHaveLength(0);
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('should render edit panel', () => {
        wrapper.setProps({
            ...props, cardOptions: {
                checked: false,
                editable: true
            }
        })
        expect(wrapper.find('.fa-folder')).toHaveLength(1);
        expect(wrapper.find('.fa-close')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should call editMode function', () => {
        wrapper.find('.fa-pencil').simulate('click');
        expect(props.editMode).toHaveBeenCalled();
    });

    it('should call selectCard function', () => {
        wrapper.find({type: 'checkbox'}).simulate('change', {target: {checked: true}})
        expect(mockDispatch).toHaveBeenCalledWith({"payload": "id", "type": "SELECT_CARD"});
    });

    it('should call saveCardDataChanges function', () => {
        wrapper.setProps({
            ...props, cardOptions: {
                checked: false,
                editable: true
            }
        })
        wrapper.find('.fa-folder').simulate('click');
        expect(props.saveCardDataChanges).toHaveBeenCalled();
    });

    it('should call restoreCardDataChanges function', () => {
        wrapper.setProps({
            ...props, cardOptions: {
                checked: false,
                editable: true
            }
        })
        wrapper.find('.fa-close').simulate('click');
        expect(props.restoreCardDataChanges).toHaveBeenCalled();
    });

    it('should call fillData function', () => {
        wrapper.setProps({
            ...props, cardOptions: {
                checked: false,
                editable: true
            }
        })
        wrapper.find('.card-header-title').simulate('input', {target: {value: "test"}});
        expect(props.fillData).toHaveBeenCalledWith({header: 'test'});
    });
});