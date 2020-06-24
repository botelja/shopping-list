import React from 'react';
import AppNavbar from './components/layout/AppNavbar';
import ShoppingList from './components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AppNavbar />
        <ShoppingList />
      </div>
    </Provider>
  );
};

export default App;
