import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import tripsList from './data/trips.json';
import countriesList from './data/countries.json';
import { useDispatch } from 'react-redux';
import { setTrips } from './redux/slices/tripsSlice';
import { setCountries } from './redux/slices/countriesSlice';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Home } from './components/views/Home/Home';
import { Trips } from './components/views/Trips/Trips';
import { Countries } from './components/views/Countries/Countries';
// TODO - import other views
import { Info } from './components/views/Info/Info';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTrips(tripsList));
    dispatch(setCountries(countriesList));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/countries' element={<Countries />} />
          {/* TODO - add more routes for other views */}
          <Route path='/info' element={<Info />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export { App };
