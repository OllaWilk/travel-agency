import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { MainLayout } from './components/layout/MainLayout/MainLayout';

import { Home } from './components/views/Home/Home';
import { Trips } from './components/views/Trips/Trips';
// TODO - import other views
import { Info } from './components/views/Info/Info';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => {
  //const dispatch = useDispatch();
  //useEffect(() => dispatch(lorem()), [dispatch]);

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/trips' element={<Trips />} />
          {/* TODO - add more routes for other views */}
          <Route path='/info' element={<Info />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export { App };
