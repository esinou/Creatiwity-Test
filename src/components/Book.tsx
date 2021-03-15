import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { connect } from 'react-redux';
import { saveUserInfos } from '../redux/actions/index';

function Book() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const userStoreToProps = (store: any) => {
    return {
        bookData: store.user.bookData,
    }
}
  
const userDispatchToProps = {
    saveUserInfos
}
  
export default connect(userStoreToProps, userDispatchToProps)(Book);