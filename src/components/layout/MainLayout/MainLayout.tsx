import React from 'react';
import { ChildrenOnly } from 'types/base-types';
import { Header } from '../Header/Header';

const MainLayout = ({ children }: ChildrenOnly) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export { MainLayout };
