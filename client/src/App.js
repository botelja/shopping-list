import React from 'react';
import AppNavbar from './components/layout/AppNavbar';
import ShoppingList from './components/ShoppingList';

import './App.css';

const App = () => {
  return (
    <div>
      <AppNavbar />
      <ShoppingList />
    </div>
  );
};

export default App;
