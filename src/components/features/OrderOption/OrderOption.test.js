/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {

  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='number' name='testName' />);
    expect(component).toBeTruthy();
  });


  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });


  it('should display name props in title', () => {
    const expectedTitle = 'title';
    const component = shallow(<OrderOption name='title' type='number' />);

    expect(component.find('.title').text()).toEqual(expectedTitle);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: '1'}, //Błąd:  w OrderOptionNumber oczekiwał propsa CurrentValue jako stringa. a tutaj dostawał liczbę, którą zamieniłam na stringa.
  text: {},
  date: {},
};


// eslint-disable-next-line no-unused-vars
const testValue = mockProps.values[1].id;
const testValueNumber = 3;
const testDate = new Date(mockProps.date);
const testDateValue = mockProps.date;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */

    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} /* 3 */
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
      //console.log(subcomponent.debug());
    });

    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */

        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption =select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });



        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }

      case 'icons': {
        /* tests for icons*/

        it('should render div with .icon', () => {
          const icon = renderedSubcomponent.find('.icon');
          //console.log('::', renderedSubcomponent.debug());
          expect(icon.length).toBe(3);
        });


        it('should run setOrderOption function on click', () => {
          //console.log(':::', renderedSubcomponent.debug());
          renderedSubcomponent.find('[data-qa-icon]').last().simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }

      case 'checkboxes': {
        /* tests for checkboxes */

        it('should render input with value=testValue', () => {
          //console.log('%%%', renderedSubcomponent.debug());
          const checkboxes = renderedSubcomponent.find('input[type="checkbox"]').first(); //test znajdował i "klikał" 2 inputy na raz. Wskazałam mu pierwszy input.
          expect(checkboxes.length).toBe(1);
        });

        it('should run setOrderOption function on change ', () => {
          renderedSubcomponent.find(`input[value="${testValue}"]`).simulate('change', {currentTarget: {checked: true}}); // tutaj był zły zapis był ' a powinien być `
          //console.log('%%%', renderedSubcomponent.debug());

          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue]});
        });

        break;
      }

      case 'number': {
        /* tests for number */

        it('contains input with number', () => {
          const inputNumber = renderedSubcomponent.find('input');
          expect(inputNumber.length).toBe(1);
        });

        it('should run setOrderOption on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });

        break;
      }

      case 'text': {
        /* tests for text */

        it('contains input', () => {
          const inputText = renderedSubcomponent.find('input');
          expect(inputText.length).toBe(1);
        });

        it('should run setOrderOption on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }

      case 'date': {
        /* tests for date */

        it('contains DatePicker', () => {
          const inputDate = renderedSubcomponent.find(DatePicker);
          expect(inputDate.length).toBe(1);
        });

        it('should run setOrderOption on change', () => {

          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          console.log('', renderedSubcomponent.debug());

          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue});
        });

        break;
      }
    }
  });
}