import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import tripsList from './data/trips.json';
import countriesList from './data/countries.json';
import parseTrips from './utils/parseTrips';
import { useDispatch } from 'react-redux';
import { setTrips } from './redux/slices/tripsSlice';
import { setCountries } from './redux/slices/countriesSlice';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Home } from './components/views/Home/Home';
import { Trips } from './components/views/Trips/Trips';
import { Trip } from './components/views/Trip/Trip';
import { Countries } from './components/views/Countries/Countries';
import { Country } from './components/views/Country/Country';
import { Regions } from './components/views/Regions/Regions';
import { Info } from './components/views/Info/Info';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const parsedState = parseTrips(tripsList, countriesList);

    dispatch(setTrips(tripsList));
    dispatch(setCountries(parsedState.countries));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/trips/:id' element={<Trip />} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/countries/:id' element={<Country />} />
          <Route path='/regions' element={<Regions />} />
          <Route path='/info' element={<Info />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export { App };
