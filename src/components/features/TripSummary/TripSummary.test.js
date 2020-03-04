import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  /*TESTOWANIE CZY  GENEROWANY KOMPONENT MA POPRAWNY URL*/

  //warunek: powninien generować poprawny url

  it('should generate correct url link', () => {

    //zapisanie stałych wartości(warunków). Jeśli to ma wartość taką to spodziewaj się tego(expect)

    const expectedId ='abc';

    // stała component zapisuje wynik funkcji shallow, która renderuje komponent
    // więcej metod shallow => https://enzymejs.github.io/enzyme/docs/api/shallow.html

    const component = shallow(<TripSummary tags={[]} id={expectedId} />);

    //.find znajduje wyszystkie elementy pasujące do selektora

    const renderedLink = component.find('.link').prop('to');

    //spodziewaj się, że link zapisany w stałej będzie równy linkowi adresu '/trip/abc'
    expect(renderedLink).toEqual(`/trip/${expectedId}`);
    console.log(component.debug());
  });

  /*TESTOWANIE CZY  IMG MA POPRAWNE SRC I ALT*/
  //warunek: powninien generować poprawny img
  it('should render <img> with correct src and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'Lorem';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} />);

    expect(component.find('img').prop('src').toEqual(expectedImage));
    expect(component.find('img').prop('alt')).toEqual(expectedImage);
    console.log(component.debug());
  });


  /*czy poprawnie renderują się propsy name, cost i days, */

  it('should render correct props -name, cost, days', () => {
    const expectedName = 'Ola';
    const expectedCost = '108';
    const expectedDays = 3;
    const component = shallow(<TripSummary tags={[]} name={expectedName} days={expectedDays} cost={expectedCost} />);

    //spodziewaj się, że to powyższe będzie prawdą.
    expect(component).toBeTruthy();
  });


  /*czy jest wywoływany błąd w przypadku braku któregokolwiek z propsów: id, image, name, cost i days. */
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary tags={[]} />)).toThrow();
  });

  /*TESTOWANIE PROPSA TAGS. czy są w spanach w odpowiedniej kolejności.  przyda się => https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/at.html*/

  it('should render tags array in correct order', () => {
    const expectedArray = ['jeden', 'dwa', 'trzy'];
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect (component.find('.tags span').at(0)).toEqual[expectedArray[0]];
    expect (component.find('.tags span').at(1)).toEqual[expectedArray[1]];
    expect (component.find('.tags span').at(2)).toEqual[expectedArray[2]];
  });

  /*NIE RENDERUJ FAŁSZYWYCH TAGÓW */

  it('shouldn not render tags if props = undefind', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.find('.tags').exists()).toEqual(true);
  });

});