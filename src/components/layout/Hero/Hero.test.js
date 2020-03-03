import React from 'react'; //import reacta, shallow i pliku do testowania
import {shallow} from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {  //describe zgrupuje testy. W pierwszym argumencie jest hero w drugim argumencie jest funkcja strzałkowa z innymi testammi.
  it('should render without crashing', () => { //it definiuje pojedynczy test. Opis testu jest w 1 argumencie.
    const component = shallow(<Hero titleText='Lorem ipsum' />); //w stałej component zapisany jest funkcji shallow
    expect(component).toBeTruthy(); //expect sprawdza czy wyrenderowany oiekt jest prawdziwy
  });

});