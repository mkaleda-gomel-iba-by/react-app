import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {Card} from "./";

configure({adapter: new Adapter()});

const mockHistory = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistory
    }),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));

const mockCallback = jest.fn();

jest.mock('React', () => ({
    useCallback: mockCallback,
}));

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState')
useStateSpy.mockImplementation(state => [state, setState]);

jest.spyOn(React, 'useEffect')


describe('CardHeader', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            updateCard: jest.fn(),
            cardData: {
                id: 'id',
                header: 'header',
                body: 'body'
            },
            readOnly: false,
            isSingleCard: false,
            checked: false,
        };
        wrapper = mount(<Card {...props} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render Card', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render CardHeader and CardBody', function () {
        expect(wrapper.find('CardHeader')).toHaveLength(1);
        expect(wrapper.find('CardBody')).toHaveLength(1);
    });

    it('should redirect', () => {
        wrapper.find('div.card').simulate('doubleclick');
        expect(mockHistory).toHaveBeenCalledTimes(1);
    });

    it('should not redirect', () => {
        wrapper.setProps({...props, isSingleCard: true})
        wrapper.find('div.card').simulate('doubleclick');
        expect(mockHistory).not.toHaveBeenCalled();
    });

    it('should not redirect', () => {
        wrapper.find('.fa-pencil').simulate('click');
        wrapper.find('div.card').simulate('doubleclick');
        expect(mockHistory).not.toHaveBeenCalled();
    });

    it('should set editable to true ', () => {
        wrapper.find('.fa-pencil').simulate('click');
        expect(setState).toBeTruthy();
    });

    it('should invoke fill data', () => {
        wrapper.find('.card-header-title')
            .simulate('input', {target: {value: "test"}});

        expect(setState).toBeTruthy();
    });

    it('should invoke update card', () => {
        wrapper.find('.fa-pencil').simulate('click');
        wrapper.find('.fa-folder').simulate('click');

        expect(mockDispatch).toHaveBeenCalledWith({
            payload: {body: "body", header: "header", id: "id"},
            type: "UPDATE_CARD"
        });
    });

    it('should invoke restore card', () => {
        wrapper.find('.fa-pencil').simulate('click');
        wrapper.find('.fa-close').simulate('click');

        expect(setState).toBeTruthy();
    });

    it('should invoke useEffect', () => {
        wrapper.setProps({...props, readOnly: true})
        wrapper.update()

        expect(setState).toBeTruthy();
    });
});