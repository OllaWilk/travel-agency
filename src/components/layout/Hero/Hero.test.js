import React from 'react'; //import reacta, shallow i pliku do testowania
import {shallow} from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {  //describe zgrupuje testy. W pierwszym argumencie jest hero w drugim argumencie jest funkcja strzałkowa z innymi testammi.
  it('should render without crashing', () => { //it definiuje pojedynczy test. Opis testu jest w 1 argumencie.
    const component = shallow(<Hero titleText='Lorem ipsum' imageSrc='' />); //w stałej component zapisany jest funkcji shallow
    expect(component).toBeTruthy(); //expect sprawdza czy wyrenderowany oiekt jest prawdziwy
    //console.log(component.debug());
  });

  /*TESTOWANIE BRZEGOWE - jak zachowa się dokument kiedy nie podamy propsa*/

  it('should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toThrow();
  });

  /*ELEMENTY KOMPONTENTU- */

  it('should render correct title and image', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);

    const renderedTitle = component.find('.title').text(); //.find i .text to pakiety dostarczone z Enzyme.
    expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('.image').prop('src')).toEqual(expectedImage);
  });

  /*SPRAWDZA CZY WYRENDEROWANY WRAPER KOMPONENTU OTRZYMUJE POPRAWNE KLASY W ZALEŻNOŚCI OD PROPSA VARIANT*/

  it('renders correct classNames', () => {
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('small')).toBe(true);
    expect(component.hasClass('dummy')).toBe(true);
  });

  it('should render HappyHourAd', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpd';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);

    expect(component.find('HappyHourAd').length).toEqual(1);
  });

});