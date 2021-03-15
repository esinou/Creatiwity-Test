import React from 'react';
import './App.css';

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import Book from './components/Book';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Book/>
      </PersistGate>
    </Provider>
  );
}

export default App;
