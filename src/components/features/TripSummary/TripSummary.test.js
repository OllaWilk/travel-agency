import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {


  it('should generate correct url link', () => {

    const expectedId ='abc';
    const component = shallow(<TripSummary tags={[]} id={expectedId} />);

    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(`/trip/${expectedId}`);
    //console.log(component.debug());
  });

  /*TESTOWANIE CZY  IMG MA POPRAWNE SRC I ALT*/
  //warunek: powninien generować poprawny img
  it('should render <img> with correct src and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'Lorem';
    const component = shallow(<TripSummary tags={[]} image={expectedImage} name={expectedAlt} />);
    console.log(':::::', component.debug());
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
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
    expect(() => shallow(<TripSummary />)).toThrow();
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